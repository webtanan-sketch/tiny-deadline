# Tiny Deadline — رادار موعدهای TinyManager

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md)

> یک نمای بسیار ساده برای اینکه مدیر بداند **امروز، چند روز آینده و موارد عقب‌افتاده** کدام‌اند؛ بدون تقویم شلوغ و بدون فرم‌های طولانی.

## وضعیت

**Foundation — 0.1.0**

این Repository اکنون قرارداد اولیه ماژول را دارد. قابلیت اجرایی هنوز منتشر نشده است.

## فلسفه UX

مدیر نباید برای ثبت یک موعد وارد چند صفحه شود. مسیر اصلی آینده:

```text
Tiny AI: «مهلت ارسال قرارداد پروژه آریا را برای سه‌شنبه بگذار»
↓
تشخیص پروژه + تاریخ
↓
پیش‌نمایش کوتاه
↓
تأیید
↓
ثبت موعد
```

در UI دستی نیز فقط اطلاعات ضروری ابتدا نمایش داده می‌شوند و جزئیات اختیاری با Progressive Disclosure باز می‌شوند.

## قابلیت‌های برنامه‌ریزی‌شده

- Today / Next 3 Days / Next 7 Days / Next 30 Days
- Overdue
- اتصال به Shared Projects و Shared People
- تاریخ شمسی در فارسی و میلادی در انگلیسی
- Dashboard Widget
- Notification hooks
- Backup / Export از طریق TinyManager Core
- Tiny AI actions

## Tiny AI Actions برنامه‌ریزی‌شده

- `tiny-deadline.create`
- `tiny-deadline.reschedule`
- `tiny-deadline.complete`

## معماری

این ماژول با **TypeScript + React** ساخته خواهد شد و هم به‌صورت Standalone App و هم به‌صورت Module داخل [TinyManager](https://github.com/webtanan-sketch/tinymanager) اجرا می‌شود.

## مجوز

MIT
