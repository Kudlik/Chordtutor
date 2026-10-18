import type { TFunction } from './i18n';
import type { Spelling } from './theory';

/** Tooltip text for a note whose exact and plain names differ. */
export function altNoteText(t: TFunction, spelling: Spelling, alt: string): string {
  return spelling === 'correct' ? t('board.soundsLike', { alt }) : t('board.respelled', { alt });
}
