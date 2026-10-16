export const INSTRUMENTS = ['guitar', 'bass', 'ukulele'] as const;
export type Instrument = (typeof INSTRUMENTS)[number];

/** Open-string pitch classes and labels, from the thickest/lowest string to the thinnest. */
export const TUNINGS: Record<Instrument, { pc: number; label: string }[]> = {
  guitar: [
    { pc: 4, label: 'E' },
    { pc: 9, label: 'A' },
    { pc: 2, label: 'D' },
    { pc: 7, label: 'G' },
    { pc: 11, label: 'B' },
    { pc: 4, label: 'E' },
  ],
  bass: [
    { pc: 4, label: 'E' },
    { pc: 9, label: 'A' },
    { pc: 2, label: 'D' },
    { pc: 7, label: 'G' },
  ],
  // Re-entrant: the 4th string (G) is higher than the 3rd (C).
  ukulele: [
    { pc: 7, label: 'G' },
    { pc: 0, label: 'C' },
    { pc: 4, label: 'E' },
    { pc: 9, label: 'A' },
  ],
};

export const MAX_FRET = 15;
