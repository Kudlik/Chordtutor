import { useState } from 'react';
import type { TFunction } from '../i18n';
import { CHORD_FORMULAS, RELATED, chordNotes, stepsOf, type ChordType, type RootName, type Spelling } from '../theory';

interface Props {
  root: RootName;
  type: ChordType;
  spelling: Spelling;
  t: TFunction;
  onSelectType: (type: ChordType) => void;
}

type Term = 'semitone' | 'degree';

export function Explanation({ root, type, spelling, t, onSelectType }: Props) {
  const [open, setOpen] = useState<Term | null>(null);
  const notes = chordNotes(root, type, spelling).map((n) => n.name).join(', ');
  const toggle = (term: Term) => setOpen((o) => (o === term ? null : term));

  const termButton = (term: Term) => (
    <button type="button" className="term" aria-expanded={open === term} aria-controls={`def-${term}`} onClick={() => toggle(term)}>
      {t(`term.${term}` as 'term.semitone')}
    </button>
  );
  const withTerm = (key: 'exp.stepNote' | 'exp.degreeNote', term: Term) => {
    const [before, after] = t(key, { [term]: '\u0000' }).split('\u0000');
    return (
      <>
        {before}
        {termButton(term)}
        {after}
      </>
    );
  };

  return (
    <div className="explanation">
      <section>
        <h3>{t('exp.what')}</h3>
        <p>{t(`exp.${type}.what` as 'exp.Major.what')}</p>
        <p>{t(`exp.${type}.relation` as 'exp.Major.relation')}</p>
        <p className="compare">
          <span>{t('exp.compare')}</span>
          {RELATED[type].map((r) => (
            <button type="button" key={r} className="chip-link" onClick={() => onSelectType(r)}>
              {t(`type.${r}` as 'type.Major')}
            </button>
          ))}
        </p>
      </section>
      <section>
        <h3>{t('exp.sound')}</h3>
        <p>{t(`exp.${type}.sound` as 'exp.Major.sound')}</p>
      </section>
      <section>
        <h3>{t('exp.built')}</h3>
        <dl className="built">
          <dt>{t('exp.steps')}</dt>
          <dd>{stepsOf(type).join(', ')}</dd>
          <dt>{t('exp.degrees')}</dt>
          <dd>{CHORD_FORMULAS[type].join(', ')}</dd>
          <dt>{t('exp.example', { root })}</dt>
          <dd>{notes}</dd>
        </dl>
        <p className="glossary-line">{withTerm('exp.stepNote', 'semitone')}</p>
        <p className="glossary-line">{withTerm('exp.degreeNote', 'degree')}</p>
        {open && (
          <p id={`def-${open}`} className="definition" role="note">
            {t(`term.${open}.def` as 'term.semitone.def')}
          </p>
        )}
      </section>
    </div>
  );
}
