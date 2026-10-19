# Chord inversions (reference for an LLM)

Coverage: the same 12 roots x 12 chord types as chord_voicings.md = 144 chords, 480 inversion lines.

## What an inversion is
An inversion is the same chord with a different chord tone as the lowest note (the bass note). The notes do not change, only which one is at the bottom. Notes above the bass are listed in ascending order, wrapping upward past the octave.
- Root position: the root is lowest. 1st inversion: the 3rd (or 2nd/4th for sus chords) is lowest. 2nd inversion: the 5th is lowest. 3rd inversion (4-note chords only): the 7th is lowest.
- A chord with N different notes has N inversions counting root position: 3-note chords have 3, 4-note chords have 4, and the 2-note "5" chord has 2.
- Slash chord notation: `C/E` means "C major with E in the bass".

## How to read a line
`Chord | C Major | 1st inversion | slash: C/E | bass: E (major third) | notes bottom to top: E G C | steps from bass: 0 3 8`
- `steps from bass` = semitones above the bass note for each note, in the order listed (one semitone = one fret, or one key on a piano).
- Notes use sharps only: A# = B flat, C# = D flat, D# = E flat, F# = G flat, G# = A flat.

## Special cases
- Augmented (aug) is symmetric: every inversion has the same steps from the bass (0 4 8), so Caug, Eaug and G#aug contain the same three notes. The line for each inversion is still listed.
- Diminished 7 (dim7) is symmetric: every inversion has steps 0 3 6 9, so Cdim7, D#dim7, F#dim7 and Adim7 contain the same four notes.
- sus2 and sus4 overlap: Csus2 (C D G) has the same notes as Gsus4 (G C D), and Csus4 (C F G) has the same notes as Fsus2 (F G C). The chord is named by which note is treated as the root.
- Tetrads (4-note chords: 7, dim7, maj7, m7, 7sus4) have a 3rd inversion with the seventh in the bass, e.g. C7/A# = A# C E G.


## Inversions

### A Major | symbol: A | notes in root position: A C# E
Chord | A Major | root position | slash: A | bass: A (root) | notes bottom to top: A C# E | steps from bass: 0 4 7
Chord | A Major | 1st inversion | slash: A/C# | bass: C# (major third) | notes bottom to top: C# E A | steps from bass: 0 3 8
Chord | A Major | 2nd inversion | slash: A/E | bass: E (fifth) | notes bottom to top: E A C# | steps from bass: 0 5 9

### A Minor | symbol: Am | notes in root position: A C E
Chord | A Minor | root position | slash: Am | bass: A (root) | notes bottom to top: A C E | steps from bass: 0 3 7
Chord | A Minor | 1st inversion | slash: Am/C | bass: C (minor third) | notes bottom to top: C E A | steps from bass: 0 4 9
Chord | A Minor | 2nd inversion | slash: Am/E | bass: E (fifth) | notes bottom to top: E A C | steps from bass: 0 5 8

### A 7 | symbol: A7 | notes in root position: A C# E G
Chord | A 7 | root position | slash: A7 | bass: A (root) | notes bottom to top: A C# E G | steps from bass: 0 4 7 10
Chord | A 7 | 1st inversion | slash: A7/C# | bass: C# (major third) | notes bottom to top: C# E G A | steps from bass: 0 3 6 8
Chord | A 7 | 2nd inversion | slash: A7/E | bass: E (fifth) | notes bottom to top: E G A C# | steps from bass: 0 3 5 9
Chord | A 7 | 3rd inversion | slash: A7/G | bass: G (minor seventh) | notes bottom to top: G A C# E | steps from bass: 0 2 6 9

### A 5 | symbol: A5 | notes in root position: A E
Chord | A 5 | root position | slash: A5 | bass: A (root) | notes bottom to top: A E | steps from bass: 0 7
Chord | A 5 | 1st inversion | slash: A5/E | bass: E (fifth) | notes bottom to top: E A | steps from bass: 0 5

### A dim | symbol: Adim | notes in root position: A C D#
Chord | A dim | root position | slash: Adim | bass: A (root) | notes bottom to top: A C D# | steps from bass: 0 3 6
Chord | A dim | 1st inversion | slash: Adim/C | bass: C (minor third) | notes bottom to top: C D# A | steps from bass: 0 3 9
Chord | A dim | 2nd inversion | slash: Adim/D# | bass: D# (diminished fifth) | notes bottom to top: D# A C | steps from bass: 0 6 9

### A dim7 | symbol: Adim7 | notes in root position: A C D# F#
Chord | A dim7 | root position | slash: Adim7 | bass: A (root) | notes bottom to top: A C D# F# | steps from bass: 0 3 6 9
Chord | A dim7 | 1st inversion | slash: Adim7/C | bass: C (minor third) | notes bottom to top: C D# F# A | steps from bass: 0 3 6 9
Chord | A dim7 | 2nd inversion | slash: Adim7/D# | bass: D# (diminished fifth) | notes bottom to top: D# F# A C | steps from bass: 0 3 6 9
Chord | A dim7 | 3rd inversion | slash: Adim7/F# | bass: F# (diminished seventh) | notes bottom to top: F# A C D# | steps from bass: 0 3 6 9

### A aug | symbol: Aaug | notes in root position: A C# F
Chord | A aug | root position | slash: Aaug | bass: A (root) | notes bottom to top: A C# F | steps from bass: 0 4 8
Chord | A aug | 1st inversion | slash: Aaug/C# | bass: C# (major third) | notes bottom to top: C# F A | steps from bass: 0 4 8
Chord | A aug | 2nd inversion | slash: Aaug/F | bass: F (augmented fifth) | notes bottom to top: F A C# | steps from bass: 0 4 8

### A sus2 | symbol: Asus2 | notes in root position: A B E
Chord | A sus2 | root position | slash: Asus2 | bass: A (root) | notes bottom to top: A B E | steps from bass: 0 2 7
Chord | A sus2 | 1st inversion | slash: Asus2/B | bass: B (second) | notes bottom to top: B E A | steps from bass: 0 5 10
Chord | A sus2 | 2nd inversion | slash: Asus2/E | bass: E (fifth) | notes bottom to top: E A B | steps from bass: 0 5 7

### A sus4 | symbol: Asus4 | notes in root position: A D E
Chord | A sus4 | root position | slash: Asus4 | bass: A (root) | notes bottom to top: A D E | steps from bass: 0 5 7
Chord | A sus4 | 1st inversion | slash: Asus4/D | bass: D (fourth) | notes bottom to top: D E A | steps from bass: 0 2 7
Chord | A sus4 | 2nd inversion | slash: Asus4/E | bass: E (fifth) | notes bottom to top: E A D | steps from bass: 0 5 10

### A maj7 | symbol: Amaj7 | notes in root position: A C# E G#
Chord | A maj7 | root position | slash: Amaj7 | bass: A (root) | notes bottom to top: A C# E G# | steps from bass: 0 4 7 11
Chord | A maj7 | 1st inversion | slash: Amaj7/C# | bass: C# (major third) | notes bottom to top: C# E G# A | steps from bass: 0 3 7 8
Chord | A maj7 | 2nd inversion | slash: Amaj7/E | bass: E (fifth) | notes bottom to top: E G# A C# | steps from bass: 0 4 5 9
Chord | A maj7 | 3rd inversion | slash: Amaj7/G# | bass: G# (major seventh) | notes bottom to top: G# A C# E | steps from bass: 0 1 5 8

### A m7 | symbol: Am7 | notes in root position: A C E G
Chord | A m7 | root position | slash: Am7 | bass: A (root) | notes bottom to top: A C E G | steps from bass: 0 3 7 10
Chord | A m7 | 1st inversion | slash: Am7/C | bass: C (minor third) | notes bottom to top: C E G A | steps from bass: 0 4 7 9
Chord | A m7 | 2nd inversion | slash: Am7/E | bass: E (fifth) | notes bottom to top: E G A C | steps from bass: 0 3 5 8
Chord | A m7 | 3rd inversion | slash: Am7/G | bass: G (minor seventh) | notes bottom to top: G A C E | steps from bass: 0 2 5 9

### A 7sus4 | symbol: A7sus4 | notes in root position: A D E G
Chord | A 7sus4 | root position | slash: A7sus4 | bass: A (root) | notes bottom to top: A D E G | steps from bass: 0 5 7 10
Chord | A 7sus4 | 1st inversion | slash: A7sus4/D | bass: D (fourth) | notes bottom to top: D E G A | steps from bass: 0 2 5 7
Chord | A 7sus4 | 2nd inversion | slash: A7sus4/E | bass: E (fifth) | notes bottom to top: E G A D | steps from bass: 0 3 5 10
Chord | A 7sus4 | 3rd inversion | slash: A7sus4/G | bass: G (minor seventh) | notes bottom to top: G A D E | steps from bass: 0 2 7 9

### A# Major | symbol: A# | notes in root position: A# D F
Chord | A# Major | root position | slash: A# | bass: A# (root) | notes bottom to top: A# D F | steps from bass: 0 4 7
Chord | A# Major | 1st inversion | slash: A#/D | bass: D (major third) | notes bottom to top: D F A# | steps from bass: 0 3 8
Chord | A# Major | 2nd inversion | slash: A#/F | bass: F (fifth) | notes bottom to top: F A# D | steps from bass: 0 5 9

### A# Minor | symbol: A#m | notes in root position: A# C# F
Chord | A# Minor | root position | slash: A#m | bass: A# (root) | notes bottom to top: A# C# F | steps from bass: 0 3 7
Chord | A# Minor | 1st inversion | slash: A#m/C# | bass: C# (minor third) | notes bottom to top: C# F A# | steps from bass: 0 4 9
Chord | A# Minor | 2nd inversion | slash: A#m/F | bass: F (fifth) | notes bottom to top: F A# C# | steps from bass: 0 5 8

### A# 7 | symbol: A#7 | notes in root position: A# D F G#
Chord | A# 7 | root position | slash: A#7 | bass: A# (root) | notes bottom to top: A# D F G# | steps from bass: 0 4 7 10
Chord | A# 7 | 1st inversion | slash: A#7/D | bass: D (major third) | notes bottom to top: D F G# A# | steps from bass: 0 3 6 8
Chord | A# 7 | 2nd inversion | slash: A#7/F | bass: F (fifth) | notes bottom to top: F G# A# D | steps from bass: 0 3 5 9
Chord | A# 7 | 3rd inversion | slash: A#7/G# | bass: G# (minor seventh) | notes bottom to top: G# A# D F | steps from bass: 0 2 6 9

### A# 5 | symbol: A#5 | notes in root position: A# F
Chord | A# 5 | root position | slash: A#5 | bass: A# (root) | notes bottom to top: A# F | steps from bass: 0 7
Chord | A# 5 | 1st inversion | slash: A#5/F | bass: F (fifth) | notes bottom to top: F A# | steps from bass: 0 5

### A# dim | symbol: A#dim | notes in root position: A# C# E
Chord | A# dim | root position | slash: A#dim | bass: A# (root) | notes bottom to top: A# C# E | steps from bass: 0 3 6
Chord | A# dim | 1st inversion | slash: A#dim/C# | bass: C# (minor third) | notes bottom to top: C# E A# | steps from bass: 0 3 9
Chord | A# dim | 2nd inversion | slash: A#dim/E | bass: E (diminished fifth) | notes bottom to top: E A# C# | steps from bass: 0 6 9

### A# dim7 | symbol: A#dim7 | notes in root position: A# C# E G
Chord | A# dim7 | root position | slash: A#dim7 | bass: A# (root) | notes bottom to top: A# C# E G | steps from bass: 0 3 6 9
Chord | A# dim7 | 1st inversion | slash: A#dim7/C# | bass: C# (minor third) | notes bottom to top: C# E G A# | steps from bass: 0 3 6 9
Chord | A# dim7 | 2nd inversion | slash: A#dim7/E | bass: E (diminished fifth) | notes bottom to top: E G A# C# | steps from bass: 0 3 6 9
Chord | A# dim7 | 3rd inversion | slash: A#dim7/G | bass: G (diminished seventh) | notes bottom to top: G A# C# E | steps from bass: 0 3 6 9

### A# aug | symbol: A#aug | notes in root position: A# D F#
Chord | A# aug | root position | slash: A#aug | bass: A# (root) | notes bottom to top: A# D F# | steps from bass: 0 4 8
Chord | A# aug | 1st inversion | slash: A#aug/D | bass: D (major third) | notes bottom to top: D F# A# | steps from bass: 0 4 8
Chord | A# aug | 2nd inversion | slash: A#aug/F# | bass: F# (augmented fifth) | notes bottom to top: F# A# D | steps from bass: 0 4 8

### A# sus2 | symbol: A#sus2 | notes in root position: A# C F
Chord | A# sus2 | root position | slash: A#sus2 | bass: A# (root) | notes bottom to top: A# C F | steps from bass: 0 2 7
Chord | A# sus2 | 1st inversion | slash: A#sus2/C | bass: C (second) | notes bottom to top: C F A# | steps from bass: 0 5 10
Chord | A# sus2 | 2nd inversion | slash: A#sus2/F | bass: F (fifth) | notes bottom to top: F A# C | steps from bass: 0 5 7

### A# sus4 | symbol: A#sus4 | notes in root position: A# D# F
Chord | A# sus4 | root position | slash: A#sus4 | bass: A# (root) | notes bottom to top: A# D# F | steps from bass: 0 5 7
Chord | A# sus4 | 1st inversion | slash: A#sus4/D# | bass: D# (fourth) | notes bottom to top: D# F A# | steps from bass: 0 2 7
Chord | A# sus4 | 2nd inversion | slash: A#sus4/F | bass: F (fifth) | notes bottom to top: F A# D# | steps from bass: 0 5 10

### A# maj7 | symbol: A#maj7 | notes in root position: A# D F A
Chord | A# maj7 | root position | slash: A#maj7 | bass: A# (root) | notes bottom to top: A# D F A | steps from bass: 0 4 7 11
Chord | A# maj7 | 1st inversion | slash: A#maj7/D | bass: D (major third) | notes bottom to top: D F A A# | steps from bass: 0 3 7 8
Chord | A# maj7 | 2nd inversion | slash: A#maj7/F | bass: F (fifth) | notes bottom to top: F A A# D | steps from bass: 0 4 5 9
Chord | A# maj7 | 3rd inversion | slash: A#maj7/A | bass: A (major seventh) | notes bottom to top: A A# D F | steps from bass: 0 1 5 8

### A# m7 | symbol: A#m7 | notes in root position: A# C# F G#
Chord | A# m7 | root position | slash: A#m7 | bass: A# (root) | notes bottom to top: A# C# F G# | steps from bass: 0 3 7 10
Chord | A# m7 | 1st inversion | slash: A#m7/C# | bass: C# (minor third) | notes bottom to top: C# F G# A# | steps from bass: 0 4 7 9
Chord | A# m7 | 2nd inversion | slash: A#m7/F | bass: F (fifth) | notes bottom to top: F G# A# C# | steps from bass: 0 3 5 8
Chord | A# m7 | 3rd inversion | slash: A#m7/G# | bass: G# (minor seventh) | notes bottom to top: G# A# C# F | steps from bass: 0 2 5 9

### A# 7sus4 | symbol: A#7sus4 | notes in root position: A# D# F G#
Chord | A# 7sus4 | root position | slash: A#7sus4 | bass: A# (root) | notes bottom to top: A# D# F G# | steps from bass: 0 5 7 10
Chord | A# 7sus4 | 1st inversion | slash: A#7sus4/D# | bass: D# (fourth) | notes bottom to top: D# F G# A# | steps from bass: 0 2 5 7
Chord | A# 7sus4 | 2nd inversion | slash: A#7sus4/F | bass: F (fifth) | notes bottom to top: F G# A# D# | steps from bass: 0 3 5 10
Chord | A# 7sus4 | 3rd inversion | slash: A#7sus4/G# | bass: G# (minor seventh) | notes bottom to top: G# A# D# F | steps from bass: 0 2 7 9

### B Major | symbol: B | notes in root position: B D# F#
Chord | B Major | root position | slash: B | bass: B (root) | notes bottom to top: B D# F# | steps from bass: 0 4 7
Chord | B Major | 1st inversion | slash: B/D# | bass: D# (major third) | notes bottom to top: D# F# B | steps from bass: 0 3 8
Chord | B Major | 2nd inversion | slash: B/F# | bass: F# (fifth) | notes bottom to top: F# B D# | steps from bass: 0 5 9

### B Minor | symbol: Bm | notes in root position: B D F#
Chord | B Minor | root position | slash: Bm | bass: B (root) | notes bottom to top: B D F# | steps from bass: 0 3 7
Chord | B Minor | 1st inversion | slash: Bm/D | bass: D (minor third) | notes bottom to top: D F# B | steps from bass: 0 4 9
Chord | B Minor | 2nd inversion | slash: Bm/F# | bass: F# (fifth) | notes bottom to top: F# B D | steps from bass: 0 5 8

### B 7 | symbol: B7 | notes in root position: B D# F# A
Chord | B 7 | root position | slash: B7 | bass: B (root) | notes bottom to top: B D# F# A | steps from bass: 0 4 7 10
Chord | B 7 | 1st inversion | slash: B7/D# | bass: D# (major third) | notes bottom to top: D# F# A B | steps from bass: 0 3 6 8
Chord | B 7 | 2nd inversion | slash: B7/F# | bass: F# (fifth) | notes bottom to top: F# A B D# | steps from bass: 0 3 5 9
Chord | B 7 | 3rd inversion | slash: B7/A | bass: A (minor seventh) | notes bottom to top: A B D# F# | steps from bass: 0 2 6 9

### B 5 | symbol: B5 | notes in root position: B F#
Chord | B 5 | root position | slash: B5 | bass: B (root) | notes bottom to top: B F# | steps from bass: 0 7
Chord | B 5 | 1st inversion | slash: B5/F# | bass: F# (fifth) | notes bottom to top: F# B | steps from bass: 0 5

### B dim | symbol: Bdim | notes in root position: B D F
Chord | B dim | root position | slash: Bdim | bass: B (root) | notes bottom to top: B D F | steps from bass: 0 3 6
Chord | B dim | 1st inversion | slash: Bdim/D | bass: D (minor third) | notes bottom to top: D F B | steps from bass: 0 3 9
Chord | B dim | 2nd inversion | slash: Bdim/F | bass: F (diminished fifth) | notes bottom to top: F B D | steps from bass: 0 6 9

### B dim7 | symbol: Bdim7 | notes in root position: B D F G#
Chord | B dim7 | root position | slash: Bdim7 | bass: B (root) | notes bottom to top: B D F G# | steps from bass: 0 3 6 9
Chord | B dim7 | 1st inversion | slash: Bdim7/D | bass: D (minor third) | notes bottom to top: D F G# B | steps from bass: 0 3 6 9
Chord | B dim7 | 2nd inversion | slash: Bdim7/F | bass: F (diminished fifth) | notes bottom to top: F G# B D | steps from bass: 0 3 6 9
Chord | B dim7 | 3rd inversion | slash: Bdim7/G# | bass: G# (diminished seventh) | notes bottom to top: G# B D F | steps from bass: 0 3 6 9

### B aug | symbol: Baug | notes in root position: B D# G
Chord | B aug | root position | slash: Baug | bass: B (root) | notes bottom to top: B D# G | steps from bass: 0 4 8
Chord | B aug | 1st inversion | slash: Baug/D# | bass: D# (major third) | notes bottom to top: D# G B | steps from bass: 0 4 8
Chord | B aug | 2nd inversion | slash: Baug/G | bass: G (augmented fifth) | notes bottom to top: G B D# | steps from bass: 0 4 8

### B sus2 | symbol: Bsus2 | notes in root position: B C# F#
Chord | B sus2 | root position | slash: Bsus2 | bass: B (root) | notes bottom to top: B C# F# | steps from bass: 0 2 7
Chord | B sus2 | 1st inversion | slash: Bsus2/C# | bass: C# (second) | notes bottom to top: C# F# B | steps from bass: 0 5 10
Chord | B sus2 | 2nd inversion | slash: Bsus2/F# | bass: F# (fifth) | notes bottom to top: F# B C# | steps from bass: 0 5 7

### B sus4 | symbol: Bsus4 | notes in root position: B E F#
Chord | B sus4 | root position | slash: Bsus4 | bass: B (root) | notes bottom to top: B E F# | steps from bass: 0 5 7
Chord | B sus4 | 1st inversion | slash: Bsus4/E | bass: E (fourth) | notes bottom to top: E F# B | steps from bass: 0 2 7
Chord | B sus4 | 2nd inversion | slash: Bsus4/F# | bass: F# (fifth) | notes bottom to top: F# B E | steps from bass: 0 5 10

### B maj7 | symbol: Bmaj7 | notes in root position: B D# F# A#
Chord | B maj7 | root position | slash: Bmaj7 | bass: B (root) | notes bottom to top: B D# F# A# | steps from bass: 0 4 7 11
Chord | B maj7 | 1st inversion | slash: Bmaj7/D# | bass: D# (major third) | notes bottom to top: D# F# A# B | steps from bass: 0 3 7 8
Chord | B maj7 | 2nd inversion | slash: Bmaj7/F# | bass: F# (fifth) | notes bottom to top: F# A# B D# | steps from bass: 0 4 5 9
Chord | B maj7 | 3rd inversion | slash: Bmaj7/A# | bass: A# (major seventh) | notes bottom to top: A# B D# F# | steps from bass: 0 1 5 8

### B m7 | symbol: Bm7 | notes in root position: B D F# A
Chord | B m7 | root position | slash: Bm7 | bass: B (root) | notes bottom to top: B D F# A | steps from bass: 0 3 7 10
Chord | B m7 | 1st inversion | slash: Bm7/D | bass: D (minor third) | notes bottom to top: D F# A B | steps from bass: 0 4 7 9
Chord | B m7 | 2nd inversion | slash: Bm7/F# | bass: F# (fifth) | notes bottom to top: F# A B D | steps from bass: 0 3 5 8
Chord | B m7 | 3rd inversion | slash: Bm7/A | bass: A (minor seventh) | notes bottom to top: A B D F# | steps from bass: 0 2 5 9

### B 7sus4 | symbol: B7sus4 | notes in root position: B E F# A
Chord | B 7sus4 | root position | slash: B7sus4 | bass: B (root) | notes bottom to top: B E F# A | steps from bass: 0 5 7 10
Chord | B 7sus4 | 1st inversion | slash: B7sus4/E | bass: E (fourth) | notes bottom to top: E F# A B | steps from bass: 0 2 5 7
Chord | B 7sus4 | 2nd inversion | slash: B7sus4/F# | bass: F# (fifth) | notes bottom to top: F# A B E | steps from bass: 0 3 5 10
Chord | B 7sus4 | 3rd inversion | slash: B7sus4/A | bass: A (minor seventh) | notes bottom to top: A B E F# | steps from bass: 0 2 7 9

### C Major | symbol: C | notes in root position: C E G
Chord | C Major | root position | slash: C | bass: C (root) | notes bottom to top: C E G | steps from bass: 0 4 7
Chord | C Major | 1st inversion | slash: C/E | bass: E (major third) | notes bottom to top: E G C | steps from bass: 0 3 8
Chord | C Major | 2nd inversion | slash: C/G | bass: G (fifth) | notes bottom to top: G C E | steps from bass: 0 5 9

### C Minor | symbol: Cm | notes in root position: C D# G
Chord | C Minor | root position | slash: Cm | bass: C (root) | notes bottom to top: C D# G | steps from bass: 0 3 7
Chord | C Minor | 1st inversion | slash: Cm/D# | bass: D# (minor third) | notes bottom to top: D# G C | steps from bass: 0 4 9
Chord | C Minor | 2nd inversion | slash: Cm/G | bass: G (fifth) | notes bottom to top: G C D# | steps from bass: 0 5 8

### C 7 | symbol: C7 | notes in root position: C E G A#
Chord | C 7 | root position | slash: C7 | bass: C (root) | notes bottom to top: C E G A# | steps from bass: 0 4 7 10
Chord | C 7 | 1st inversion | slash: C7/E | bass: E (major third) | notes bottom to top: E G A# C | steps from bass: 0 3 6 8
Chord | C 7 | 2nd inversion | slash: C7/G | bass: G (fifth) | notes bottom to top: G A# C E | steps from bass: 0 3 5 9
Chord | C 7 | 3rd inversion | slash: C7/A# | bass: A# (minor seventh) | notes bottom to top: A# C E G | steps from bass: 0 2 6 9

### C 5 | symbol: C5 | notes in root position: C G
Chord | C 5 | root position | slash: C5 | bass: C (root) | notes bottom to top: C G | steps from bass: 0 7
Chord | C 5 | 1st inversion | slash: C5/G | bass: G (fifth) | notes bottom to top: G C | steps from bass: 0 5

### C dim | symbol: Cdim | notes in root position: C D# F#
Chord | C dim | root position | slash: Cdim | bass: C (root) | notes bottom to top: C D# F# | steps from bass: 0 3 6
Chord | C dim | 1st inversion | slash: Cdim/D# | bass: D# (minor third) | notes bottom to top: D# F# C | steps from bass: 0 3 9
Chord | C dim | 2nd inversion | slash: Cdim/F# | bass: F# (diminished fifth) | notes bottom to top: F# C D# | steps from bass: 0 6 9

### C dim7 | symbol: Cdim7 | notes in root position: C D# F# A
Chord | C dim7 | root position | slash: Cdim7 | bass: C (root) | notes bottom to top: C D# F# A | steps from bass: 0 3 6 9
Chord | C dim7 | 1st inversion | slash: Cdim7/D# | bass: D# (minor third) | notes bottom to top: D# F# A C | steps from bass: 0 3 6 9
Chord | C dim7 | 2nd inversion | slash: Cdim7/F# | bass: F# (diminished fifth) | notes bottom to top: F# A C D# | steps from bass: 0 3 6 9
Chord | C dim7 | 3rd inversion | slash: Cdim7/A | bass: A (diminished seventh) | notes bottom to top: A C D# F# | steps from bass: 0 3 6 9

### C aug | symbol: Caug | notes in root position: C E G#
Chord | C aug | root position | slash: Caug | bass: C (root) | notes bottom to top: C E G# | steps from bass: 0 4 8
Chord | C aug | 1st inversion | slash: Caug/E | bass: E (major third) | notes bottom to top: E G# C | steps from bass: 0 4 8
Chord | C aug | 2nd inversion | slash: Caug/G# | bass: G# (augmented fifth) | notes bottom to top: G# C E | steps from bass: 0 4 8

### C sus2 | symbol: Csus2 | notes in root position: C D G
Chord | C sus2 | root position | slash: Csus2 | bass: C (root) | notes bottom to top: C D G | steps from bass: 0 2 7
Chord | C sus2 | 1st inversion | slash: Csus2/D | bass: D (second) | notes bottom to top: D G C | steps from bass: 0 5 10
Chord | C sus2 | 2nd inversion | slash: Csus2/G | bass: G (fifth) | notes bottom to top: G C D | steps from bass: 0 5 7

### C sus4 | symbol: Csus4 | notes in root position: C F G
Chord | C sus4 | root position | slash: Csus4 | bass: C (root) | notes bottom to top: C F G | steps from bass: 0 5 7
Chord | C sus4 | 1st inversion | slash: Csus4/F | bass: F (fourth) | notes bottom to top: F G C | steps from bass: 0 2 7
Chord | C sus4 | 2nd inversion | slash: Csus4/G | bass: G (fifth) | notes bottom to top: G C F | steps from bass: 0 5 10

### C maj7 | symbol: Cmaj7 | notes in root position: C E G B
Chord | C maj7 | root position | slash: Cmaj7 | bass: C (root) | notes bottom to top: C E G B | steps from bass: 0 4 7 11
Chord | C maj7 | 1st inversion | slash: Cmaj7/E | bass: E (major third) | notes bottom to top: E G B C | steps from bass: 0 3 7 8
Chord | C maj7 | 2nd inversion | slash: Cmaj7/G | bass: G (fifth) | notes bottom to top: G B C E | steps from bass: 0 4 5 9
Chord | C maj7 | 3rd inversion | slash: Cmaj7/B | bass: B (major seventh) | notes bottom to top: B C E G | steps from bass: 0 1 5 8

### C m7 | symbol: Cm7 | notes in root position: C D# G A#
Chord | C m7 | root position | slash: Cm7 | bass: C (root) | notes bottom to top: C D# G A# | steps from bass: 0 3 7 10
Chord | C m7 | 1st inversion | slash: Cm7/D# | bass: D# (minor third) | notes bottom to top: D# G A# C | steps from bass: 0 4 7 9
Chord | C m7 | 2nd inversion | slash: Cm7/G | bass: G (fifth) | notes bottom to top: G A# C D# | steps from bass: 0 3 5 8
Chord | C m7 | 3rd inversion | slash: Cm7/A# | bass: A# (minor seventh) | notes bottom to top: A# C D# G | steps from bass: 0 2 5 9

### C 7sus4 | symbol: C7sus4 | notes in root position: C F G A#
Chord | C 7sus4 | root position | slash: C7sus4 | bass: C (root) | notes bottom to top: C F G A# | steps from bass: 0 5 7 10
Chord | C 7sus4 | 1st inversion | slash: C7sus4/F | bass: F (fourth) | notes bottom to top: F G A# C | steps from bass: 0 2 5 7
Chord | C 7sus4 | 2nd inversion | slash: C7sus4/G | bass: G (fifth) | notes bottom to top: G A# C F | steps from bass: 0 3 5 10
Chord | C 7sus4 | 3rd inversion | slash: C7sus4/A# | bass: A# (minor seventh) | notes bottom to top: A# C F G | steps from bass: 0 2 7 9

### C# Major | symbol: C# | notes in root position: C# F G#
Chord | C# Major | root position | slash: C# | bass: C# (root) | notes bottom to top: C# F G# | steps from bass: 0 4 7
Chord | C# Major | 1st inversion | slash: C#/F | bass: F (major third) | notes bottom to top: F G# C# | steps from bass: 0 3 8
Chord | C# Major | 2nd inversion | slash: C#/G# | bass: G# (fifth) | notes bottom to top: G# C# F | steps from bass: 0 5 9

### C# Minor | symbol: C#m | notes in root position: C# E G#
Chord | C# Minor | root position | slash: C#m | bass: C# (root) | notes bottom to top: C# E G# | steps from bass: 0 3 7
Chord | C# Minor | 1st inversion | slash: C#m/E | bass: E (minor third) | notes bottom to top: E G# C# | steps from bass: 0 4 9
Chord | C# Minor | 2nd inversion | slash: C#m/G# | bass: G# (fifth) | notes bottom to top: G# C# E | steps from bass: 0 5 8

### C# 7 | symbol: C#7 | notes in root position: C# F G# B
Chord | C# 7 | root position | slash: C#7 | bass: C# (root) | notes bottom to top: C# F G# B | steps from bass: 0 4 7 10
Chord | C# 7 | 1st inversion | slash: C#7/F | bass: F (major third) | notes bottom to top: F G# B C# | steps from bass: 0 3 6 8
Chord | C# 7 | 2nd inversion | slash: C#7/G# | bass: G# (fifth) | notes bottom to top: G# B C# F | steps from bass: 0 3 5 9
Chord | C# 7 | 3rd inversion | slash: C#7/B | bass: B (minor seventh) | notes bottom to top: B C# F G# | steps from bass: 0 2 6 9

### C# 5 | symbol: C#5 | notes in root position: C# G#
Chord | C# 5 | root position | slash: C#5 | bass: C# (root) | notes bottom to top: C# G# | steps from bass: 0 7
Chord | C# 5 | 1st inversion | slash: C#5/G# | bass: G# (fifth) | notes bottom to top: G# C# | steps from bass: 0 5

### C# dim | symbol: C#dim | notes in root position: C# E G
Chord | C# dim | root position | slash: C#dim | bass: C# (root) | notes bottom to top: C# E G | steps from bass: 0 3 6
Chord | C# dim | 1st inversion | slash: C#dim/E | bass: E (minor third) | notes bottom to top: E G C# | steps from bass: 0 3 9
Chord | C# dim | 2nd inversion | slash: C#dim/G | bass: G (diminished fifth) | notes bottom to top: G C# E | steps from bass: 0 6 9

### C# dim7 | symbol: C#dim7 | notes in root position: C# E G A#
Chord | C# dim7 | root position | slash: C#dim7 | bass: C# (root) | notes bottom to top: C# E G A# | steps from bass: 0 3 6 9
Chord | C# dim7 | 1st inversion | slash: C#dim7/E | bass: E (minor third) | notes bottom to top: E G A# C# | steps from bass: 0 3 6 9
Chord | C# dim7 | 2nd inversion | slash: C#dim7/G | bass: G (diminished fifth) | notes bottom to top: G A# C# E | steps from bass: 0 3 6 9
Chord | C# dim7 | 3rd inversion | slash: C#dim7/A# | bass: A# (diminished seventh) | notes bottom to top: A# C# E G | steps from bass: 0 3 6 9

### C# aug | symbol: C#aug | notes in root position: C# F A
Chord | C# aug | root position | slash: C#aug | bass: C# (root) | notes bottom to top: C# F A | steps from bass: 0 4 8
Chord | C# aug | 1st inversion | slash: C#aug/F | bass: F (major third) | notes bottom to top: F A C# | steps from bass: 0 4 8
Chord | C# aug | 2nd inversion | slash: C#aug/A | bass: A (augmented fifth) | notes bottom to top: A C# F | steps from bass: 0 4 8

### C# sus2 | symbol: C#sus2 | notes in root position: C# D# G#
Chord | C# sus2 | root position | slash: C#sus2 | bass: C# (root) | notes bottom to top: C# D# G# | steps from bass: 0 2 7
Chord | C# sus2 | 1st inversion | slash: C#sus2/D# | bass: D# (second) | notes bottom to top: D# G# C# | steps from bass: 0 5 10
Chord | C# sus2 | 2nd inversion | slash: C#sus2/G# | bass: G# (fifth) | notes bottom to top: G# C# D# | steps from bass: 0 5 7

### C# sus4 | symbol: C#sus4 | notes in root position: C# F# G#
Chord | C# sus4 | root position | slash: C#sus4 | bass: C# (root) | notes bottom to top: C# F# G# | steps from bass: 0 5 7
Chord | C# sus4 | 1st inversion | slash: C#sus4/F# | bass: F# (fourth) | notes bottom to top: F# G# C# | steps from bass: 0 2 7
Chord | C# sus4 | 2nd inversion | slash: C#sus4/G# | bass: G# (fifth) | notes bottom to top: G# C# F# | steps from bass: 0 5 10

### C# maj7 | symbol: C#maj7 | notes in root position: C# F G# C
Chord | C# maj7 | root position | slash: C#maj7 | bass: C# (root) | notes bottom to top: C# F G# C | steps from bass: 0 4 7 11
Chord | C# maj7 | 1st inversion | slash: C#maj7/F | bass: F (major third) | notes bottom to top: F G# C C# | steps from bass: 0 3 7 8
Chord | C# maj7 | 2nd inversion | slash: C#maj7/G# | bass: G# (fifth) | notes bottom to top: G# C C# F | steps from bass: 0 4 5 9
Chord | C# maj7 | 3rd inversion | slash: C#maj7/C | bass: C (major seventh) | notes bottom to top: C C# F G# | steps from bass: 0 1 5 8

### C# m7 | symbol: C#m7 | notes in root position: C# E G# B
Chord | C# m7 | root position | slash: C#m7 | bass: C# (root) | notes bottom to top: C# E G# B | steps from bass: 0 3 7 10
Chord | C# m7 | 1st inversion | slash: C#m7/E | bass: E (minor third) | notes bottom to top: E G# B C# | steps from bass: 0 4 7 9
Chord | C# m7 | 2nd inversion | slash: C#m7/G# | bass: G# (fifth) | notes bottom to top: G# B C# E | steps from bass: 0 3 5 8
Chord | C# m7 | 3rd inversion | slash: C#m7/B | bass: B (minor seventh) | notes bottom to top: B C# E G# | steps from bass: 0 2 5 9

### C# 7sus4 | symbol: C#7sus4 | notes in root position: C# F# G# B
Chord | C# 7sus4 | root position | slash: C#7sus4 | bass: C# (root) | notes bottom to top: C# F# G# B | steps from bass: 0 5 7 10
Chord | C# 7sus4 | 1st inversion | slash: C#7sus4/F# | bass: F# (fourth) | notes bottom to top: F# G# B C# | steps from bass: 0 2 5 7
Chord | C# 7sus4 | 2nd inversion | slash: C#7sus4/G# | bass: G# (fifth) | notes bottom to top: G# B C# F# | steps from bass: 0 3 5 10
Chord | C# 7sus4 | 3rd inversion | slash: C#7sus4/B | bass: B (minor seventh) | notes bottom to top: B C# F# G# | steps from bass: 0 2 7 9

### D Major | symbol: D | notes in root position: D F# A
Chord | D Major | root position | slash: D | bass: D (root) | notes bottom to top: D F# A | steps from bass: 0 4 7
Chord | D Major | 1st inversion | slash: D/F# | bass: F# (major third) | notes bottom to top: F# A D | steps from bass: 0 3 8
Chord | D Major | 2nd inversion | slash: D/A | bass: A (fifth) | notes bottom to top: A D F# | steps from bass: 0 5 9

### D Minor | symbol: Dm | notes in root position: D F A
Chord | D Minor | root position | slash: Dm | bass: D (root) | notes bottom to top: D F A | steps from bass: 0 3 7
Chord | D Minor | 1st inversion | slash: Dm/F | bass: F (minor third) | notes bottom to top: F A D | steps from bass: 0 4 9
Chord | D Minor | 2nd inversion | slash: Dm/A | bass: A (fifth) | notes bottom to top: A D F | steps from bass: 0 5 8

### D 7 | symbol: D7 | notes in root position: D F# A C
Chord | D 7 | root position | slash: D7 | bass: D (root) | notes bottom to top: D F# A C | steps from bass: 0 4 7 10
Chord | D 7 | 1st inversion | slash: D7/F# | bass: F# (major third) | notes bottom to top: F# A C D | steps from bass: 0 3 6 8
Chord | D 7 | 2nd inversion | slash: D7/A | bass: A (fifth) | notes bottom to top: A C D F# | steps from bass: 0 3 5 9
Chord | D 7 | 3rd inversion | slash: D7/C | bass: C (minor seventh) | notes bottom to top: C D F# A | steps from bass: 0 2 6 9

### D 5 | symbol: D5 | notes in root position: D A
Chord | D 5 | root position | slash: D5 | bass: D (root) | notes bottom to top: D A | steps from bass: 0 7
Chord | D 5 | 1st inversion | slash: D5/A | bass: A (fifth) | notes bottom to top: A D | steps from bass: 0 5

### D dim | symbol: Ddim | notes in root position: D F G#
Chord | D dim | root position | slash: Ddim | bass: D (root) | notes bottom to top: D F G# | steps from bass: 0 3 6
Chord | D dim | 1st inversion | slash: Ddim/F | bass: F (minor third) | notes bottom to top: F G# D | steps from bass: 0 3 9
Chord | D dim | 2nd inversion | slash: Ddim/G# | bass: G# (diminished fifth) | notes bottom to top: G# D F | steps from bass: 0 6 9

### D dim7 | symbol: Ddim7 | notes in root position: D F G# B
Chord | D dim7 | root position | slash: Ddim7 | bass: D (root) | notes bottom to top: D F G# B | steps from bass: 0 3 6 9
Chord | D dim7 | 1st inversion | slash: Ddim7/F | bass: F (minor third) | notes bottom to top: F G# B D | steps from bass: 0 3 6 9
Chord | D dim7 | 2nd inversion | slash: Ddim7/G# | bass: G# (diminished fifth) | notes bottom to top: G# B D F | steps from bass: 0 3 6 9
Chord | D dim7 | 3rd inversion | slash: Ddim7/B | bass: B (diminished seventh) | notes bottom to top: B D F G# | steps from bass: 0 3 6 9

### D aug | symbol: Daug | notes in root position: D F# A#
Chord | D aug | root position | slash: Daug | bass: D (root) | notes bottom to top: D F# A# | steps from bass: 0 4 8
Chord | D aug | 1st inversion | slash: Daug/F# | bass: F# (major third) | notes bottom to top: F# A# D | steps from bass: 0 4 8
Chord | D aug | 2nd inversion | slash: Daug/A# | bass: A# (augmented fifth) | notes bottom to top: A# D F# | steps from bass: 0 4 8

### D sus2 | symbol: Dsus2 | notes in root position: D E A
Chord | D sus2 | root position | slash: Dsus2 | bass: D (root) | notes bottom to top: D E A | steps from bass: 0 2 7
Chord | D sus2 | 1st inversion | slash: Dsus2/E | bass: E (second) | notes bottom to top: E A D | steps from bass: 0 5 10
Chord | D sus2 | 2nd inversion | slash: Dsus2/A | bass: A (fifth) | notes bottom to top: A D E | steps from bass: 0 5 7

### D sus4 | symbol: Dsus4 | notes in root position: D G A
Chord | D sus4 | root position | slash: Dsus4 | bass: D (root) | notes bottom to top: D G A | steps from bass: 0 5 7
Chord | D sus4 | 1st inversion | slash: Dsus4/G | bass: G (fourth) | notes bottom to top: G A D | steps from bass: 0 2 7
Chord | D sus4 | 2nd inversion | slash: Dsus4/A | bass: A (fifth) | notes bottom to top: A D G | steps from bass: 0 5 10

### D maj7 | symbol: Dmaj7 | notes in root position: D F# A C#
Chord | D maj7 | root position | slash: Dmaj7 | bass: D (root) | notes bottom to top: D F# A C# | steps from bass: 0 4 7 11
Chord | D maj7 | 1st inversion | slash: Dmaj7/F# | bass: F# (major third) | notes bottom to top: F# A C# D | steps from bass: 0 3 7 8
Chord | D maj7 | 2nd inversion | slash: Dmaj7/A | bass: A (fifth) | notes bottom to top: A C# D F# | steps from bass: 0 4 5 9
Chord | D maj7 | 3rd inversion | slash: Dmaj7/C# | bass: C# (major seventh) | notes bottom to top: C# D F# A | steps from bass: 0 1 5 8

### D m7 | symbol: Dm7 | notes in root position: D F A C
Chord | D m7 | root position | slash: Dm7 | bass: D (root) | notes bottom to top: D F A C | steps from bass: 0 3 7 10
Chord | D m7 | 1st inversion | slash: Dm7/F | bass: F (minor third) | notes bottom to top: F A C D | steps from bass: 0 4 7 9
Chord | D m7 | 2nd inversion | slash: Dm7/A | bass: A (fifth) | notes bottom to top: A C D F | steps from bass: 0 3 5 8
Chord | D m7 | 3rd inversion | slash: Dm7/C | bass: C (minor seventh) | notes bottom to top: C D F A | steps from bass: 0 2 5 9

### D 7sus4 | symbol: D7sus4 | notes in root position: D G A C
Chord | D 7sus4 | root position | slash: D7sus4 | bass: D (root) | notes bottom to top: D G A C | steps from bass: 0 5 7 10
Chord | D 7sus4 | 1st inversion | slash: D7sus4/G | bass: G (fourth) | notes bottom to top: G A C D | steps from bass: 0 2 5 7
Chord | D 7sus4 | 2nd inversion | slash: D7sus4/A | bass: A (fifth) | notes bottom to top: A C D G | steps from bass: 0 3 5 10
Chord | D 7sus4 | 3rd inversion | slash: D7sus4/C | bass: C (minor seventh) | notes bottom to top: C D G A | steps from bass: 0 2 7 9

### D# Major | symbol: D# | notes in root position: D# G A#
Chord | D# Major | root position | slash: D# | bass: D# (root) | notes bottom to top: D# G A# | steps from bass: 0 4 7
Chord | D# Major | 1st inversion | slash: D#/G | bass: G (major third) | notes bottom to top: G A# D# | steps from bass: 0 3 8
Chord | D# Major | 2nd inversion | slash: D#/A# | bass: A# (fifth) | notes bottom to top: A# D# G | steps from bass: 0 5 9

### D# Minor | symbol: D#m | notes in root position: D# F# A#
Chord | D# Minor | root position | slash: D#m | bass: D# (root) | notes bottom to top: D# F# A# | steps from bass: 0 3 7
Chord | D# Minor | 1st inversion | slash: D#m/F# | bass: F# (minor third) | notes bottom to top: F# A# D# | steps from bass: 0 4 9
Chord | D# Minor | 2nd inversion | slash: D#m/A# | bass: A# (fifth) | notes bottom to top: A# D# F# | steps from bass: 0 5 8

### D# 7 | symbol: D#7 | notes in root position: D# G A# C#
Chord | D# 7 | root position | slash: D#7 | bass: D# (root) | notes bottom to top: D# G A# C# | steps from bass: 0 4 7 10
Chord | D# 7 | 1st inversion | slash: D#7/G | bass: G (major third) | notes bottom to top: G A# C# D# | steps from bass: 0 3 6 8
Chord | D# 7 | 2nd inversion | slash: D#7/A# | bass: A# (fifth) | notes bottom to top: A# C# D# G | steps from bass: 0 3 5 9
Chord | D# 7 | 3rd inversion | slash: D#7/C# | bass: C# (minor seventh) | notes bottom to top: C# D# G A# | steps from bass: 0 2 6 9

### D# 5 | symbol: D#5 | notes in root position: D# A#
Chord | D# 5 | root position | slash: D#5 | bass: D# (root) | notes bottom to top: D# A# | steps from bass: 0 7
Chord | D# 5 | 1st inversion | slash: D#5/A# | bass: A# (fifth) | notes bottom to top: A# D# | steps from bass: 0 5

### D# dim | symbol: D#dim | notes in root position: D# F# A
Chord | D# dim | root position | slash: D#dim | bass: D# (root) | notes bottom to top: D# F# A | steps from bass: 0 3 6
Chord | D# dim | 1st inversion | slash: D#dim/F# | bass: F# (minor third) | notes bottom to top: F# A D# | steps from bass: 0 3 9
Chord | D# dim | 2nd inversion | slash: D#dim/A | bass: A (diminished fifth) | notes bottom to top: A D# F# | steps from bass: 0 6 9

### D# dim7 | symbol: D#dim7 | notes in root position: D# F# A C
Chord | D# dim7 | root position | slash: D#dim7 | bass: D# (root) | notes bottom to top: D# F# A C | steps from bass: 0 3 6 9
Chord | D# dim7 | 1st inversion | slash: D#dim7/F# | bass: F# (minor third) | notes bottom to top: F# A C D# | steps from bass: 0 3 6 9
Chord | D# dim7 | 2nd inversion | slash: D#dim7/A | bass: A (diminished fifth) | notes bottom to top: A C D# F# | steps from bass: 0 3 6 9
Chord | D# dim7 | 3rd inversion | slash: D#dim7/C | bass: C (diminished seventh) | notes bottom to top: C D# F# A | steps from bass: 0 3 6 9

### D# aug | symbol: D#aug | notes in root position: D# G B
Chord | D# aug | root position | slash: D#aug | bass: D# (root) | notes bottom to top: D# G B | steps from bass: 0 4 8
Chord | D# aug | 1st inversion | slash: D#aug/G | bass: G (major third) | notes bottom to top: G B D# | steps from bass: 0 4 8
Chord | D# aug | 2nd inversion | slash: D#aug/B | bass: B (augmented fifth) | notes bottom to top: B D# G | steps from bass: 0 4 8

### D# sus2 | symbol: D#sus2 | notes in root position: D# F A#
Chord | D# sus2 | root position | slash: D#sus2 | bass: D# (root) | notes bottom to top: D# F A# | steps from bass: 0 2 7
Chord | D# sus2 | 1st inversion | slash: D#sus2/F | bass: F (second) | notes bottom to top: F A# D# | steps from bass: 0 5 10
Chord | D# sus2 | 2nd inversion | slash: D#sus2/A# | bass: A# (fifth) | notes bottom to top: A# D# F | steps from bass: 0 5 7

### D# sus4 | symbol: D#sus4 | notes in root position: D# G# A#
Chord | D# sus4 | root position | slash: D#sus4 | bass: D# (root) | notes bottom to top: D# G# A# | steps from bass: 0 5 7
Chord | D# sus4 | 1st inversion | slash: D#sus4/G# | bass: G# (fourth) | notes bottom to top: G# A# D# | steps from bass: 0 2 7
Chord | D# sus4 | 2nd inversion | slash: D#sus4/A# | bass: A# (fifth) | notes bottom to top: A# D# G# | steps from bass: 0 5 10

### D# maj7 | symbol: D#maj7 | notes in root position: D# G A# D
Chord | D# maj7 | root position | slash: D#maj7 | bass: D# (root) | notes bottom to top: D# G A# D | steps from bass: 0 4 7 11
Chord | D# maj7 | 1st inversion | slash: D#maj7/G | bass: G (major third) | notes bottom to top: G A# D D# | steps from bass: 0 3 7 8
Chord | D# maj7 | 2nd inversion | slash: D#maj7/A# | bass: A# (fifth) | notes bottom to top: A# D D# G | steps from bass: 0 4 5 9
Chord | D# maj7 | 3rd inversion | slash: D#maj7/D | bass: D (major seventh) | notes bottom to top: D D# G A# | steps from bass: 0 1 5 8

### D# m7 | symbol: D#m7 | notes in root position: D# F# A# C#
Chord | D# m7 | root position | slash: D#m7 | bass: D# (root) | notes bottom to top: D# F# A# C# | steps from bass: 0 3 7 10
Chord | D# m7 | 1st inversion | slash: D#m7/F# | bass: F# (minor third) | notes bottom to top: F# A# C# D# | steps from bass: 0 4 7 9
Chord | D# m7 | 2nd inversion | slash: D#m7/A# | bass: A# (fifth) | notes bottom to top: A# C# D# F# | steps from bass: 0 3 5 8
Chord | D# m7 | 3rd inversion | slash: D#m7/C# | bass: C# (minor seventh) | notes bottom to top: C# D# F# A# | steps from bass: 0 2 5 9

### D# 7sus4 | symbol: D#7sus4 | notes in root position: D# G# A# C#
Chord | D# 7sus4 | root position | slash: D#7sus4 | bass: D# (root) | notes bottom to top: D# G# A# C# | steps from bass: 0 5 7 10
Chord | D# 7sus4 | 1st inversion | slash: D#7sus4/G# | bass: G# (fourth) | notes bottom to top: G# A# C# D# | steps from bass: 0 2 5 7
Chord | D# 7sus4 | 2nd inversion | slash: D#7sus4/A# | bass: A# (fifth) | notes bottom to top: A# C# D# G# | steps from bass: 0 3 5 10
Chord | D# 7sus4 | 3rd inversion | slash: D#7sus4/C# | bass: C# (minor seventh) | notes bottom to top: C# D# G# A# | steps from bass: 0 2 7 9

### E Major | symbol: E | notes in root position: E G# B
Chord | E Major | root position | slash: E | bass: E (root) | notes bottom to top: E G# B | steps from bass: 0 4 7
Chord | E Major | 1st inversion | slash: E/G# | bass: G# (major third) | notes bottom to top: G# B E | steps from bass: 0 3 8
Chord | E Major | 2nd inversion | slash: E/B | bass: B (fifth) | notes bottom to top: B E G# | steps from bass: 0 5 9

### E Minor | symbol: Em | notes in root position: E G B
Chord | E Minor | root position | slash: Em | bass: E (root) | notes bottom to top: E G B | steps from bass: 0 3 7
Chord | E Minor | 1st inversion | slash: Em/G | bass: G (minor third) | notes bottom to top: G B E | steps from bass: 0 4 9
Chord | E Minor | 2nd inversion | slash: Em/B | bass: B (fifth) | notes bottom to top: B E G | steps from bass: 0 5 8

### E 7 | symbol: E7 | notes in root position: E G# B D
Chord | E 7 | root position | slash: E7 | bass: E (root) | notes bottom to top: E G# B D | steps from bass: 0 4 7 10
Chord | E 7 | 1st inversion | slash: E7/G# | bass: G# (major third) | notes bottom to top: G# B D E | steps from bass: 0 3 6 8
Chord | E 7 | 2nd inversion | slash: E7/B | bass: B (fifth) | notes bottom to top: B D E G# | steps from bass: 0 3 5 9
Chord | E 7 | 3rd inversion | slash: E7/D | bass: D (minor seventh) | notes bottom to top: D E G# B | steps from bass: 0 2 6 9

### E 5 | symbol: E5 | notes in root position: E B
Chord | E 5 | root position | slash: E5 | bass: E (root) | notes bottom to top: E B | steps from bass: 0 7
Chord | E 5 | 1st inversion | slash: E5/B | bass: B (fifth) | notes bottom to top: B E | steps from bass: 0 5

### E dim | symbol: Edim | notes in root position: E G A#
Chord | E dim | root position | slash: Edim | bass: E (root) | notes bottom to top: E G A# | steps from bass: 0 3 6
Chord | E dim | 1st inversion | slash: Edim/G | bass: G (minor third) | notes bottom to top: G A# E | steps from bass: 0 3 9
Chord | E dim | 2nd inversion | slash: Edim/A# | bass: A# (diminished fifth) | notes bottom to top: A# E G | steps from bass: 0 6 9

### E dim7 | symbol: Edim7 | notes in root position: E G A# C#
Chord | E dim7 | root position | slash: Edim7 | bass: E (root) | notes bottom to top: E G A# C# | steps from bass: 0 3 6 9
Chord | E dim7 | 1st inversion | slash: Edim7/G | bass: G (minor third) | notes bottom to top: G A# C# E | steps from bass: 0 3 6 9
Chord | E dim7 | 2nd inversion | slash: Edim7/A# | bass: A# (diminished fifth) | notes bottom to top: A# C# E G | steps from bass: 0 3 6 9
Chord | E dim7 | 3rd inversion | slash: Edim7/C# | bass: C# (diminished seventh) | notes bottom to top: C# E G A# | steps from bass: 0 3 6 9

### E aug | symbol: Eaug | notes in root position: E G# C
Chord | E aug | root position | slash: Eaug | bass: E (root) | notes bottom to top: E G# C | steps from bass: 0 4 8
Chord | E aug | 1st inversion | slash: Eaug/G# | bass: G# (major third) | notes bottom to top: G# C E | steps from bass: 0 4 8
Chord | E aug | 2nd inversion | slash: Eaug/C | bass: C (augmented fifth) | notes bottom to top: C E G# | steps from bass: 0 4 8

### E sus2 | symbol: Esus2 | notes in root position: E F# B
Chord | E sus2 | root position | slash: Esus2 | bass: E (root) | notes bottom to top: E F# B | steps from bass: 0 2 7
Chord | E sus2 | 1st inversion | slash: Esus2/F# | bass: F# (second) | notes bottom to top: F# B E | steps from bass: 0 5 10
Chord | E sus2 | 2nd inversion | slash: Esus2/B | bass: B (fifth) | notes bottom to top: B E F# | steps from bass: 0 5 7

### E sus4 | symbol: Esus4 | notes in root position: E A B
Chord | E sus4 | root position | slash: Esus4 | bass: E (root) | notes bottom to top: E A B | steps from bass: 0 5 7
Chord | E sus4 | 1st inversion | slash: Esus4/A | bass: A (fourth) | notes bottom to top: A B E | steps from bass: 0 2 7
Chord | E sus4 | 2nd inversion | slash: Esus4/B | bass: B (fifth) | notes bottom to top: B E A | steps from bass: 0 5 10

### E maj7 | symbol: Emaj7 | notes in root position: E G# B D#
Chord | E maj7 | root position | slash: Emaj7 | bass: E (root) | notes bottom to top: E G# B D# | steps from bass: 0 4 7 11
Chord | E maj7 | 1st inversion | slash: Emaj7/G# | bass: G# (major third) | notes bottom to top: G# B D# E | steps from bass: 0 3 7 8
Chord | E maj7 | 2nd inversion | slash: Emaj7/B | bass: B (fifth) | notes bottom to top: B D# E G# | steps from bass: 0 4 5 9
Chord | E maj7 | 3rd inversion | slash: Emaj7/D# | bass: D# (major seventh) | notes bottom to top: D# E G# B | steps from bass: 0 1 5 8

### E m7 | symbol: Em7 | notes in root position: E G B D
Chord | E m7 | root position | slash: Em7 | bass: E (root) | notes bottom to top: E G B D | steps from bass: 0 3 7 10
Chord | E m7 | 1st inversion | slash: Em7/G | bass: G (minor third) | notes bottom to top: G B D E | steps from bass: 0 4 7 9
Chord | E m7 | 2nd inversion | slash: Em7/B | bass: B (fifth) | notes bottom to top: B D E G | steps from bass: 0 3 5 8
Chord | E m7 | 3rd inversion | slash: Em7/D | bass: D (minor seventh) | notes bottom to top: D E G B | steps from bass: 0 2 5 9

### E 7sus4 | symbol: E7sus4 | notes in root position: E A B D
Chord | E 7sus4 | root position | slash: E7sus4 | bass: E (root) | notes bottom to top: E A B D | steps from bass: 0 5 7 10
Chord | E 7sus4 | 1st inversion | slash: E7sus4/A | bass: A (fourth) | notes bottom to top: A B D E | steps from bass: 0 2 5 7
Chord | E 7sus4 | 2nd inversion | slash: E7sus4/B | bass: B (fifth) | notes bottom to top: B D E A | steps from bass: 0 3 5 10
Chord | E 7sus4 | 3rd inversion | slash: E7sus4/D | bass: D (minor seventh) | notes bottom to top: D E A B | steps from bass: 0 2 7 9

### F Major | symbol: F | notes in root position: F A C
Chord | F Major | root position | slash: F | bass: F (root) | notes bottom to top: F A C | steps from bass: 0 4 7
Chord | F Major | 1st inversion | slash: F/A | bass: A (major third) | notes bottom to top: A C F | steps from bass: 0 3 8
Chord | F Major | 2nd inversion | slash: F/C | bass: C (fifth) | notes bottom to top: C F A | steps from bass: 0 5 9

### F Minor | symbol: Fm | notes in root position: F G# C
Chord | F Minor | root position | slash: Fm | bass: F (root) | notes bottom to top: F G# C | steps from bass: 0 3 7
Chord | F Minor | 1st inversion | slash: Fm/G# | bass: G# (minor third) | notes bottom to top: G# C F | steps from bass: 0 4 9
Chord | F Minor | 2nd inversion | slash: Fm/C | bass: C (fifth) | notes bottom to top: C F G# | steps from bass: 0 5 8

### F 7 | symbol: F7 | notes in root position: F A C D#
Chord | F 7 | root position | slash: F7 | bass: F (root) | notes bottom to top: F A C D# | steps from bass: 0 4 7 10
Chord | F 7 | 1st inversion | slash: F7/A | bass: A (major third) | notes bottom to top: A C D# F | steps from bass: 0 3 6 8
Chord | F 7 | 2nd inversion | slash: F7/C | bass: C (fifth) | notes bottom to top: C D# F A | steps from bass: 0 3 5 9
Chord | F 7 | 3rd inversion | slash: F7/D# | bass: D# (minor seventh) | notes bottom to top: D# F A C | steps from bass: 0 2 6 9

### F 5 | symbol: F5 | notes in root position: F C
Chord | F 5 | root position | slash: F5 | bass: F (root) | notes bottom to top: F C | steps from bass: 0 7
Chord | F 5 | 1st inversion | slash: F5/C | bass: C (fifth) | notes bottom to top: C F | steps from bass: 0 5

### F dim | symbol: Fdim | notes in root position: F G# B
Chord | F dim | root position | slash: Fdim | bass: F (root) | notes bottom to top: F G# B | steps from bass: 0 3 6
Chord | F dim | 1st inversion | slash: Fdim/G# | bass: G# (minor third) | notes bottom to top: G# B F | steps from bass: 0 3 9
Chord | F dim | 2nd inversion | slash: Fdim/B | bass: B (diminished fifth) | notes bottom to top: B F G# | steps from bass: 0 6 9

### F dim7 | symbol: Fdim7 | notes in root position: F G# B D
Chord | F dim7 | root position | slash: Fdim7 | bass: F (root) | notes bottom to top: F G# B D | steps from bass: 0 3 6 9
Chord | F dim7 | 1st inversion | slash: Fdim7/G# | bass: G# (minor third) | notes bottom to top: G# B D F | steps from bass: 0 3 6 9
Chord | F dim7 | 2nd inversion | slash: Fdim7/B | bass: B (diminished fifth) | notes bottom to top: B D F G# | steps from bass: 0 3 6 9
Chord | F dim7 | 3rd inversion | slash: Fdim7/D | bass: D (diminished seventh) | notes bottom to top: D F G# B | steps from bass: 0 3 6 9

### F aug | symbol: Faug | notes in root position: F A C#
Chord | F aug | root position | slash: Faug | bass: F (root) | notes bottom to top: F A C# | steps from bass: 0 4 8
Chord | F aug | 1st inversion | slash: Faug/A | bass: A (major third) | notes bottom to top: A C# F | steps from bass: 0 4 8
Chord | F aug | 2nd inversion | slash: Faug/C# | bass: C# (augmented fifth) | notes bottom to top: C# F A | steps from bass: 0 4 8

### F sus2 | symbol: Fsus2 | notes in root position: F G C
Chord | F sus2 | root position | slash: Fsus2 | bass: F (root) | notes bottom to top: F G C | steps from bass: 0 2 7
Chord | F sus2 | 1st inversion | slash: Fsus2/G | bass: G (second) | notes bottom to top: G C F | steps from bass: 0 5 10
Chord | F sus2 | 2nd inversion | slash: Fsus2/C | bass: C (fifth) | notes bottom to top: C F G | steps from bass: 0 5 7

### F sus4 | symbol: Fsus4 | notes in root position: F A# C
Chord | F sus4 | root position | slash: Fsus4 | bass: F (root) | notes bottom to top: F A# C | steps from bass: 0 5 7
Chord | F sus4 | 1st inversion | slash: Fsus4/A# | bass: A# (fourth) | notes bottom to top: A# C F | steps from bass: 0 2 7
Chord | F sus4 | 2nd inversion | slash: Fsus4/C | bass: C (fifth) | notes bottom to top: C F A# | steps from bass: 0 5 10

### F maj7 | symbol: Fmaj7 | notes in root position: F A C E
Chord | F maj7 | root position | slash: Fmaj7 | bass: F (root) | notes bottom to top: F A C E | steps from bass: 0 4 7 11
Chord | F maj7 | 1st inversion | slash: Fmaj7/A | bass: A (major third) | notes bottom to top: A C E F | steps from bass: 0 3 7 8
Chord | F maj7 | 2nd inversion | slash: Fmaj7/C | bass: C (fifth) | notes bottom to top: C E F A | steps from bass: 0 4 5 9
Chord | F maj7 | 3rd inversion | slash: Fmaj7/E | bass: E (major seventh) | notes bottom to top: E F A C | steps from bass: 0 1 5 8

### F m7 | symbol: Fm7 | notes in root position: F G# C D#
Chord | F m7 | root position | slash: Fm7 | bass: F (root) | notes bottom to top: F G# C D# | steps from bass: 0 3 7 10
Chord | F m7 | 1st inversion | slash: Fm7/G# | bass: G# (minor third) | notes bottom to top: G# C D# F | steps from bass: 0 4 7 9
Chord | F m7 | 2nd inversion | slash: Fm7/C | bass: C (fifth) | notes bottom to top: C D# F G# | steps from bass: 0 3 5 8
Chord | F m7 | 3rd inversion | slash: Fm7/D# | bass: D# (minor seventh) | notes bottom to top: D# F G# C | steps from bass: 0 2 5 9

### F 7sus4 | symbol: F7sus4 | notes in root position: F A# C D#
Chord | F 7sus4 | root position | slash: F7sus4 | bass: F (root) | notes bottom to top: F A# C D# | steps from bass: 0 5 7 10
Chord | F 7sus4 | 1st inversion | slash: F7sus4/A# | bass: A# (fourth) | notes bottom to top: A# C D# F | steps from bass: 0 2 5 7
Chord | F 7sus4 | 2nd inversion | slash: F7sus4/C | bass: C (fifth) | notes bottom to top: C D# F A# | steps from bass: 0 3 5 10
Chord | F 7sus4 | 3rd inversion | slash: F7sus4/D# | bass: D# (minor seventh) | notes bottom to top: D# F A# C | steps from bass: 0 2 7 9

### F# Major | symbol: F# | notes in root position: F# A# C#
Chord | F# Major | root position | slash: F# | bass: F# (root) | notes bottom to top: F# A# C# | steps from bass: 0 4 7
Chord | F# Major | 1st inversion | slash: F#/A# | bass: A# (major third) | notes bottom to top: A# C# F# | steps from bass: 0 3 8
Chord | F# Major | 2nd inversion | slash: F#/C# | bass: C# (fifth) | notes bottom to top: C# F# A# | steps from bass: 0 5 9

### F# Minor | symbol: F#m | notes in root position: F# A C#
Chord | F# Minor | root position | slash: F#m | bass: F# (root) | notes bottom to top: F# A C# | steps from bass: 0 3 7
Chord | F# Minor | 1st inversion | slash: F#m/A | bass: A (minor third) | notes bottom to top: A C# F# | steps from bass: 0 4 9
Chord | F# Minor | 2nd inversion | slash: F#m/C# | bass: C# (fifth) | notes bottom to top: C# F# A | steps from bass: 0 5 8

### F# 7 | symbol: F#7 | notes in root position: F# A# C# E
Chord | F# 7 | root position | slash: F#7 | bass: F# (root) | notes bottom to top: F# A# C# E | steps from bass: 0 4 7 10
Chord | F# 7 | 1st inversion | slash: F#7/A# | bass: A# (major third) | notes bottom to top: A# C# E F# | steps from bass: 0 3 6 8
Chord | F# 7 | 2nd inversion | slash: F#7/C# | bass: C# (fifth) | notes bottom to top: C# E F# A# | steps from bass: 0 3 5 9
Chord | F# 7 | 3rd inversion | slash: F#7/E | bass: E (minor seventh) | notes bottom to top: E F# A# C# | steps from bass: 0 2 6 9

### F# 5 | symbol: F#5 | notes in root position: F# C#
Chord | F# 5 | root position | slash: F#5 | bass: F# (root) | notes bottom to top: F# C# | steps from bass: 0 7
Chord | F# 5 | 1st inversion | slash: F#5/C# | bass: C# (fifth) | notes bottom to top: C# F# | steps from bass: 0 5

### F# dim | symbol: F#dim | notes in root position: F# A C
Chord | F# dim | root position | slash: F#dim | bass: F# (root) | notes bottom to top: F# A C | steps from bass: 0 3 6
Chord | F# dim | 1st inversion | slash: F#dim/A | bass: A (minor third) | notes bottom to top: A C F# | steps from bass: 0 3 9
Chord | F# dim | 2nd inversion | slash: F#dim/C | bass: C (diminished fifth) | notes bottom to top: C F# A | steps from bass: 0 6 9

### F# dim7 | symbol: F#dim7 | notes in root position: F# A C D#
Chord | F# dim7 | root position | slash: F#dim7 | bass: F# (root) | notes bottom to top: F# A C D# | steps from bass: 0 3 6 9
Chord | F# dim7 | 1st inversion | slash: F#dim7/A | bass: A (minor third) | notes bottom to top: A C D# F# | steps from bass: 0 3 6 9
Chord | F# dim7 | 2nd inversion | slash: F#dim7/C | bass: C (diminished fifth) | notes bottom to top: C D# F# A | steps from bass: 0 3 6 9
Chord | F# dim7 | 3rd inversion | slash: F#dim7/D# | bass: D# (diminished seventh) | notes bottom to top: D# F# A C | steps from bass: 0 3 6 9

### F# aug | symbol: F#aug | notes in root position: F# A# D
Chord | F# aug | root position | slash: F#aug | bass: F# (root) | notes bottom to top: F# A# D | steps from bass: 0 4 8
Chord | F# aug | 1st inversion | slash: F#aug/A# | bass: A# (major third) | notes bottom to top: A# D F# | steps from bass: 0 4 8
Chord | F# aug | 2nd inversion | slash: F#aug/D | bass: D (augmented fifth) | notes bottom to top: D F# A# | steps from bass: 0 4 8

### F# sus2 | symbol: F#sus2 | notes in root position: F# G# C#
Chord | F# sus2 | root position | slash: F#sus2 | bass: F# (root) | notes bottom to top: F# G# C# | steps from bass: 0 2 7
Chord | F# sus2 | 1st inversion | slash: F#sus2/G# | bass: G# (second) | notes bottom to top: G# C# F# | steps from bass: 0 5 10
Chord | F# sus2 | 2nd inversion | slash: F#sus2/C# | bass: C# (fifth) | notes bottom to top: C# F# G# | steps from bass: 0 5 7

### F# sus4 | symbol: F#sus4 | notes in root position: F# B C#
Chord | F# sus4 | root position | slash: F#sus4 | bass: F# (root) | notes bottom to top: F# B C# | steps from bass: 0 5 7
Chord | F# sus4 | 1st inversion | slash: F#sus4/B | bass: B (fourth) | notes bottom to top: B C# F# | steps from bass: 0 2 7
Chord | F# sus4 | 2nd inversion | slash: F#sus4/C# | bass: C# (fifth) | notes bottom to top: C# F# B | steps from bass: 0 5 10

### F# maj7 | symbol: F#maj7 | notes in root position: F# A# C# F
Chord | F# maj7 | root position | slash: F#maj7 | bass: F# (root) | notes bottom to top: F# A# C# F | steps from bass: 0 4 7 11
Chord | F# maj7 | 1st inversion | slash: F#maj7/A# | bass: A# (major third) | notes bottom to top: A# C# F F# | steps from bass: 0 3 7 8
Chord | F# maj7 | 2nd inversion | slash: F#maj7/C# | bass: C# (fifth) | notes bottom to top: C# F F# A# | steps from bass: 0 4 5 9
Chord | F# maj7 | 3rd inversion | slash: F#maj7/F | bass: F (major seventh) | notes bottom to top: F F# A# C# | steps from bass: 0 1 5 8

### F# m7 | symbol: F#m7 | notes in root position: F# A C# E
Chord | F# m7 | root position | slash: F#m7 | bass: F# (root) | notes bottom to top: F# A C# E | steps from bass: 0 3 7 10
Chord | F# m7 | 1st inversion | slash: F#m7/A | bass: A (minor third) | notes bottom to top: A C# E F# | steps from bass: 0 4 7 9
Chord | F# m7 | 2nd inversion | slash: F#m7/C# | bass: C# (fifth) | notes bottom to top: C# E F# A | steps from bass: 0 3 5 8
Chord | F# m7 | 3rd inversion | slash: F#m7/E | bass: E (minor seventh) | notes bottom to top: E F# A C# | steps from bass: 0 2 5 9

### F# 7sus4 | symbol: F#7sus4 | notes in root position: F# B C# E
Chord | F# 7sus4 | root position | slash: F#7sus4 | bass: F# (root) | notes bottom to top: F# B C# E | steps from bass: 0 5 7 10
Chord | F# 7sus4 | 1st inversion | slash: F#7sus4/B | bass: B (fourth) | notes bottom to top: B C# E F# | steps from bass: 0 2 5 7
Chord | F# 7sus4 | 2nd inversion | slash: F#7sus4/C# | bass: C# (fifth) | notes bottom to top: C# E F# B | steps from bass: 0 3 5 10
Chord | F# 7sus4 | 3rd inversion | slash: F#7sus4/E | bass: E (minor seventh) | notes bottom to top: E F# B C# | steps from bass: 0 2 7 9

### G Major | symbol: G | notes in root position: G B D
Chord | G Major | root position | slash: G | bass: G (root) | notes bottom to top: G B D | steps from bass: 0 4 7
Chord | G Major | 1st inversion | slash: G/B | bass: B (major third) | notes bottom to top: B D G | steps from bass: 0 3 8
Chord | G Major | 2nd inversion | slash: G/D | bass: D (fifth) | notes bottom to top: D G B | steps from bass: 0 5 9

### G Minor | symbol: Gm | notes in root position: G A# D
Chord | G Minor | root position | slash: Gm | bass: G (root) | notes bottom to top: G A# D | steps from bass: 0 3 7
Chord | G Minor | 1st inversion | slash: Gm/A# | bass: A# (minor third) | notes bottom to top: A# D G | steps from bass: 0 4 9
Chord | G Minor | 2nd inversion | slash: Gm/D | bass: D (fifth) | notes bottom to top: D G A# | steps from bass: 0 5 8

### G 7 | symbol: G7 | notes in root position: G B D F
Chord | G 7 | root position | slash: G7 | bass: G (root) | notes bottom to top: G B D F | steps from bass: 0 4 7 10
Chord | G 7 | 1st inversion | slash: G7/B | bass: B (major third) | notes bottom to top: B D F G | steps from bass: 0 3 6 8
Chord | G 7 | 2nd inversion | slash: G7/D | bass: D (fifth) | notes bottom to top: D F G B | steps from bass: 0 3 5 9
Chord | G 7 | 3rd inversion | slash: G7/F | bass: F (minor seventh) | notes bottom to top: F G B D | steps from bass: 0 2 6 9

### G 5 | symbol: G5 | notes in root position: G D
Chord | G 5 | root position | slash: G5 | bass: G (root) | notes bottom to top: G D | steps from bass: 0 7
Chord | G 5 | 1st inversion | slash: G5/D | bass: D (fifth) | notes bottom to top: D G | steps from bass: 0 5

### G dim | symbol: Gdim | notes in root position: G A# C#
Chord | G dim | root position | slash: Gdim | bass: G (root) | notes bottom to top: G A# C# | steps from bass: 0 3 6
Chord | G dim | 1st inversion | slash: Gdim/A# | bass: A# (minor third) | notes bottom to top: A# C# G | steps from bass: 0 3 9
Chord | G dim | 2nd inversion | slash: Gdim/C# | bass: C# (diminished fifth) | notes bottom to top: C# G A# | steps from bass: 0 6 9

### G dim7 | symbol: Gdim7 | notes in root position: G A# C# E
Chord | G dim7 | root position | slash: Gdim7 | bass: G (root) | notes bottom to top: G A# C# E | steps from bass: 0 3 6 9
Chord | G dim7 | 1st inversion | slash: Gdim7/A# | bass: A# (minor third) | notes bottom to top: A# C# E G | steps from bass: 0 3 6 9
Chord | G dim7 | 2nd inversion | slash: Gdim7/C# | bass: C# (diminished fifth) | notes bottom to top: C# E G A# | steps from bass: 0 3 6 9
Chord | G dim7 | 3rd inversion | slash: Gdim7/E | bass: E (diminished seventh) | notes bottom to top: E G A# C# | steps from bass: 0 3 6 9

### G aug | symbol: Gaug | notes in root position: G B D#
Chord | G aug | root position | slash: Gaug | bass: G (root) | notes bottom to top: G B D# | steps from bass: 0 4 8
Chord | G aug | 1st inversion | slash: Gaug/B | bass: B (major third) | notes bottom to top: B D# G | steps from bass: 0 4 8
Chord | G aug | 2nd inversion | slash: Gaug/D# | bass: D# (augmented fifth) | notes bottom to top: D# G B | steps from bass: 0 4 8

### G sus2 | symbol: Gsus2 | notes in root position: G A D
Chord | G sus2 | root position | slash: Gsus2 | bass: G (root) | notes bottom to top: G A D | steps from bass: 0 2 7
Chord | G sus2 | 1st inversion | slash: Gsus2/A | bass: A (second) | notes bottom to top: A D G | steps from bass: 0 5 10
Chord | G sus2 | 2nd inversion | slash: Gsus2/D | bass: D (fifth) | notes bottom to top: D G A | steps from bass: 0 5 7

### G sus4 | symbol: Gsus4 | notes in root position: G C D
Chord | G sus4 | root position | slash: Gsus4 | bass: G (root) | notes bottom to top: G C D | steps from bass: 0 5 7
Chord | G sus4 | 1st inversion | slash: Gsus4/C | bass: C (fourth) | notes bottom to top: C D G | steps from bass: 0 2 7
Chord | G sus4 | 2nd inversion | slash: Gsus4/D | bass: D (fifth) | notes bottom to top: D G C | steps from bass: 0 5 10

### G maj7 | symbol: Gmaj7 | notes in root position: G B D F#
Chord | G maj7 | root position | slash: Gmaj7 | bass: G (root) | notes bottom to top: G B D F# | steps from bass: 0 4 7 11
Chord | G maj7 | 1st inversion | slash: Gmaj7/B | bass: B (major third) | notes bottom to top: B D F# G | steps from bass: 0 3 7 8
Chord | G maj7 | 2nd inversion | slash: Gmaj7/D | bass: D (fifth) | notes bottom to top: D F# G B | steps from bass: 0 4 5 9
Chord | G maj7 | 3rd inversion | slash: Gmaj7/F# | bass: F# (major seventh) | notes bottom to top: F# G B D | steps from bass: 0 1 5 8

### G m7 | symbol: Gm7 | notes in root position: G A# D F
Chord | G m7 | root position | slash: Gm7 | bass: G (root) | notes bottom to top: G A# D F | steps from bass: 0 3 7 10
Chord | G m7 | 1st inversion | slash: Gm7/A# | bass: A# (minor third) | notes bottom to top: A# D F G | steps from bass: 0 4 7 9
Chord | G m7 | 2nd inversion | slash: Gm7/D | bass: D (fifth) | notes bottom to top: D F G A# | steps from bass: 0 3 5 8
Chord | G m7 | 3rd inversion | slash: Gm7/F | bass: F (minor seventh) | notes bottom to top: F G A# D | steps from bass: 0 2 5 9

### G 7sus4 | symbol: G7sus4 | notes in root position: G C D F
Chord | G 7sus4 | root position | slash: G7sus4 | bass: G (root) | notes bottom to top: G C D F | steps from bass: 0 5 7 10
Chord | G 7sus4 | 1st inversion | slash: G7sus4/C | bass: C (fourth) | notes bottom to top: C D F G | steps from bass: 0 2 5 7
Chord | G 7sus4 | 2nd inversion | slash: G7sus4/D | bass: D (fifth) | notes bottom to top: D F G C | steps from bass: 0 3 5 10
Chord | G 7sus4 | 3rd inversion | slash: G7sus4/F | bass: F (minor seventh) | notes bottom to top: F G C D | steps from bass: 0 2 7 9

### G# Major | symbol: G# | notes in root position: G# C D#
Chord | G# Major | root position | slash: G# | bass: G# (root) | notes bottom to top: G# C D# | steps from bass: 0 4 7
Chord | G# Major | 1st inversion | slash: G#/C | bass: C (major third) | notes bottom to top: C D# G# | steps from bass: 0 3 8
Chord | G# Major | 2nd inversion | slash: G#/D# | bass: D# (fifth) | notes bottom to top: D# G# C | steps from bass: 0 5 9

### G# Minor | symbol: G#m | notes in root position: G# B D#
Chord | G# Minor | root position | slash: G#m | bass: G# (root) | notes bottom to top: G# B D# | steps from bass: 0 3 7
Chord | G# Minor | 1st inversion | slash: G#m/B | bass: B (minor third) | notes bottom to top: B D# G# | steps from bass: 0 4 9
Chord | G# Minor | 2nd inversion | slash: G#m/D# | bass: D# (fifth) | notes bottom to top: D# G# B | steps from bass: 0 5 8

### G# 7 | symbol: G#7 | notes in root position: G# C D# F#
Chord | G# 7 | root position | slash: G#7 | bass: G# (root) | notes bottom to top: G# C D# F# | steps from bass: 0 4 7 10
Chord | G# 7 | 1st inversion | slash: G#7/C | bass: C (major third) | notes bottom to top: C D# F# G# | steps from bass: 0 3 6 8
Chord | G# 7 | 2nd inversion | slash: G#7/D# | bass: D# (fifth) | notes bottom to top: D# F# G# C | steps from bass: 0 3 5 9
Chord | G# 7 | 3rd inversion | slash: G#7/F# | bass: F# (minor seventh) | notes bottom to top: F# G# C D# | steps from bass: 0 2 6 9

### G# 5 | symbol: G#5 | notes in root position: G# D#
Chord | G# 5 | root position | slash: G#5 | bass: G# (root) | notes bottom to top: G# D# | steps from bass: 0 7
Chord | G# 5 | 1st inversion | slash: G#5/D# | bass: D# (fifth) | notes bottom to top: D# G# | steps from bass: 0 5

### G# dim | symbol: G#dim | notes in root position: G# B D
Chord | G# dim | root position | slash: G#dim | bass: G# (root) | notes bottom to top: G# B D | steps from bass: 0 3 6
Chord | G# dim | 1st inversion | slash: G#dim/B | bass: B (minor third) | notes bottom to top: B D G# | steps from bass: 0 3 9
Chord | G# dim | 2nd inversion | slash: G#dim/D | bass: D (diminished fifth) | notes bottom to top: D G# B | steps from bass: 0 6 9

### G# dim7 | symbol: G#dim7 | notes in root position: G# B D F
Chord | G# dim7 | root position | slash: G#dim7 | bass: G# (root) | notes bottom to top: G# B D F | steps from bass: 0 3 6 9
Chord | G# dim7 | 1st inversion | slash: G#dim7/B | bass: B (minor third) | notes bottom to top: B D F G# | steps from bass: 0 3 6 9
Chord | G# dim7 | 2nd inversion | slash: G#dim7/D | bass: D (diminished fifth) | notes bottom to top: D F G# B | steps from bass: 0 3 6 9
Chord | G# dim7 | 3rd inversion | slash: G#dim7/F | bass: F (diminished seventh) | notes bottom to top: F G# B D | steps from bass: 0 3 6 9

### G# aug | symbol: G#aug | notes in root position: G# C E
Chord | G# aug | root position | slash: G#aug | bass: G# (root) | notes bottom to top: G# C E | steps from bass: 0 4 8
Chord | G# aug | 1st inversion | slash: G#aug/C | bass: C (major third) | notes bottom to top: C E G# | steps from bass: 0 4 8
Chord | G# aug | 2nd inversion | slash: G#aug/E | bass: E (augmented fifth) | notes bottom to top: E G# C | steps from bass: 0 4 8

### G# sus2 | symbol: G#sus2 | notes in root position: G# A# D#
Chord | G# sus2 | root position | slash: G#sus2 | bass: G# (root) | notes bottom to top: G# A# D# | steps from bass: 0 2 7
Chord | G# sus2 | 1st inversion | slash: G#sus2/A# | bass: A# (second) | notes bottom to top: A# D# G# | steps from bass: 0 5 10
Chord | G# sus2 | 2nd inversion | slash: G#sus2/D# | bass: D# (fifth) | notes bottom to top: D# G# A# | steps from bass: 0 5 7

### G# sus4 | symbol: G#sus4 | notes in root position: G# C# D#
Chord | G# sus4 | root position | slash: G#sus4 | bass: G# (root) | notes bottom to top: G# C# D# | steps from bass: 0 5 7
Chord | G# sus4 | 1st inversion | slash: G#sus4/C# | bass: C# (fourth) | notes bottom to top: C# D# G# | steps from bass: 0 2 7
Chord | G# sus4 | 2nd inversion | slash: G#sus4/D# | bass: D# (fifth) | notes bottom to top: D# G# C# | steps from bass: 0 5 10

### G# maj7 | symbol: G#maj7 | notes in root position: G# C D# G
Chord | G# maj7 | root position | slash: G#maj7 | bass: G# (root) | notes bottom to top: G# C D# G | steps from bass: 0 4 7 11
Chord | G# maj7 | 1st inversion | slash: G#maj7/C | bass: C (major third) | notes bottom to top: C D# G G# | steps from bass: 0 3 7 8
Chord | G# maj7 | 2nd inversion | slash: G#maj7/D# | bass: D# (fifth) | notes bottom to top: D# G G# C | steps from bass: 0 4 5 9
Chord | G# maj7 | 3rd inversion | slash: G#maj7/G | bass: G (major seventh) | notes bottom to top: G G# C D# | steps from bass: 0 1 5 8

### G# m7 | symbol: G#m7 | notes in root position: G# B D# F#
Chord | G# m7 | root position | slash: G#m7 | bass: G# (root) | notes bottom to top: G# B D# F# | steps from bass: 0 3 7 10
Chord | G# m7 | 1st inversion | slash: G#m7/B | bass: B (minor third) | notes bottom to top: B D# F# G# | steps from bass: 0 4 7 9
Chord | G# m7 | 2nd inversion | slash: G#m7/D# | bass: D# (fifth) | notes bottom to top: D# F# G# B | steps from bass: 0 3 5 8
Chord | G# m7 | 3rd inversion | slash: G#m7/F# | bass: F# (minor seventh) | notes bottom to top: F# G# B D# | steps from bass: 0 2 5 9

### G# 7sus4 | symbol: G#7sus4 | notes in root position: G# C# D# F#
Chord | G# 7sus4 | root position | slash: G#7sus4 | bass: G# (root) | notes bottom to top: G# C# D# F# | steps from bass: 0 5 7 10
Chord | G# 7sus4 | 1st inversion | slash: G#7sus4/C# | bass: C# (fourth) | notes bottom to top: C# D# F# G# | steps from bass: 0 2 5 7
Chord | G# 7sus4 | 2nd inversion | slash: G#7sus4/D# | bass: D# (fifth) | notes bottom to top: D# F# G# C# | steps from bass: 0 3 5 10
Chord | G# 7sus4 | 3rd inversion | slash: G#7sus4/F# | bass: F# (minor seventh) | notes bottom to top: F# G# C# D# | steps from bass: 0 2 7 9
