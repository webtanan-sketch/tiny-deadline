import { useMemo, useState } from 'react';
import { DeadlineWorkspace } from '../components/DeadlineWorkspace';

const PREFIX = 'tiny-deadline:';

const storage = {
  async get<T>(key: string): Promise<T | null> {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : null;
  },
  async set<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },
};

export default function App() {
  const [locale, setLocale] = useState<'fa' | 'en'>('fa');
  const stableStorage = useMemo(() => storage, []);
  const direction = locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <main dir={direction}>
      <nav>
        <strong>Tiny Deadline</strong>
        <button type="button" onClick={() => setLocale((value) => (value === 'fa' ? 'en' : 'fa'))}>
          {locale === 'fa' ? 'EN' : 'FA'}
        </button>
      </nav>
      <DeadlineWorkspace locale={locale} direction={direction} storage={stableStorage} />
    </main>
  );
}
