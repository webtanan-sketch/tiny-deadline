# Tiny Deadline — TinyManager Deadline Radar

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md)

> A deliberately simple view of what is due **today, soon and overdue**, without a noisy calendar or long forms.

## Status

**Foundation — 0.1.0**

This repository currently defines the module contract and product direction. The executable module has not been released yet.

## UX direction

Managers should not have to hunt for the right screen. The primary future flow is:

```text
Tiny AI: “Set the Aria contract deadline to Tuesday”
↓
Detect project + date
↓
Short preview
↓
Confirmation
↓
Save deadline
```

Manual UI will use progressive disclosure and show only essential fields first.

## Planned capabilities

- Today / Next 3 Days / Next 7 Days / Next 30 Days
- Overdue view
- Shared Projects and Shared People
- Jalali dates in Persian, Gregorian in English
- Dashboard widget
- Notification hooks
- Core backup/export
- Tiny AI actions

## Planned Tiny AI actions

- `tiny-deadline.create`
- `tiny-deadline.reschedule`
- `tiny-deadline.complete`

## Architecture

TypeScript + React. The same domain logic will run as a standalone app and as a module inside [TinyManager](https://github.com/webtanan-sketch/tinymanager).

## License

MIT
