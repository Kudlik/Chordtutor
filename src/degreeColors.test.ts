import { describe, expect, it } from 'vitest';
import { DEGREE_COLORS } from './degreeColors';

const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

describe('degree colours (US-1003)', () => {
  it.each(Object.entries(DEGREE_COLORS))('degree %s label has contrast >= 4.5', (_d, c) => {
    expect(contrast(c.fill, c.text)).toBeGreaterThanOrEqual(4.5);
  });
  it('are all different', () => {
    expect(new Set(Object.values(DEGREE_COLORS).map((c) => c.fill)).size).toBe(Object.keys(DEGREE_COLORS).length);
  });
});
