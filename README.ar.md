---
version: "1.0.0"
created: "2026-08-20T00:00:00Z"
updated: "2026-08-20T00:00:00Z"
author: "Nasser Jabir"
---

# NassAI-Praxis

> **NassAI-Praxis طبقة وصفية تعتمد Markdown وGit لتنظيم معرفة المشروع والمهارات القابلة لإعادة الاستخدام والتطور الذي يراجعه الإنسان عبر جلسات وكلاء البرمجة.**

[![الإصدار](https://img.shields.io/badge/version-1.0.0--phase4-blue)](CHANGELOG.md) [![الترخيص](https://img.shields.io/badge/license-MIT-green)](LICENSE) [![الوكلاء](https://img.shields.io/badge/agents-9-purple)](docs/COMPATIBILITY_MATRIX.md) [![المهارات](https://img.shields.io/badge/skills-29-orange)](skills/) [![الشخصيات](https://img.shields.io/badge/personas-10-teal)](personas/)

```bash
git clone https://github.com/NasserJabir/NassAI-Praxis.git
```

التفاصيل التقنية الأساسية مكتوبة بالإنجليزية، بينما تدعم الشخصيات والمجتمع والشرح ثنائي اللغة عند الحاجة. اقرأ [النسخة الإنجليزية](README.md) للمواصفات التفصيلية.

## لماذا Praxis؟

- **الوكيل ينسى كل شيء بين الجلسات.**
- **فريقك يعيد شرح الاصطلاحات كل يوم.**
- **مشروعك يفتقر إلى ذاكرة مؤسسية قابلة للمراجعة.**

## ما هو Praxis وما ليس كذلك؟

| Praxis هو | Praxis ليس |
|---|---|
| بنية معرفة قابلة للقراءة والمراجعة عبر Git لحفظ قرارات المشروع وإجراءاته. | Runtime أو قاعدة بيانات أو مخزن متجهات أو خادم أو daemon أو CLI إلزامي. |
| طبقة يمكن لإضافات الوكلاء قراءتها عندما تناسب المهمة. | ضمانًا بأن كل وكيل سيكتشف كل المعرفة أو يستخدمها تلقائيًا. |
| مسار تطور يبدأ بالدليل وينتهي بموافقة بشرية. | تعديلًا ذاتيًا مستقلًا أو ترقية تلقائية إلى Core. |

## نظرة بصرية

```mermaid
flowchart LR
    Task[مهمة حقيقية] --> Host[وكيل البرمجة: بيئة التنفيذ]
    Host -. يقرأ بشكل انتقائي .-> Praxis[Markdown الخاص بـ Praxis]
    Praxis --> Context[سياق المهمة المناسب]
    Context --> Host
    Host --> Verify[أثر وتنفيذ وتحقق]
    Verify --> Evidence[سجل دليل]
    Evidence -. دليل متكرر فقط .-> Review[تطور بمراجعة بشرية]
```

الوكيل هو من ينفذ العمل، أما Praxis فهو طبقة معرفة قابلة للقراءة قد يرجع إليها عندما يكون السياق مناسبًا. يشرح [الدليل البصري](docs/VISUAL_GUIDE.md) المكونات وتدفق العمل العادي ودور Persona وسلم الأدلة E0–E5.

## Personas: كيف تُتخذ القرارات؟

تجعل **Persona** أسلوب التفكير واضحًا: الأولويات، تحمل المخاطر، أسئلة المراجعة، وأسلوب التواصل. وهي تكمل دور الـAgent وطريقة الـSkill ومعرفة المشروع في Memory، ولا تستبدل أيًا منها. تفيد خصوصًا في المفاضلات المعمارية والأمنية وتجربة المستخدم، وقد لا تحتاجها مهمة صغيرة.

يمكن لعدة جلسات قراءة Persona واحدة بالتوازي. ولا يتغير ملفها الأساسي إلا عبر **دليل → اقتراح → مراجعة بشرية**، من دون قفل تقني أو تعديل ذاتي. راجع [دليل Personas](docs/PERSONAS.md) و[المخطط البصري](docs/VISUAL_GUIDE.md#3-what-a-persona-adds).

## البدء السريع

```bash
# 1. استنسخ المشروع أو ابدأ من template/
# 2. استخدم مسار التثبيت المحلي الموصى به لوكيلك في INSTALL.md
# 3. ابدأ مهمة صغيرة؛ وعندما يكون السياق مناسبًا اطلب من الوكيل فحص معرفة المشروع التي يحتاجها
```

اتبع دليل [البدء خلال خمس دقائق](GETTING_STARTED.md).

## حالة الدليل

سجلت عينة مضبوطة تاريخية من Phase 1 مؤشرات مواتية خاصة بتلك المهمة، وما زالت آثارها وتقريرها متاحة في [أرشيف المقارنة](benchmarks/benchmark-001/report.md). لكن المقارنتين Baseline 001 وBaseline 002 اللاحقتين هما **ملاحظتان غير حاسمتين لوجود أفضلية أداء عامة**. يدعم الدليل ملاحظات محدودة عن الاستمرارية والتطور والشخصيات، ولا يدعم ادعاءً عامًا عن السرعة أو الرموز أو الجودة. راجع [نتائج التحقق](docs/VALIDATION_RESULTS.md) و[فهرس التحقق](docs/VALIDATION_INDEX.md).

## الوكلاء المدعومون

| الوكيل | الذاكرة | المهارات | الميزانية |
|---|---|---|---|
| Claude Code | كاملة | كاملة | 8K / 200K |
| Cursor | كاملة | كاملة | 8K / 128K |
| Copilot | خفيفة | كاملة | 2K / 8K |
| Kimi | كاملة | كاملة | 10K / 200K+ |
| Codex | كاملة | كاملة | 8K / 128K |
| Gemini CLI | كاملة | كاملة | 15K / 1M+ |
| OpenCode | كاملة | كاملة | 5K–10K |
| Pi | خفيفة | خفيفة | 3K |
| Windsurf | كاملة | كاملة | 8K / 128K |

الشخصيات العربية المدعومة هي: حسن، يوسف، ليلى، عمر، فاطمة، خالد، ياسمين، عمرو، نور، وسامي.

للمقارنة التفصيلية، راجع [مصفوفة التوافق](docs/COMPATIBILITY_MATRIX.md).

## بنية المشروع

```text
praxis.config.md       الإعدادات والميزانيات
memory/                الذاكرة والأمان
skills/                29 مهارة قابلة لإعادة الاستخدام
agents/                12 وكيلًا متخصصًا
personas/              10 شخصيات سلوكية
evolve/                التقييم والتحسين
docs/                  التكامل والتوثيق
template/              ملفات بدء مشروع جديد
```

## التوثيق

[INSTALL.md](INSTALL.md) · [GETTING_STARTED.md](GETTING_STARTED.md) · [POSITIONING.md](POSITIONING.md) · [FAQ.md](FAQ.md) · [CONTRIBUTING.md](CONTRIBUTING.md) · [docs/](docs/)

## المجتمع والأمان والإصدارات

[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) · [SECURITY.md](SECURITY.md) · [SUPPORT.md](SUPPORT.md) · [GOVERNANCE.md](GOVERNANCE.md) · [RELEASE_PROCESS.md](docs/RELEASE_PROCESS.md) · [MAINTAINER_CHECKLIST.md](docs/MAINTAINER_CHECKLIST.md) · [CHANGELOG.md](CHANGELOG.md)

## المساهمة

نرحب بالمهارات والوكلاء والشخصيات والإضافات والترجمات وتحسين التوثيق. اقرأ [دليل المساهمة](CONTRIBUTING.md) لمعرفة القوالب ومسارات العمل وبوابات الجودة.

## الترخيص

MIT — راجع [LICENSE](LICENSE).

## قبل / بعد Praxis

بدون Praxis قد يضطر الوكيل إلى طلب شرح المعمارية والاتفاقيات في كل جلسة. ومع Praxis يمكنه، عندما تكون المعرفة مناسبة للمهمة ويصل إليها، قراءة الشخصيات والذاكرة والمهارات والقرارات والأنماط من ملفات Markdown المشتركة.

راجع [مثال Todo API](examples/todo-api/README.md) و[وثيقة المعمارية](docs/ARCHITECTURE.md) و[بروتوكول التحقق](docs/VALIDATION_PROTOCOL.md).
