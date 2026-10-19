import { INSTRUMENTS, type Instrument } from '../instruments';
import type { TFunction } from '../i18n';
import { ROOT_BUTTONS, rootPitchClass, type ChordType, type RootName } from '../theory';
import { Segmented } from './Segmented';

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12l5 5L20 6" />
  </svg>
);

interface Props {
  t: TFunction;
  instrument: Instrument;
  root: RootName;
  type: ChordType;
  /** Chord types offered on this tab; with a single one the variant list is hidden. */
  types: ChordType[];
  onInstrument: (instrument: Instrument) => void;
  onRoot: (root: RootName) => void;
  onType: (type: ChordType) => void;
}

/** Instrument, root and variant pickers shared by all tabs. */
export function ChordControls({ t, instrument, root, type, types, onInstrument, onRoot, onType }: Props) {
  const rootNames = ROOT_BUTTONS.find((b) => b.pc === rootPitchClass(root))!.names;
  return (
    <>
      <Segmented<Instrument>
        label={t('instrument.label')}
        value={instrument}
        onChange={onInstrument}
        options={INSTRUMENTS.map((id) => ({ id, label: t(`instrument.${id}` as 'instrument.guitar') }))}
      />

      <div className="field">
        <div className="field-label" id="root-label">{t('root.label')}</div>
        <div className="roots" role="group" aria-labelledby="root-label">
          {ROOT_BUTTONS.map(({ pc, names }) => {
            const selected = rootPitchClass(root) === pc;
            const label = names.length === 2 ? `${names[0]}/${names[1]}` : names[0];
            return (
              <button key={pc} type="button" className={`root-btn${selected ? ' selected' : ''}`} aria-pressed={selected} onClick={() => !selected && onRoot(names[0])}>
                {label}
              </button>
            );
          })}
        </div>
        {rootNames.length === 2 && (
          <div className="spelling">
            <Segmented<RootName> label={t('root.spelling')} value={root} onChange={onRoot} options={rootNames.map((n) => ({ id: n, label: n }))} />
          </div>
        )}
      </div>

      {types.length > 1 && (
        <div className="field">
          <div className="field-label" id="variant-label">{t('variant.label')}</div>
          <div className="variants" role="group" aria-labelledby="variant-label">
            {types.map((ct) => (
              <button key={ct} type="button" className={`variant-btn${ct === type ? ' selected' : ''}`} aria-pressed={ct === type} onClick={() => onType(ct)}>
                {ct === type && <Check />}
                {t(`type.${ct}` as 'type.Major')}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
