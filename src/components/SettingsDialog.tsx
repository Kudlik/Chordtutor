import { LANGS, type Lang, type TFunction } from '../i18n';
import { Dialog } from './Dialog';
import { Segmented } from './Segmented';

interface Props {
  open: boolean;
  t: TFunction;
  left: boolean;
  lang: Lang;
  onLeft: (left: boolean) => void;
  onLang: (lang: Lang) => void;
  onAnalytics: () => void;
  onClose: () => void;
}

export function SettingsDialog({ open, t, left, lang, onLeft, onLang, onAnalytics, onClose }: Props) {
  return (
    <Dialog open={open} title={t('settings.title')} onClose={onClose}>
      <div className="setting">
        <h3>{t('settings.hand')}</h3>
        <p className="muted">{t('settings.handHint')}</p>
        <Segmented
          label={t('settings.hand')}
          value={left ? 'left' : 'right'}
          onChange={(id) => onLeft(id === 'left')}
          options={[
            { id: 'right', label: t('settings.right') },
            { id: 'left', label: t('settings.left') },
          ]}
        />
      </div>
      <div className="setting">
        <h3>{t('settings.language')}</h3>
        <Segmented label={t('settings.language')} value={lang} onChange={onLang} options={LANGS} />
      </div>
      <div className="setting">
        <button type="button" className="btn" onClick={onAnalytics}>
          {t('settings.analytics')}
        </button>
      </div>
      <p className="muted credit">{t('settings.credit')}</p>
      <div className="dialog-actions">
        <button type="button" className="btn-text" onClick={onClose}>
          {t('settings.close')}
        </button>
      </div>
    </Dialog>
  );
}
