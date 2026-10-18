import type { TFunction } from '../i18n';
import type { Spelling } from '../theory';
import { Dialog } from './Dialog';

interface Props {
  open: boolean;
  t: TFunction;
  onChoose: (spelling: Spelling) => void;
}

/** First-visit modal: the visitor must pick one way of naming notes. It cannot be dismissed. */
export function SpellingDialog({ open, t, onChoose }: Props) {
  return (
    <Dialog open={open} title={t('spelling.title')} onClose={() => undefined} persistent>
      <p>{t('spelling.intro')}</p>
      <div className="spelling-options">
        {(['simple', 'correct'] as const).map((id) => (
          <button key={id} type="button" className="spelling-option" onClick={() => onChoose(id)}>
            <span className="spelling-option-title">{t(`spelling.${id}.title` as 'spelling.simple.title')}</span>
            <span>{t(`spelling.${id}.text` as 'spelling.simple.text')}</span>
          </button>
        ))}
      </div>
      <p className="muted">{t('spelling.choose')}</p>
    </Dialog>
  );
}
