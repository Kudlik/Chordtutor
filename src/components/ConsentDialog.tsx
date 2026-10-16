import { getConsent, setConsent, type Consent } from '../analytics';
import type { TFunction } from '../i18n';
import { Dialog } from './Dialog';

interface Props {
  open: boolean;
  /** True on the very first visit: the dialog cannot be dismissed without a choice. */
  firstVisit: boolean;
  t: TFunction;
  onDone: () => void;
}

export function ConsentDialog({ open, firstVisit, t, onDone }: Props) {
  const current = getConsent();
  const choose = (c: Consent) => {
    setConsent(c);
    onDone();
  };
  return (
    <Dialog open={open} title={t('consent.title')} onClose={onDone} persistent={firstVisit}>
      <p>{t('consent.text')}</p>
      <p>{t('consent.retention')}</p>
      <h3>{t('consent.notice')}</h3>
      <p>{t('consent.tool')}</p>
      <p className="muted">{t(`consent.current.${current ?? 'none'}` as 'consent.current.none')}</p>
      <div className="dialog-actions">
        <button type="button" className="btn" onClick={() => choose('denied')}>
          {t('consent.reject')}
        </button>
        <button type="button" className="btn" onClick={() => choose('granted')}>
          {t('consent.accept')}
        </button>
        {!firstVisit && (
          <button type="button" className="btn-text" onClick={onDone}>
            {t('settings.close')}
          </button>
        )}
      </div>
    </Dialog>
  );
}
