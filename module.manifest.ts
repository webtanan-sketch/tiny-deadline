export const moduleManifest = {
  schemaVersion: 1,
  id: 'tiny-deadline',
  version: '0.1.0-foundation',
  name: { fa: 'رادار موعدها', en: 'Deadline Radar' },
  description: {
    fa: 'نمایش موعدهای امروز، نزدیک و عقب‌افتاده بدون تقویم شلوغ.',
    en: 'See today, upcoming and overdue deadlines without a noisy calendar.',
  },
  icon: 'CalendarClock',
  route: '/modules/deadline',
  category: 'planning',
  maturity: 'foundation',
  capabilities: {
    dashboardWidget: true,
    globalSearch: true,
    exportData: true,
    sharedPeople: true,
    sharedProjects: true,
    notifications: true,
    assistantActions: true,
  },
  plannedAssistantActions: [
    'tiny-deadline.create',
    'tiny-deadline.reschedule',
    'tiny-deadline.complete',
  ],
} as const;
