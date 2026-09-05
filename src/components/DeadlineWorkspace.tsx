import { CalendarClock, Check } from 'lucide-react';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { resolveDatePhrase } from '../domain/date-phrase';
import { TinyDeadlineRepository } from '../domain/repository';
import type { TinyDeadlineItem, TinyDeadlineStorage } from '../domain/types';

export interface DeadlineWorkspaceProps {
  locale: 'fa' | 'en';
  direction: 'rtl' | 'ltr';
  storage: TinyDeadlineStorage;
}

export function DeadlineWorkspace({ locale, direction, storage }: DeadlineWorkspaceProps) {
  const repository = useMemo(() => new TinyDeadlineRepository(storage), [storage]);
  const [items, setItems] = useState<TinyDeadlineItem[]>([]);
  const [title, setTitle] = useState('');
  const [datePhrase, setDatePhrase] = useState('');

  const reload = async () => {
    setItems(await repository.list());
  };

  useEffect(() => {
    void reload();
  }, [repository]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const dueAt = resolveDatePhrase(datePhrase, locale);
    if (!title.trim() || !dueAt) return;

    await repository.create({ title, dueAt });
    setTitle('');
    setDatePhrase('');
    await reload();
  };

  const openItems = items
    .filter((item) => item.status === 'open')
    .sort((a, b) => a.dueAt.localeCompare(b.dueAt));

  return (
    <section className="dd" dir={direction} lang={locale}>
      <header>
        <div>
          <h2>{locale === 'fa' ? 'رادار موعدها' : 'Deadline Radar'}</h2>
          <p>
            {locale === 'fa'
              ? 'عنوان + زمان. مثال: فردا، سه‌شنبه، 2026-09-10'
              : 'Title + time. Example: tomorrow, Tuesday, 2026-09-10'}
          </p>
        </div>
        <CalendarClock />
      </header>

      <form onSubmit={submit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
          placeholder={locale === 'fa' ? 'چه چیزی موعد دارد؟' : 'What is due?'}
        />
        <input
          value={datePhrase}
          onChange={(event) => setDatePhrase(event.currentTarget.value)}
          placeholder={locale === 'fa' ? 'چه زمانی؟' : 'When?'}
        />
        <button type="submit">{locale === 'fa' ? 'ثبت' : 'Add'}</button>
      </form>

      {openItems.map((item) => (
        <article key={item.id}>
          <div>
            <strong>{item.title}</strong>
            <small>
              {new Intl.DateTimeFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
                dateStyle: 'medium',
              }).format(new Date(item.dueAt))}
            </small>
          </div>
          <button
            type="button"
            onClick={async () => {
              await repository.complete(item.id);
              await reload();
            }}
          >
            <Check size={15} />
            {locale === 'fa' ? 'انجام شد' : 'Done'}
          </button>
        </article>
      ))}
    </section>
  );
}
