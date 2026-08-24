---
name: mobile-app-development
description: Cross-platform mobile development patterns for React Native, Flutter, iOS, and Android with responsive design and offline support.
triggers:
  - "iOS/Android app development"
tokens: ~1133
---

# Mobile App Development

## Description
Patterns and practices for building production mobile applications: cross-platform framework selection, responsive layouts for varying screen sizes, offline-first data strategies, and platform-specific considerations. Derived from j4flmao/agent-skills.

## When to Activate
- Starting a new mobile project or selecting a framework
- Implementing responsive layouts across screen sizes
- Building offline-first data synchronization
- Integrating platform-specific APIs (camera, push notifications, biometrics)
- Optimizing mobile app performance (startup time, bundle size, frame rate)
- Reviewing mobile code for best practices

## Process

### 1. Framework Selection
- **React Native**: Best for teams with React expertise; large ecosystem; good for most apps
- **Flutter**: Best for pixel-perfect UI across platforms; strong for custom animations
- **Native (Swift/Kotlin)**: Required for platform-specific features (widgets, background tasks)
- Choose based on: team expertise, UI complexity, performance requirements, platform coverage

### 2. Responsive Design for Mobile
- Use flexible layouts (`flex`, `dp`/`sp` units) not fixed pixel values
- Design for the smallest supported screen first (360px width as baseline)
- Handle safe areas (notch, status bar, home indicator) using platform APIs
- Use responsive typography: `clamp()` or platform scaling
- Test on actual devices, not just simulators; include tablets if in scope

### 3. Offline-First Data
- Cache API responses locally (SQLite, Realm, or platform-specific storage)
- Use optimistic UI updates; sync in background when connectivity returns
- Queue write operations when offline; replay on reconnection
- Detect connectivity state; show offline indicators to users
- Resolve conflicts: last-write-wins for simple data; operational transform for collaborative

### 4. Platform-Specific Patterns
- **iOS**: Follow Human Interface Guidelines; use `SafeAreaView`; support Dynamic Type
- **Android**: Follow Material Design; handle back button properly; support adaptive icons
- **Push notifications**: Use FCM for Android, APNs for iOS; handle notification permissions
- **Deep linking**: Configure universal links (iOS) and app links (Android) consistently

### 5. Performance Optimization
- Keep startup time < 2 seconds on mid-range devices
- Lazy-load screens and heavy components
- Use FlatList/ListView with `getItemLayout` for fixed-height lists
- Minimize bridge crossings in React Native; batch operations
- Profile with Flipper (React Native) or DevTools (Flutter)
- Target 60fps; avoid work on the main thread

## Quality Criteria
- App launches in < 2 seconds on mid-range device
- All screens work on 360px–428px width (phone) and 768px+ (tablet)
- Offline mode provides graceful degradation (read cached data, queue writes)
- No memory leaks (verified via profiling tools)
- Platform guidelines followed (HIG / Material Design)
- Binary size < 50MB (Android APK), < 100MB (iOS)

## References
- [j4flmao/agent-skills — Mobile Development](https://github.com/j4flmao/agent-skills)
- [React Native Documentation](https://reactnative.dev/)
- [Flutter Documentation](https://docs.flutter.dev/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design for Android](https://material.io/design)

## Examples

### React Native Safe Area Layout
```tsx
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

function OrderList({ orders }: { orders: Order[] }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} />}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
```

### Offline Data Sync Pattern
```typescript
async function syncOrders(db: Database, api: OrderAPI) {
  const pending = await db.getPendingWrites();
  for (const write of pending) {
    try {
      await api.sync(write);
      await db.markSynced(write.id);
    } catch (e) {
      if (!isNetworkError(e)) await db.markFailed(write.id);
    }
  }
}
```
