import type { DegreeId } from './theory';

/** One fixed colour per degree, so a degree looks the same in every chord (US-506).
 *  Text colours keep at least 4.5:1 contrast (checked in degreeColors.test.ts). */
export const DEGREE_COLORS: Record<DegreeId, { fill: string; text: string }> = {
  '1': { fill: '#845416', text: '#ffffff' },
  '2': { fill: '#00695c', text: '#ffffff' },
  b3: { fill: '#1565c0', text: '#ffffff' },
  '3': { fill: '#6a1b9a', text: '#ffffff' },
  '4': { fill: '#ad1457', text: '#ffffff' },
  b5: { fill: '#455a64', text: '#ffffff' },
  '5': { fill: '#e0c1a3', text: '#2b1700' },
  '#5': { fill: '#00838f', text: '#ffffff' },
  bb7: { fill: '#ffb74d', text: '#2b1700' },
  b7: { fill: '#b3261e', text: '#ffffff' },
  '7': { fill: '#1b5e20', text: '#ffffff' },
};
