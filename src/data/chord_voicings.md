# Guitar and ukulele chord voicings (reference for an LLM)

Coverage: 12 roots x 12 chord types = 144 chords. Each chord lists up to 3 guitar voicings and up to 3 ukulele voicings.

## How to read a voicing line
Format: `Instrument | Chord | voicing N | open | frets`
or:     `Instrument | Chord | voicing N | movable | root on string S | barre at fret F (or no barre) | frets`

- Frets are written from the thickest/lowest string to the thinnest, separated by spaces. `x` = muted (do not play), `0` = open string, a number = press at that fret.
- Guitar has 6 values: strings 6,5,4,3,2,1 = E A D G B E (standard tuning).
- Ukulele has 4 values: strings 4,3,2,1 = G C E A (re-entrant: the 4th string G is higher than the 3rd string C).
- `open` = open-position voicing using open strings. Only listed where a conventional one exists.
- `movable` = no open strings; the same pattern slides up or down the neck to change the root. `root on string S` says which string carries the root note. `barre at fret F` means the index finger lies across fret F.
- Voicings are suggestions. Every voicing was verified by program to contain exactly the chord's notes (guitar voicings have the root as lowest note; guitar 7/maj7/m7/7sus4 voicings may omit the fifth). Fingerings were not checked by ear or by a teacher.
- Notes use sharps only: A# = B flat, C# = D flat, D# = E flat, F# = G flat, G# = A flat.
- Ukulele A 5, A# 5, B 5 and G# 5 have no four-string shape within a 4-fret span. Their voicings are `generated` from the chord formula: two adjacent strings, the others muted. The app generates these (and all bass positions) in code, so no data is needed for them.
- Fixes applied: Ukulele A sus2, Ukulele D 7, Ukulele D m7 and Guitar B dim each had a shape wrongly labelled `open` that duplicated a movable shape. The duplicate was removed and the voicings renumbered.

## Chord types (steps = semitones above the root)
- Major: 0 4 7 | Minor: 0 3 7 | 7: 0 4 7 10 | 5 (power chord): 0 7 | dim: 0 3 6 | dim7: 0 3 6 9
- aug: 0 4 8 | sus2: 0 2 7 | sus4: 0 5 7 | maj7: 0 4 7 11 | m7: 0 3 7 10 | 7sus4: 0 5 7 10

## Voicings

### A Major | notes: A C# E | steps: 0 4 7
Guitar | A Major | voicing 1 | open | x 0 2 2 2 0
Guitar | A Major | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 7 7 6 5 5
Guitar | A Major | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 14 14 14 12
Ukulele | A Major | voicing 1 | open | 2 1 0 0
Ukulele | A Major | voicing 2 | movable | root on string 3 | no barre | 9 9 9 7
Ukulele | A Major | voicing 3 | movable | root on string 2 | barre at fret 4 | 6 4 5 4

### A Minor | notes: A C E | steps: 0 3 7
Guitar | A Minor | voicing 1 | open | x 0 2 2 1 0
Guitar | A Minor | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 7 7 5 5 5
Guitar | A Minor | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 14 14 13 12
Ukulele | A Minor | voicing 1 | open | 2 0 0 0
Ukulele | A Minor | voicing 2 | movable | root on string 2 | no barre | 5 4 5 3
Ukulele | A Minor | voicing 3 | movable | root on string 3 | no barre | 9 9 8 7

### A 7 | notes: A C# E G | steps: 0 4 7 10
Guitar | A 7 | voicing 1 | open | x 0 2 0 2 0
Guitar | A 7 | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 7 5 6 5 5
Guitar | A 7 | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 14 12 14 12
Ukulele | A 7 | voicing 1 | open | 0 1 0 0
Ukulele | A 7 | voicing 2 | movable | root on string 3 | barre at fret 9 | 9 9 9 10
Ukulele | A 7 | voicing 3 | movable | root on string 4 | no barre | 2 4 3 4

### A 5 | notes: A E | steps: 0 7
Guitar | A 5 | voicing 1 | open | x 0 2 2 x x
Guitar | A 5 | voicing 2 | movable | root on string 6 | no barre | 5 7 7 x x x
Guitar | A 5 | voicing 3 | movable | root on string 5 | no barre | x 12 14 14 x x
Ukulele | A 5 | voicing 1 | generated | two adjacent strings, rest muted | x x 0 0

### A dim | notes: A C D# | steps: 0 3 6
Guitar | A dim | voicing 1 | movable | root on string 6 | barre at fret 5 | 5 6 7 5 x x
Guitar | A dim | voicing 2 | movable | root on string 5 | no barre | x 12 13 14 13 x
Ukulele | A dim | voicing 1 | movable | root on string 2 | barre at fret 3 | 5 3 5 3
Ukulele | A dim | voicing 2 | movable | root on string 4, 2 | no barre | 2 3 5 3

### A dim7 | notes: A C D# F# | steps: 0 3 6 9
Guitar | A dim7 | voicing 1 | movable | root on string 6 | barre at fret 5 | 5 6 7 5 7 5
Guitar | A dim7 | voicing 2 | movable | root on string 5 | barre at fret 10 | x 12 10 11 10 11
Ukulele | A dim7 | voicing 1 | movable | root on string 4 | barre at fret 2 | 2 3 2 3

### A aug | notes: A C# F | steps: 0 4 8
Guitar | A aug | voicing 1 | movable | root on string 6 | barre at fret 2 | 5 4 3 2 2 x
Guitar | A aug | voicing 2 | movable | root on string 5 | barre at fret 10 | x 12 11 10 10 13
Ukulele | A aug | voicing 1 | movable | root on string 2 | no barre | 6 5 5 4
Ukulele | A aug | voicing 2 | movable | root on string 4 | barre at fret 1 | 2 1 1 4

### A sus2 | notes: A B E | steps: 0 2 7
Guitar | A sus2 | voicing 1 | open | x 0 2 2 0 0
Guitar | A sus2 | voicing 2 | movable | root on string 6 | barre at fret 2 | 5 2 2 2 5 5
Guitar | A sus2 | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 14 14 12 12
Ukulele | A sus2 | voicing 1 | movable | root on string 3 | barre at fret 7 | 9 9 7 7
Ukulele | A sus2 | voicing 2 | movable | root on string 4, 2 | barre at fret 2 | 2 4 5 2

### A sus4 | notes: A D E | steps: 0 5 7
Guitar | A sus4 | voicing 1 | open | x 0 2 2 3 0
Guitar | A sus4 | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 7 7 7 5 5
Guitar | A sus4 | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 12 14 15 12
Ukulele | A sus4 | voicing 1 | open | 2 2 0 0
Ukulele | A sus4 | voicing 2 | movable | root on string 3 | barre at fret 7 | 7 9 10 7
Ukulele | A sus4 | voicing 3 | movable | root on string 4, 2 | no barre | 2 4 5 5

### A maj7 | notes: A C# E G# | steps: 0 4 7 11
Guitar | A maj7 | voicing 1 | open | x 0 2 1 2 0
Guitar | A maj7 | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 7 6 6 5 5
Guitar | A maj7 | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 14 13 14 12
Ukulele | A maj7 | voicing 1 | movable | root on string 4 | no barre | 2 4 4 4
Ukulele | A maj7 | voicing 2 | movable | root on string 4 | no barre | 2 1 4 4

### A m7 | notes: A C E G | steps: 0 3 7 10
Guitar | A m7 | voicing 1 | open | x 0 2 0 1 0
Guitar | A m7 | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 7 5 5 5 5
Guitar | A m7 | voicing 3 | movable | root on string 5 | barre at fret 12 | x 12 14 12 13 12
Ukulele | A m7 | voicing 1 | open | 0 0 0 0
Ukulele | A m7 | voicing 2 | movable | root on string 2 | barre at fret 5 | 5 7 5 7
Ukulele | A m7 | voicing 3 | movable | root on string 4 | no barre | 2 4 3 3

### A 7sus4 | notes: A D E G | steps: 0 5 7 10
Guitar | A 7sus4 | voicing 1 | open | x 0 2 0 3 0
Guitar | A 7sus4 | voicing 2 | movable | root on string 6 | barre at fret 5 | 5 5 5 7 5 5
Guitar | A 7sus4 | voicing 3 | movable | root on string 5 | barre at fret 10 | x 12 12 12 10 10
Ukulele | A 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 9 | 9 9 10 10
Ukulele | A 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 5 | 7 7 5 5

### A# Major | notes: A# D F | steps: 0 4 7
Guitar | A# Major | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 8 8 7 6 6
Guitar | A# Major | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 3 3 3 1
Ukulele | A# Major | voicing 1 | movable | root on string 3 | no barre | 10 10 10 8
Ukulele | A# Major | voicing 2 | movable | root on string 4, 1 | barre at fret 1 | 3 2 1 1

### A# Minor | notes: A# C# F | steps: 0 3 7
Guitar | A# Minor | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 8 8 6 6 6
Guitar | A# Minor | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 3 3 2 1
Ukulele | A# Minor | voicing 1 | movable | root on string 4, 1 | barre at fret 1 | 3 1 1 1
Ukulele | A# Minor | voicing 2 | movable | root on string 2 | no barre | 6 5 6 4

### A# 7 | notes: A# D F G# | steps: 0 4 7 10
Guitar | A# 7 | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 8 6 7 6 6
Guitar | A# 7 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 3 1 3 1
Ukulele | A# 7 | voicing 1 | movable | root on string 1 | barre at fret 1 | 1 2 1 1
Ukulele | A# 7 | voicing 2 | movable | root on string 4 | no barre | 3 5 4 5

### A# 5 | notes: A# F | steps: 0 7
Guitar | A# 5 | voicing 1 | movable | root on string 6 | no barre | 6 8 8 x x x
Guitar | A# 5 | voicing 2 | movable | root on string 5 | no barre | x 1 3 3 x x
Ukulele | A# 5 | voicing 1 | generated | two adjacent strings, rest muted | x x 1 1

### A# dim | notes: A# C# E | steps: 0 3 6
Guitar | A# dim | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 7 8 6 x x
Guitar | A# dim | voicing 2 | movable | root on string 5 | no barre | x 1 2 3 2 x
Ukulele | A# dim | voicing 1 | movable | root on string 2 | barre at fret 4 | 6 4 6 4
Ukulele | A# dim | voicing 2 | movable | root on string 4, 2 | no barre | 3 4 6 4

### A# dim7 | notes: A# C# E G | steps: 0 3 6 9
Guitar | A# dim7 | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 7 8 6 8 6
Ukulele | A# dim7 | voicing 1 | movable | root on string 4 | barre at fret 3 | 3 4 3 4

### A# aug | notes: A# D F# | steps: 0 4 8
Guitar | A# aug | voicing 1 | movable | root on string 6 | barre at fret 3 | 6 5 4 3 3 x
Guitar | A# aug | voicing 2 | movable | root on string 5 | no barre | x 1 4 3 3 x
Ukulele | A# aug | voicing 1 | movable | root on string 4, 1 | no barre | 3 2 2 1
Ukulele | A# aug | voicing 2 | movable | root on string 4 | barre at fret 2 | 3 2 2 5

### A# sus2 | notes: A# C F | steps: 0 2 7
Guitar | A# sus2 | voicing 1 | movable | root on string 6 | barre at fret 3 | 6 3 3 3 6 6
Guitar | A# sus2 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 3 3 1 1
Ukulele | A# sus2 | voicing 1 | movable | root on string 3 | barre at fret 8 | 10 10 8 8
Ukulele | A# sus2 | voicing 2 | movable | root on string 4, 2 | barre at fret 3 | 3 5 6 3

### A# sus4 | notes: A# D# F | steps: 0 5 7
Guitar | A# sus4 | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 8 8 8 6 6
Guitar | A# sus4 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 1 3 4 1
Ukulele | A# sus4 | voicing 1 | movable | root on string 4, 1 | barre at fret 1 | 3 3 1 1
Ukulele | A# sus4 | voicing 2 | movable | root on string 4, 2 | no barre | 3 5 6 6

### A# maj7 | notes: A# D F A | steps: 0 4 7 11
Guitar | A# maj7 | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 8 7 7 6 6
Guitar | A# maj7 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 3 2 3 1
Ukulele | A# maj7 | voicing 1 | movable | root on string 1 | barre at fret 1 | 2 2 1 1
Ukulele | A# maj7 | voicing 2 | movable | root on string 4 | no barre | 3 5 5 5

### A# m7 | notes: A# C# F G# | steps: 0 3 7 10
Guitar | A# m7 | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 8 6 6 6 6
Guitar | A# m7 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 3 1 2 1
Ukulele | A# m7 | voicing 1 | movable | root on string 1 | barre at fret 1 | 1 1 1 1
Ukulele | A# m7 | voicing 2 | movable | root on string 2 | barre at fret 6 | 6 8 6 8

### A# 7sus4 | notes: A# D# F G# | steps: 0 5 7 10
Guitar | A# 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 6 | 6 6 6 8 6 6
Guitar | A# 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 1 1 1 4 1
Ukulele | A# 7sus4 | voicing 1 | movable | root on string 1 | barre at fret 1 | 1 3 1 1
Ukulele | A# 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 6 | 8 8 6 6

### B Major | notes: B D# F# | steps: 0 4 7
Guitar | B Major | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 9 9 8 7 7
Guitar | B Major | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 4 4 4 2
Ukulele | B Major | voicing 1 | movable | root on string 4, 1 | barre at fret 2 | 4 3 2 2
Ukulele | B Major | voicing 2 | movable | root on string 2 | barre at fret 6 | 8 6 7 6

### B Minor | notes: B D F# | steps: 0 3 7
Guitar | B Minor | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 9 9 7 7 7
Guitar | B Minor | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 4 4 3 2
Ukulele | B Minor | voicing 1 | movable | root on string 4, 1 | barre at fret 2 | 4 2 2 2
Ukulele | B Minor | voicing 2 | movable | root on string 2 | no barre | 7 6 7 5

### B 7 | notes: B D# F# A | steps: 0 4 7 10
Guitar | B 7 | voicing 1 | open | x 2 1 2 0 2
Guitar | B 7 | voicing 2 | movable | root on string 6 | barre at fret 7 | 7 9 7 8 7 7
Guitar | B 7 | voicing 3 | movable | root on string 5 | barre at fret 2 | x 2 4 2 4 2
Ukulele | B 7 | voicing 1 | movable | root on string 1 | barre at fret 2 | 2 3 2 2
Ukulele | B 7 | voicing 2 | movable | root on string 4 | no barre | 4 6 5 6

### B 5 | notes: B F# | steps: 0 7
Guitar | B 5 | voicing 1 | movable | root on string 6 | no barre | 7 9 9 x x x
Guitar | B 5 | voicing 2 | movable | root on string 5 | no barre | x 2 4 4 x x
Ukulele | B 5 | voicing 1 | generated | two adjacent strings, rest muted | x x 2 2

### B dim | notes: B D F | steps: 0 3 6
Guitar | B dim | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 8 9 7 x x
Guitar | B dim | voicing 2 | movable | root on string 5 | no barre | x 2 3 4 3 x
Ukulele | B dim | voicing 1 | movable | root on string 2 | barre at fret 5 | 7 5 7 5
Ukulele | B dim | voicing 2 | movable | root on string 4, 1 | no barre | 4 2 1 2

### B dim7 | notes: B D F G# | steps: 0 3 6 9
Guitar | B dim7 | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 8 9 7 9 7
Guitar | B dim7 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 2 3 1 3 1
Ukulele | B dim7 | voicing 1 | movable | root on string 1 | barre at fret 1 | 1 2 1 2

### B aug | notes: B D# G | steps: 0 4 8
Guitar | B aug | voicing 1 | movable | root on string 6 | barre at fret 4 | 7 6 5 4 4 x
Guitar | B aug | voicing 2 | movable | root on string 5 | no barre | x 2 5 4 4 x
Ukulele | B aug | voicing 1 | movable | root on string 4, 1 | no barre | 4 3 3 2
Ukulele | B aug | voicing 2 | movable | root on string 4 | barre at fret 3 | 4 3 3 6

### B sus2 | notes: B C# F# | steps: 0 2 7
Guitar | B sus2 | voicing 1 | movable | root on string 6 | barre at fret 4 | 7 4 4 4 7 7
Guitar | B sus2 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 4 4 2 2
Ukulele | B sus2 | voicing 1 | movable | root on string 4, 2 | barre at fret 4 | 4 6 7 4
Ukulele | B sus2 | voicing 2 | movable | root on string 2 | barre at fret 6 | 6 6 7 9

### B sus4 | notes: B E F# | steps: 0 5 7
Guitar | B sus4 | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 9 9 9 7 7
Guitar | B sus4 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 2 4 5 2
Ukulele | B sus4 | voicing 1 | movable | root on string 4, 1 | barre at fret 2 | 4 4 2 2
Ukulele | B sus4 | voicing 2 | movable | root on string 4, 2 | no barre | 4 6 7 7

### B maj7 | notes: B D# F# A# | steps: 0 4 7 11
Guitar | B maj7 | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 9 8 8 7 7
Guitar | B maj7 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 4 3 4 2
Ukulele | B maj7 | voicing 1 | movable | root on string 1 | barre at fret 2 | 3 3 2 2
Ukulele | B maj7 | voicing 2 | movable | root on string 4 | no barre | 4 6 6 6

### B m7 | notes: B D F# A | steps: 0 3 7 10
Guitar | B m7 | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 9 7 7 7 7
Guitar | B m7 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 4 2 3 2
Ukulele | B m7 | voicing 1 | movable | root on string 1 | barre at fret 2 | 2 2 2 2
Ukulele | B m7 | voicing 2 | movable | root on string 2 | barre at fret 7 | 7 9 7 9

### B 7sus4 | notes: B E F# A | steps: 0 5 7 10
Guitar | B 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 7 | 7 7 7 9 7 7
Guitar | B 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 2 2 2 5 2
Ukulele | B 7sus4 | voicing 1 | movable | root on string 1 | barre at fret 2 | 2 4 2 2
Ukulele | B 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 7 | 9 9 7 7

### C Major | notes: C E G | steps: 0 4 7
Guitar | C Major | voicing 1 | open | x 3 2 0 1 0
Guitar | C Major | voicing 2 | movable | root on string 6 | barre at fret 8 | 8 10 10 9 8 8
Guitar | C Major | voicing 3 | movable | root on string 5 | barre at fret 3 | x 3 5 5 5 3
Ukulele | C Major | voicing 1 | open | 0 0 0 3
Ukulele | C Major | voicing 2 | movable | root on string 4, 1 | barre at fret 3 | 5 4 3 3
Ukulele | C Major | voicing 3 | movable | root on string 2 | barre at fret 7 | 9 7 8 7

### C Minor | notes: C D# G | steps: 0 3 7
Guitar | C Minor | voicing 1 | movable | root on string 6 | barre at fret 8 | 8 10 10 8 8 8
Guitar | C Minor | voicing 2 | movable | root on string 5 | barre at fret 3 | x 3 5 5 4 3
Ukulele | C Minor | voicing 1 | open | 0 3 3 3
Ukulele | C Minor | voicing 2 | movable | root on string 4, 1 | barre at fret 3 | 5 3 3 3
Ukulele | C Minor | voicing 3 | movable | root on string 2 | no barre | 8 7 8 6

### C 7 | notes: C E G A# | steps: 0 4 7 10
Guitar | C 7 | voicing 1 | open | x 3 2 3 1 0
Guitar | C 7 | voicing 2 | movable | root on string 6 | barre at fret 8 | 8 10 8 9 8 8
Guitar | C 7 | voicing 3 | movable | root on string 5 | barre at fret 3 | x 3 5 3 5 3
Ukulele | C 7 | voicing 1 | open | 0 0 0 1
Ukulele | C 7 | voicing 2 | movable | root on string 1 | barre at fret 3 | 3 4 3 3
Ukulele | C 7 | voicing 3 | movable | root on string 4 | no barre | 5 7 6 7

### C 5 | notes: C G | steps: 0 7
Guitar | C 5 | voicing 1 | movable | root on string 6 | no barre | 8 10 10 x x x
Guitar | C 5 | voicing 2 | movable | root on string 5 | no barre | x 3 5 5 x x
Ukulele | C 5 | voicing 1 | open | 0 0 3 3

### C dim | notes: C D# F# | steps: 0 3 6
Guitar | C dim | voicing 1 | movable | root on string 6 | barre at fret 8 | 8 9 10 8 x x
Guitar | C dim | voicing 2 | movable | root on string 5 | no barre | x 3 4 5 4 x
Ukulele | C dim | voicing 1 | movable | root on string 2 | barre at fret 6 | 8 6 8 6
Ukulele | C dim | voicing 2 | movable | root on string 4, 1 | no barre | 5 3 2 3

### C dim7 | notes: C D# F# A | steps: 0 3 6 9
Guitar | C dim7 | voicing 1 | movable | root on string 6 | barre at fret 8 | 8 9 10 8 10 8
Guitar | C dim7 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 3 1 2 1 2
Ukulele | C dim7 | voicing 1 | movable | root on string 1 | barre at fret 2 | 2 3 2 3

### C aug | notes: C E G# | steps: 0 4 8
Guitar | C aug | voicing 1 | movable | root on string 6 | barre at fret 5 | 8 7 6 5 5 x
Guitar | C aug | voicing 2 | movable | root on string 5 | barre at fret 1 | x 3 2 1 1 4
Ukulele | C aug | voicing 1 | movable | root on string 4, 1 | no barre | 5 4 4 3
Ukulele | C aug | voicing 2 | movable | root on string 4 | barre at fret 4 | 5 4 4 7

### C sus2 | notes: C D G | steps: 0 2 7
Guitar | C sus2 | voicing 1 | movable | root on string 6 | barre at fret 5 | 8 5 5 5 8 8
Guitar | C sus2 | voicing 2 | movable | root on string 5 | barre at fret 3 | x 3 5 5 3 3
Ukulele | C sus2 | voicing 1 | open | 0 2 3 3
Ukulele | C sus2 | voicing 2 | movable | root on string 4, 2 | barre at fret 5 | 5 7 8 5
Ukulele | C sus2 | voicing 3 | movable | root on string 2 | barre at fret 7 | 7 7 8 10

### C sus4 | notes: C F G | steps: 0 5 7
Guitar | C sus4 | voicing 1 | movable | root on string 6 | barre at fret 8 | 8 10 10 10 8 8
Guitar | C sus4 | voicing 2 | movable | root on string 5 | barre at fret 3 | x 3 3 5 6 3
Ukulele | C sus4 | voicing 1 | open | 0 0 1 3
Ukulele | C sus4 | voicing 2 | movable | root on string 4, 1 | barre at fret 3 | 5 5 3 3
Ukulele | C sus4 | voicing 3 | movable | root on string 4, 2 | no barre | 5 7 8 8

### C maj7 | notes: C E G B | steps: 0 4 7 11
Guitar | C maj7 | voicing 1 | open | x 3 2 0 0 0
Guitar | C maj7 | voicing 2 | movable | root on string 6 | barre at fret 8 | 8 10 9 9 8 8
Guitar | C maj7 | voicing 3 | movable | root on string 5 | barre at fret 3 | x 3 5 4 5 3
Ukulele | C maj7 | voicing 1 | open | 0 0 0 2
Ukulele | C maj7 | voicing 2 | movable | root on string 1 | barre at fret 3 | 4 4 3 3
Ukulele | C maj7 | voicing 3 | movable | root on string 4 | no barre | 5 7 7 7

### C m7 | notes: C D# G A# | steps: 0 3 7 10
Guitar | C m7 | voicing 1 | movable | root on string 6 | barre at fret 8 | 8 10 8 8 8 8
Guitar | C m7 | voicing 2 | movable | root on string 5 | barre at fret 3 | x 3 5 3 4 3
Ukulele | C m7 | voicing 1 | movable | root on string 1 | barre at fret 3 | 3 3 3 3
Ukulele | C m7 | voicing 2 | movable | root on string 2 | barre at fret 8 | 8 10 8 10

### C 7sus4 | notes: C F G A# | steps: 0 5 7 10
Guitar | C 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 8 | 8 8 8 10 8 8
Guitar | C 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 1 | x 3 3 3 1 1
Ukulele | C 7sus4 | voicing 1 | movable | root on string 1 | barre at fret 3 | 3 5 3 3
Ukulele | C 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 8 | 10 10 8 8

### C# Major | notes: C# F G# | steps: 0 4 7
Guitar | C# Major | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 11 11 10 9 9
Guitar | C# Major | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 6 6 6 4
Ukulele | C# Major | voicing 1 | movable | root on string 4, 1 | barre at fret 4 | 6 5 4 4
Ukulele | C# Major | voicing 2 | movable | root on string 2 | barre at fret 8 | 10 8 9 8

### C# Minor | notes: C# E G# | steps: 0 3 7
Guitar | C# Minor | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 11 11 9 9 9
Guitar | C# Minor | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 6 6 5 4
Ukulele | C# Minor | voicing 1 | movable | root on string 4, 1 | barre at fret 4 | 6 4 4 4
Ukulele | C# Minor | voicing 2 | movable | root on string 2 | no barre | 9 8 9 7

### C# 7 | notes: C# F G# B | steps: 0 4 7 10
Guitar | C# 7 | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 11 9 10 9 9
Guitar | C# 7 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 6 4 6 4
Ukulele | C# 7 | voicing 1 | movable | root on string 3 | barre at fret 1 | 1 1 1 2
Ukulele | C# 7 | voicing 2 | movable | root on string 1 | barre at fret 4 | 4 5 4 4

### C# 5 | notes: C# G# | steps: 0 7
Guitar | C# 5 | voicing 1 | movable | root on string 6 | no barre | 9 11 11 x x x
Guitar | C# 5 | voicing 2 | movable | root on string 5 | no barre | x 4 6 6 x x
Ukulele | C# 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 1 | 1 1 4 4

### C# dim | notes: C# E G | steps: 0 3 6
Guitar | C# dim | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 10 11 9 x x
Guitar | C# dim | voicing 2 | movable | root on string 5 | no barre | x 4 5 6 5 x
Ukulele | C# dim | voicing 1 | movable | root on string 2 | barre at fret 7 | 9 7 9 7
Ukulele | C# dim | voicing 2 | movable | root on string 4, 1 | no barre | 6 4 3 4

### C# dim7 | notes: C# E G A# | steps: 0 3 6 9
Guitar | C# dim7 | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 10 11 9 11 9
Guitar | C# dim7 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 4 2 3 2 3
Ukulele | C# dim7 | voicing 1 | movable | root on string 1 | barre at fret 3 | 3 4 3 4

### C# aug | notes: C# F A | steps: 0 4 8
Guitar | C# aug | voicing 1 | movable | root on string 6 | barre at fret 6 | 9 8 7 6 6 x
Guitar | C# aug | voicing 2 | movable | root on string 5 | barre at fret 2 | x 4 3 2 2 5
Ukulele | C# aug | voicing 1 | movable | root on string 4, 1 | no barre | 6 5 5 4
Ukulele | C# aug | voicing 2 | movable | root on string 3, 1 | barre at fret 1 | 2 1 1 4

### C# sus2 | notes: C# D# G# | steps: 0 2 7
Guitar | C# sus2 | voicing 1 | movable | root on string 6 | barre at fret 6 | 9 6 6 6 9 9
Guitar | C# sus2 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 6 6 4 4
Ukulele | C# sus2 | voicing 1 | movable | root on string 4, 2 | barre at fret 6 | 6 8 9 6
Ukulele | C# sus2 | voicing 2 | movable | root on string 1 | no barre | 1 3 4 4

### C# sus4 | notes: C# F# G# | steps: 0 5 7
Guitar | C# sus4 | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 11 11 11 9 9
Guitar | C# sus4 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 4 6 7 4
Ukulele | C# sus4 | voicing 1 | movable | root on string 4, 1 | barre at fret 4 | 6 6 4 4
Ukulele | C# sus4 | voicing 2 | movable | root on string 3, 1 | barre at fret 1 | 1 1 2 4

### C# maj7 | notes: C# F G# C | steps: 0 4 7 11
Guitar | C# maj7 | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 11 10 10 9 9
Guitar | C# maj7 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 6 5 6 4
Ukulele | C# maj7 | voicing 1 | movable | root on string 1 | barre at fret 4 | 5 5 4 4
Ukulele | C# maj7 | voicing 2 | movable | root on string 3 | barre at fret 1 | 1 1 1 3

### C# m7 | notes: C# E G# B | steps: 0 3 7 10
Guitar | C# m7 | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 11 9 9 9 9
Guitar | C# m7 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 4 6 4 5 4
Ukulele | C# m7 | voicing 1 | movable | root on string 1 | barre at fret 4 | 4 4 4 4
Ukulele | C# m7 | voicing 2 | movable | root on string 4 | no barre | 6 8 7 7

### C# 7sus4 | notes: C# F# G# B | steps: 0 5 7 10
Guitar | C# 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 9 | 9 9 9 11 9 9
Guitar | C# 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 2 | x 4 4 4 2 2
Ukulele | C# 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 1 | 1 1 2 2
Ukulele | C# 7sus4 | voicing 2 | movable | root on string 1 | barre at fret 4 | 4 6 4 4

### D Major | notes: D F# A | steps: 0 4 7
Guitar | D Major | voicing 1 | open | x x 0 2 3 2
Guitar | D Major | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 12 12 11 10 10
Guitar | D Major | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 7 7 7 5
Ukulele | D Major | voicing 1 | open | 2 2 2 0
Ukulele | D Major | voicing 2 | movable | root on string 4, 1 | barre at fret 5 | 7 6 5 5
Ukulele | D Major | voicing 3 | movable | root on string 3, 1 | barre at fret 2 | 2 2 2 5

### D Minor | notes: D F A | steps: 0 3 7
Guitar | D Minor | voicing 1 | open | x x 0 2 3 1
Guitar | D Minor | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 12 12 10 10 10
Guitar | D Minor | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 7 7 6 5
Ukulele | D Minor | voicing 1 | open | 2 2 1 0
Ukulele | D Minor | voicing 2 | movable | root on string 4, 1 | barre at fret 5 | 7 5 5 5
Ukulele | D Minor | voicing 3 | movable | root on string 2 | no barre | 10 9 10 8

### D 7 | notes: D F# A C | steps: 0 4 7 10
Guitar | D 7 | voicing 1 | open | x x 0 2 1 2
Guitar | D 7 | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 12 10 11 10 10
Guitar | D 7 | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 7 5 7 5
Ukulele | D 7 | voicing 1 | movable | root on string 3 | barre at fret 2 | 2 2 2 3
Ukulele | D 7 | voicing 2 | movable | root on string 1 | barre at fret 5 | 5 6 5 5

### D 5 | notes: D A | steps: 0 7
Guitar | D 5 | voicing 1 | open | x x 0 2 3 x
Guitar | D 5 | voicing 2 | movable | root on string 6 | no barre | 10 12 12 x x x
Guitar | D 5 | voicing 3 | movable | root on string 5 | no barre | x 5 7 7 x x
Ukulele | D 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 2 | 2 2 5 5

### D dim | notes: D F G# | steps: 0 3 6
Guitar | D dim | voicing 1 | open | x x 0 1 3 1
Guitar | D dim | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 11 12 10 x x
Guitar | D dim | voicing 3 | movable | root on string 5 | no barre | x 5 6 7 6 x
Ukulele | D dim | voicing 1 | movable | root on string 2 | barre at fret 8 | 10 8 10 8
Ukulele | D dim | voicing 2 | movable | root on string 4, 1 | no barre | 7 5 4 5

### D dim7 | notes: D F G# B | steps: 0 3 6 9
Guitar | D dim7 | voicing 1 | movable | root on string 6 | barre at fret 10 | 10 11 12 10 12 10
Guitar | D dim7 | voicing 2 | movable | root on string 5 | barre at fret 3 | x 5 3 4 3 4
Ukulele | D dim7 | voicing 1 | movable | root on string 3 | barre at fret 1 | 1 2 1 2

### D aug | notes: D F# A# | steps: 0 4 8
Guitar | D aug | voicing 1 | movable | root on string 6 | barre at fret 7 | 10 9 8 7 7 x
Guitar | D aug | voicing 2 | movable | root on string 5 | barre at fret 3 | x 5 4 3 3 6
Ukulele | D aug | voicing 1 | movable | root on string 3 | no barre | 3 2 2 1
Ukulele | D aug | voicing 2 | movable | root on string 3, 1 | barre at fret 2 | 3 2 2 5

### D sus2 | notes: D E A | steps: 0 2 7
Guitar | D sus2 | voicing 1 | open | x x 0 2 3 0
Guitar | D sus2 | voicing 2 | movable | root on string 6 | barre at fret 7 | 10 7 7 7 10 10
Guitar | D sus2 | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 7 7 5 5
Ukulele | D sus2 | voicing 1 | movable | root on string 4, 2 | barre at fret 7 | 7 9 10 7
Ukulele | D sus2 | voicing 2 | movable | root on string 1 | no barre | 2 4 5 5

### D sus4 | notes: D G A | steps: 0 5 7
Guitar | D sus4 | voicing 1 | open | x x 0 2 3 3
Guitar | D sus4 | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 12 12 12 10 10
Guitar | D sus4 | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 5 7 8 5
Ukulele | D sus4 | voicing 1 | open | 0 2 3 0
Ukulele | D sus4 | voicing 2 | movable | root on string 4, 1 | barre at fret 5 | 7 7 5 5
Ukulele | D sus4 | voicing 3 | movable | root on string 3, 1 | barre at fret 2 | 2 2 3 5

### D maj7 | notes: D F# A C# | steps: 0 4 7 11
Guitar | D maj7 | voicing 1 | open | x x 0 2 2 2
Guitar | D maj7 | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 12 11 11 10 10
Guitar | D maj7 | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 7 6 7 5
Ukulele | D maj7 | voicing 1 | movable | root on string 1 | barre at fret 5 | 6 6 5 5
Ukulele | D maj7 | voicing 2 | movable | root on string 3 | barre at fret 2 | 2 2 2 4

### D m7 | notes: D F A C | steps: 0 3 7 10
Guitar | D m7 | voicing 1 | open | x x 0 2 1 1
Guitar | D m7 | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 12 10 10 10 10
Guitar | D m7 | voicing 3 | movable | root on string 5 | barre at fret 5 | x 5 7 5 6 5
Ukulele | D m7 | voicing 1 | movable | root on string 1 | barre at fret 5 | 5 5 5 5
Ukulele | D m7 | voicing 2 | movable | root on string 3 | no barre | 2 2 1 3

### D 7sus4 | notes: D G A C | steps: 0 5 7 10
Guitar | D 7sus4 | voicing 1 | open | x x 0 2 1 3
Guitar | D 7sus4 | voicing 2 | movable | root on string 6 | barre at fret 10 | 10 10 10 12 10 10
Guitar | D 7sus4 | voicing 3 | movable | root on string 5 | barre at fret 3 | x 5 5 5 3 3
Ukulele | D 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 2 | 2 2 3 3
Ukulele | D 7sus4 | voicing 2 | movable | root on string 1 | barre at fret 5 | 5 7 5 5

### D# Major | notes: D# G A# | steps: 0 4 7
Guitar | D# Major | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 13 13 12 11 11
Guitar | D# Major | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 8 8 8 6
Ukulele | D# Major | voicing 1 | movable | root on string 3 | no barre | 3 3 3 1
Ukulele | D# Major | voicing 2 | movable | root on string 4, 1 | barre at fret 6 | 8 7 6 6

### D# Minor | notes: D# F# A# | steps: 0 3 7
Guitar | D# Minor | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 13 13 11 11 11
Guitar | D# Minor | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 8 8 7 6
Ukulele | D# Minor | voicing 1 | movable | root on string 4, 1 | barre at fret 6 | 8 6 6 6
Ukulele | D# Minor | voicing 2 | movable | root on string 3 | no barre | 3 3 2 1

### D# 7 | notes: D# G A# C# | steps: 0 4 7 10
Guitar | D# 7 | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 13 11 12 11 11
Guitar | D# 7 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 8 6 8 6
Ukulele | D# 7 | voicing 1 | movable | root on string 3 | barre at fret 3 | 3 3 3 4
Ukulele | D# 7 | voicing 2 | movable | root on string 1 | barre at fret 6 | 6 7 6 6

### D# 5 | notes: D# A# | steps: 0 7
Guitar | D# 5 | voicing 1 | movable | root on string 6 | no barre | 11 13 13 x x x
Guitar | D# 5 | voicing 2 | movable | root on string 5 | no barre | x 6 8 8 x x
Ukulele | D# 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 3 | 3 3 6 6

### D# dim | notes: D# F# A | steps: 0 3 6
Guitar | D# dim | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 12 13 11 x x
Guitar | D# dim | voicing 2 | movable | root on string 5 | no barre | x 6 7 8 7 x
Ukulele | D# dim | voicing 1 | movable | root on string 4, 1 | no barre | 8 6 5 6

### D# dim7 | notes: D# F# A C | steps: 0 3 6 9
Guitar | D# dim7 | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 12 13 11 13 11
Guitar | D# dim7 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 6 4 5 4 5
Ukulele | D# dim7 | voicing 1 | movable | root on string 3 | barre at fret 2 | 2 3 2 3

### D# aug | notes: D# G B | steps: 0 4 8
Guitar | D# aug | voicing 1 | movable | root on string 6 | barre at fret 8 | 11 10 9 8 8 x
Guitar | D# aug | voicing 2 | movable | root on string 5 | barre at fret 4 | x 6 5 4 4 7
Ukulele | D# aug | voicing 1 | movable | root on string 3 | no barre | 4 3 3 2
Ukulele | D# aug | voicing 2 | movable | root on string 3, 1 | barre at fret 3 | 4 3 3 6

### D# sus2 | notes: D# F A# | steps: 0 2 7
Guitar | D# sus2 | voicing 1 | movable | root on string 6 | barre at fret 8 | 11 8 8 8 11 11
Guitar | D# sus2 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 8 8 6 6
Ukulele | D# sus2 | voicing 1 | movable | root on string 3 | barre at fret 1 | 3 3 1 1
Ukulele | D# sus2 | voicing 2 | movable | root on string 1 | no barre | 3 5 6 6

### D# sus4 | notes: D# G# A# | steps: 0 5 7
Guitar | D# sus4 | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 13 13 13 11 11
Guitar | D# sus4 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 6 8 9 6
Ukulele | D# sus4 | voicing 1 | movable | root on string 4, 1 | barre at fret 6 | 8 8 6 6
Ukulele | D# sus4 | voicing 2 | movable | root on string 3 | barre at fret 1 | 1 3 4 1

### D# maj7 | notes: D# G A# D | steps: 0 4 7 11
Guitar | D# maj7 | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 13 12 12 11 11
Guitar | D# maj7 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 8 7 8 6
Ukulele | D# maj7 | voicing 1 | movable | root on string 1 | barre at fret 6 | 7 7 6 6
Ukulele | D# maj7 | voicing 2 | movable | root on string 3 | barre at fret 3 | 3 3 3 5

### D# m7 | notes: D# F# A# C# | steps: 0 3 7 10
Guitar | D# m7 | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 13 11 11 11 11
Guitar | D# m7 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 6 8 6 7 6
Ukulele | D# m7 | voicing 1 | movable | root on string 1 | barre at fret 6 | 6 6 6 6
Ukulele | D# m7 | voicing 2 | movable | root on string 3 | no barre | 3 3 2 4

### D# 7sus4 | notes: D# G# A# C# | steps: 0 5 7 10
Guitar | D# 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 11 | 11 11 11 13 11 11
Guitar | D# 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 4 | x 6 6 6 4 4
Ukulele | D# 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 3 | 3 3 4 4
Ukulele | D# 7sus4 | voicing 2 | movable | root on string 1 | barre at fret 6 | 6 8 6 6

### E Major | notes: E G# B | steps: 0 4 7
Guitar | E Major | voicing 1 | open | 0 2 2 1 0 0
Guitar | E Major | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 14 14 13 12 12
Guitar | E Major | voicing 3 | movable | root on string 5 | barre at fret 7 | x 7 9 9 9 7
Ukulele | E Major | voicing 1 | movable | root on string 3 | no barre | 4 4 4 2
Ukulele | E Major | voicing 2 | movable | root on string 4, 1 | barre at fret 7 | 9 8 7 7

### E Minor | notes: E G B | steps: 0 3 7
Guitar | E Minor | voicing 1 | open | 0 2 2 0 0 0
Guitar | E Minor | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 14 14 12 12 12
Guitar | E Minor | voicing 3 | movable | root on string 5 | barre at fret 7 | x 7 9 9 8 7
Ukulele | E Minor | voicing 1 | open | 0 4 3 2
Ukulele | E Minor | voicing 2 | movable | root on string 4, 1 | barre at fret 7 | 9 7 7 7
Ukulele | E Minor | voicing 3 | movable | root on string 3 | no barre | 4 4 3 2

### E 7 | notes: E G# B D | steps: 0 4 7 10
Guitar | E 7 | voicing 1 | open | 0 2 0 1 0 0
Guitar | E 7 | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 14 12 13 12 12
Guitar | E 7 | voicing 3 | movable | root on string 5 | barre at fret 7 | x 7 9 7 9 7
Ukulele | E 7 | voicing 1 | open | 1 2 0 2
Ukulele | E 7 | voicing 2 | movable | root on string 3 | barre at fret 4 | 4 4 4 5
Ukulele | E 7 | voicing 3 | movable | root on string 1 | barre at fret 7 | 7 8 7 7

### E 5 | notes: E B | steps: 0 7
Guitar | E 5 | voicing 1 | open | 0 2 2 x x x
Guitar | E 5 | voicing 2 | movable | root on string 6 | no barre | 12 14 14 x x x
Guitar | E 5 | voicing 3 | movable | root on string 5 | no barre | x 7 9 9 x x
Ukulele | E 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 4 | 4 4 7 7

### E dim | notes: E G A# | steps: 0 3 6
Guitar | E dim | voicing 1 | movable | root on string 6 | barre at fret 12 | 12 13 14 12 x x
Guitar | E dim | voicing 2 | movable | root on string 5 | no barre | x 7 8 9 8 x
Ukulele | E dim | voicing 1 | movable | root on string 3 | no barre | 3 4 3 1
Ukulele | E dim | voicing 2 | movable | root on string 4, 1 | no barre | 9 7 6 7

### E dim7 | notes: E G A# C# | steps: 0 3 6 9
Guitar | E dim7 | voicing 1 | movable | root on string 6 | barre at fret 12 | 12 13 14 12 14 12
Guitar | E dim7 | voicing 2 | movable | root on string 5 | barre at fret 5 | x 7 5 6 5 6
Ukulele | E dim7 | voicing 1 | movable | root on string 3 | barre at fret 3 | 3 4 3 4

### E aug | notes: E G# C | steps: 0 4 8
Guitar | E aug | voicing 1 | movable | root on string 6 | barre at fret 9 | 12 11 10 9 9 x
Guitar | E aug | voicing 2 | movable | root on string 5 | barre at fret 5 | x 7 6 5 5 8
Ukulele | E aug | voicing 1 | movable | root on string 3 | no barre | 5 4 4 3
Ukulele | E aug | voicing 2 | movable | root on string 3, 1 | barre at fret 4 | 5 4 4 7

### E sus2 | notes: E F# B | steps: 0 2 7
Guitar | E sus2 | voicing 1 | movable | root on string 6 | barre at fret 9 | 12 9 9 9 12 12
Guitar | E sus2 | voicing 2 | movable | root on string 5 | barre at fret 7 | x 7 9 9 7 7
Ukulele | E sus2 | voicing 1 | movable | root on string 3 | barre at fret 2 | 4 4 2 2
Ukulele | E sus2 | voicing 2 | movable | root on string 1 | no barre | 4 6 7 7

### E sus4 | notes: E A B | steps: 0 5 7
Guitar | E sus4 | voicing 1 | open | 0 2 2 2 0 0
Guitar | E sus4 | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 14 14 14 12 12
Guitar | E sus4 | voicing 3 | movable | root on string 5 | barre at fret 7 | x 7 7 9 10 7
Ukulele | E sus4 | voicing 1 | movable | root on string 4, 1 | barre at fret 7 | 9 9 7 7
Ukulele | E sus4 | voicing 2 | movable | root on string 3 | barre at fret 2 | 2 4 5 2

### E maj7 | notes: E G# B D# | steps: 0 4 7 11
Guitar | E maj7 | voicing 1 | open | 0 2 1 1 0 0
Guitar | E maj7 | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 14 13 13 12 12
Guitar | E maj7 | voicing 3 | movable | root on string 5 | barre at fret 7 | x 7 9 8 9 7
Ukulele | E maj7 | voicing 1 | movable | root on string 1 | barre at fret 7 | 8 8 7 7
Ukulele | E maj7 | voicing 2 | movable | root on string 3 | barre at fret 4 | 4 4 4 6

### E m7 | notes: E G B D | steps: 0 3 7 10
Guitar | E m7 | voicing 1 | open | 0 2 0 0 0 0
Guitar | E m7 | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 14 12 12 12 12
Guitar | E m7 | voicing 3 | movable | root on string 5 | barre at fret 7 | x 7 9 7 8 7
Ukulele | E m7 | voicing 1 | movable | root on string 1 | barre at fret 7 | 7 7 7 7
Ukulele | E m7 | voicing 2 | movable | root on string 3 | no barre | 4 4 3 5

### E 7sus4 | notes: E A B D | steps: 0 5 7 10
Guitar | E 7sus4 | voicing 1 | open | 0 2 0 2 0 0
Guitar | E 7sus4 | voicing 2 | movable | root on string 6 | barre at fret 12 | 12 12 12 14 12 12
Guitar | E 7sus4 | voicing 3 | movable | root on string 5 | barre at fret 5 | x 7 7 7 5 5
Ukulele | E 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 4 | 4 4 5 5
Ukulele | E 7sus4 | voicing 2 | movable | root on string 1 | barre at fret 7 | 7 9 7 7

### F Major | notes: F A C | steps: 0 4 7
Guitar | F Major | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 3 3 2 1 1
Guitar | F Major | voicing 2 | movable | root on string 5 | barre at fret 8 | x 8 10 10 10 8
Ukulele | F Major | voicing 1 | open | 2 0 1 0
Ukulele | F Major | voicing 2 | movable | root on string 3 | no barre | 5 5 5 3
Ukulele | F Major | voicing 3 | movable | root on string 4, 1 | barre at fret 8 | 10 9 8 8

### F Minor | notes: F G# C | steps: 0 3 7
Guitar | F Minor | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 3 3 1 1 1
Guitar | F Minor | voicing 2 | movable | root on string 5 | barre at fret 8 | x 8 10 10 9 8
Ukulele | F Minor | voicing 1 | movable | root on string 4, 1 | barre at fret 8 | 10 8 8 8
Ukulele | F Minor | voicing 2 | movable | root on string 3 | no barre | 5 5 4 3

### F 7 | notes: F A C D# | steps: 0 4 7 10
Guitar | F 7 | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 3 1 2 1 1
Guitar | F 7 | voicing 2 | movable | root on string 5 | barre at fret 8 | x 8 10 8 10 8
Ukulele | F 7 | voicing 1 | movable | root on string 3 | barre at fret 5 | 5 5 5 6
Ukulele | F 7 | voicing 2 | movable | root on string 1 | barre at fret 8 | 8 9 8 8

### F 5 | notes: F C | steps: 0 7
Guitar | F 5 | voicing 1 | movable | root on string 6 | no barre | 1 3 3 x x x
Guitar | F 5 | voicing 2 | movable | root on string 5 | no barre | x 8 10 10 x x
Ukulele | F 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 5 | 5 5 8 8

### F dim | notes: F G# B | steps: 0 3 6
Guitar | F dim | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 2 3 1 x x
Guitar | F dim | voicing 2 | movable | root on string 5 | no barre | x 8 9 10 9 x
Ukulele | F dim | voicing 1 | movable | root on string 3 | no barre | 4 5 4 2
Ukulele | F dim | voicing 2 | movable | root on string 4, 1 | no barre | 10 8 7 8

### F dim7 | notes: F G# B D | steps: 0 3 6 9
Guitar | F dim7 | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 2 3 1 3 1
Guitar | F dim7 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 8 6 7 6 7
Ukulele | F dim7 | voicing 1 | movable | root on string 2 | barre at fret 1 | 1 2 1 2

### F aug | notes: F A C# | steps: 0 4 8
Guitar | F aug | voicing 1 | movable | root on string 6 | no barre | 1 4 3 2 x x
Guitar | F aug | voicing 2 | movable | root on string 5 | barre at fret 6 | x 8 7 6 6 9
Ukulele | F aug | voicing 1 | movable | root on string 3 | no barre | 6 5 5 4
Ukulele | F aug | voicing 2 | movable | root on string 2 | barre at fret 1 | 2 1 1 4

### F sus2 | notes: F G C | steps: 0 2 7
Guitar | F sus2 | voicing 1 | movable | root on string 5 | barre at fret 8 | x 8 10 10 8 8
Ukulele | F sus2 | voicing 1 | movable | root on string 3 | barre at fret 3 | 5 5 3 3
Ukulele | F sus2 | voicing 2 | movable | root on string 1 | no barre | 5 7 8 8

### F sus4 | notes: F A# C | steps: 0 5 7
Guitar | F sus4 | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 3 3 3 1 1
Guitar | F sus4 | voicing 2 | movable | root on string 5 | barre at fret 8 | x 8 8 10 11 8
Ukulele | F sus4 | voicing 1 | movable | root on string 4, 1 | barre at fret 8 | 10 10 8 8
Ukulele | F sus4 | voicing 2 | movable | root on string 3 | barre at fret 3 | 3 5 6 3

### F maj7 | notes: F A C E | steps: 0 4 7 11
Guitar | F maj7 | voicing 1 | open | x x 3 2 1 0
Guitar | F maj7 | voicing 2 | movable | root on string 6 | barre at fret 1 | 1 3 2 2 1 1
Guitar | F maj7 | voicing 3 | movable | root on string 5 | barre at fret 8 | x 8 10 9 10 8
Ukulele | F maj7 | voicing 1 | movable | root on string 1 | barre at fret 8 | 9 9 8 8
Ukulele | F maj7 | voicing 2 | movable | root on string 3 | barre at fret 5 | 5 5 5 7

### F m7 | notes: F G# C D# | steps: 0 3 7 10
Guitar | F m7 | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 3 1 1 1 1
Guitar | F m7 | voicing 2 | movable | root on string 5 | barre at fret 8 | x 8 10 8 9 8
Ukulele | F m7 | voicing 1 | movable | root on string 1 | barre at fret 8 | 8 8 8 8
Ukulele | F m7 | voicing 2 | movable | root on string 2 | barre at fret 1 | 1 3 1 3

### F 7sus4 | notes: F A# C D# | steps: 0 5 7 10
Guitar | F 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 1 | 1 1 1 3 1 1
Guitar | F 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 6 | x 8 8 8 6 6
Ukulele | F 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 5 | 5 5 6 6
Ukulele | F 7sus4 | voicing 2 | movable | root on string 1 | barre at fret 8 | 8 10 8 8

### F# Major | notes: F# A# C# | steps: 0 4 7
Guitar | F# Major | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 4 4 3 2 2
Guitar | F# Major | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 11 11 11 9
Ukulele | F# Major | voicing 1 | movable | root on string 3 | no barre | 6 6 6 4
Ukulele | F# Major | voicing 2 | movable | root on string 2 | barre at fret 1 | 3 1 2 1

### F# Minor | notes: F# A C# | steps: 0 3 7
Guitar | F# Minor | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 4 4 2 2 2
Guitar | F# Minor | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 11 11 10 9
Ukulele | F# Minor | voicing 1 | movable | root on string 3 | no barre | 6 6 5 4
Ukulele | F# Minor | voicing 2 | movable | root on string 1 | no barre | 6 9 9 9

### F# 7 | notes: F# A# C# E | steps: 0 4 7 10
Guitar | F# 7 | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 4 2 3 2 2
Guitar | F# 7 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 11 9 11 9
Ukulele | F# 7 | voicing 1 | movable | root on string 3 | barre at fret 6 | 6 6 6 7
Ukulele | F# 7 | voicing 2 | movable | root on string 1 | barre at fret 9 | 9 10 9 9

### F# 5 | notes: F# C# | steps: 0 7
Guitar | F# 5 | voicing 1 | movable | root on string 6 | no barre | 2 4 4 x x x
Guitar | F# 5 | voicing 2 | movable | root on string 5 | no barre | x 9 11 11 x x
Ukulele | F# 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 6 | 6 6 9 9

### F# dim | notes: F# A C | steps: 0 3 6
Guitar | F# dim | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 3 4 2 x x
Guitar | F# dim | voicing 2 | movable | root on string 5 | no barre | x 9 10 11 10 x
Ukulele | F# dim | voicing 1 | movable | root on string 3 | no barre | 5 6 5 3

### F# dim7 | notes: F# A C D# | steps: 0 3 6 9
Guitar | F# dim7 | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 3 4 2 4 2
Guitar | F# dim7 | voicing 2 | movable | root on string 5 | barre at fret 7 | x 9 7 8 7 8
Ukulele | F# dim7 | voicing 1 | movable | root on string 2 | barre at fret 2 | 2 3 2 3

### F# aug | notes: F# A# D | steps: 0 4 8
Guitar | F# aug | voicing 1 | movable | root on string 6 | no barre | 2 5 4 3 x x
Guitar | F# aug | voicing 2 | movable | root on string 5 | barre at fret 7 | x 9 8 7 7 10
Ukulele | F# aug | voicing 1 | movable | root on string 2 | no barre | 3 2 2 1
Ukulele | F# aug | voicing 2 | movable | root on string 2 | barre at fret 2 | 3 2 2 5

### F# sus2 | notes: F# G# C# | steps: 0 2 7
Guitar | F# sus2 | voicing 1 | movable | root on string 6 | no barre | 2 4 4 1 x x
Guitar | F# sus2 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 11 11 9 9
Ukulele | F# sus2 | voicing 1 | movable | root on string 3 | barre at fret 4 | 6 6 4 4
Ukulele | F# sus2 | voicing 2 | movable | root on string 2 | barre at fret 1 | 1 1 2 4

### F# sus4 | notes: F# B C# | steps: 0 5 7
Guitar | F# sus4 | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 4 4 4 2 2
Guitar | F# sus4 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 9 11 12 9
Ukulele | F# sus4 | voicing 1 | movable | root on string 3 | barre at fret 4 | 4 6 7 4
Ukulele | F# sus4 | voicing 2 | movable | root on string 3, 1 | barre at fret 6 | 6 6 7 9

### F# maj7 | notes: F# A# C# F | steps: 0 4 7 11
Guitar | F# maj7 | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 4 3 3 2 2
Guitar | F# maj7 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 11 10 11 9
Ukulele | F# maj7 | voicing 1 | movable | root on string 1 | barre at fret 9 | 10 10 9 9
Ukulele | F# maj7 | voicing 2 | movable | root on string 3 | barre at fret 6 | 6 6 6 8

### F# m7 | notes: F# A C# E | steps: 0 3 7 10
Guitar | F# m7 | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 4 2 2 2 2
Guitar | F# m7 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 9 11 9 10 9
Ukulele | F# m7 | voicing 1 | movable | root on string 1 | barre at fret 9 | 9 9 9 9
Ukulele | F# m7 | voicing 2 | movable | root on string 2 | barre at fret 2 | 2 4 2 4

### F# 7sus4 | notes: F# B C# E | steps: 0 5 7 10
Guitar | F# 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 2 | 2 2 2 4 2 2
Guitar | F# 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 7 | x 9 9 9 7 7
Ukulele | F# 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 6 | 6 6 7 7
Ukulele | F# 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 2 | 4 4 2 2

### G Major | notes: G B D | steps: 0 4 7
Guitar | G Major | voicing 1 | open | 3 2 0 0 0 3
Guitar | G Major | voicing 2 | movable | root on string 6 | barre at fret 3 | 3 5 5 4 3 3
Guitar | G Major | voicing 3 | movable | root on string 5 | barre at fret 10 | x 10 12 12 12 10
Ukulele | G Major | voicing 1 | open | 0 2 3 2
Ukulele | G Major | voicing 2 | movable | root on string 3 | no barre | 7 7 7 5
Ukulele | G Major | voicing 3 | movable | root on string 2 | barre at fret 2 | 4 2 3 2

### G Minor | notes: G A# D | steps: 0 3 7
Guitar | G Minor | voicing 1 | movable | root on string 6 | barre at fret 3 | 3 5 5 3 3 3
Guitar | G Minor | voicing 2 | movable | root on string 5 | barre at fret 10 | x 10 12 12 11 10
Ukulele | G Minor | voicing 1 | open | 0 2 3 1
Ukulele | G Minor | voicing 2 | movable | root on string 2 | no barre | 3 2 3 1
Ukulele | G Minor | voicing 3 | movable | root on string 3 | no barre | 7 7 6 5

### G 7 | notes: G B D F | steps: 0 4 7 10
Guitar | G 7 | voicing 1 | open | 3 2 0 0 0 1
Guitar | G 7 | voicing 2 | movable | root on string 6 | barre at fret 3 | 3 5 3 4 3 3
Guitar | G 7 | voicing 3 | movable | root on string 5 | barre at fret 10 | x 10 12 10 12 10
Ukulele | G 7 | voicing 1 | open | 0 2 1 2
Ukulele | G 7 | voicing 2 | movable | root on string 3 | barre at fret 7 | 7 7 7 8
Ukulele | G 7 | voicing 3 | movable | root on string 2 | no barre | 4 5 3 5

### G 5 | notes: G D | steps: 0 7
Guitar | G 5 | voicing 1 | movable | root on string 6 | no barre | 3 5 5 x x x
Guitar | G 5 | voicing 2 | movable | root on string 5 | no barre | x 10 12 12 x x
Ukulele | G 5 | voicing 1 | movable | root on string 3, 1 | barre at fret 7 | 7 7 10 10

### G dim | notes: G A# C# | steps: 0 3 6
Guitar | G dim | voicing 1 | movable | root on string 6 | barre at fret 3 | 3 4 5 3 x x
Guitar | G dim | voicing 2 | movable | root on string 5 | no barre | x 10 11 12 11 x
Ukulele | G dim | voicing 1 | movable | root on string 2 | barre at fret 1 | 3 1 3 1
Ukulele | G dim | voicing 2 | movable | root on string 2 | no barre | 3 1 3 4

### G dim7 | notes: G A# C# E | steps: 0 3 6 9
Guitar | G dim7 | voicing 1 | movable | root on string 6 | barre at fret 3 | 3 4 5 3 5 3
Guitar | G dim7 | voicing 2 | movable | root on string 5 | barre at fret 8 | x 10 8 9 8 9
Ukulele | G dim7 | voicing 1 | movable | root on string 2 | barre at fret 3 | 3 4 3 4

### G aug | notes: G B D# | steps: 0 4 8
Guitar | G aug | voicing 1 | movable | root on string 6 | no barre | 3 2 1 4 x x
Guitar | G aug | voicing 2 | movable | root on string 5 | barre at fret 8 | x 10 9 8 8 11
Ukulele | G aug | voicing 1 | movable | root on string 2 | no barre | 4 3 3 2
Ukulele | G aug | voicing 2 | movable | root on string 2 | barre at fret 3 | 4 3 3 6

### G sus2 | notes: G A D | steps: 0 2 7
Guitar | G sus2 | voicing 1 | movable | root on string 6 | no barre | 3 5 5 2 x x
Guitar | G sus2 | voicing 2 | movable | root on string 5 | barre at fret 10 | x 10 12 12 10 10
Ukulele | G sus2 | voicing 1 | movable | root on string 3 | barre at fret 5 | 7 7 5 5
Ukulele | G sus2 | voicing 2 | movable | root on string 2 | barre at fret 2 | 2 2 3 5

### G sus4 | notes: G C D | steps: 0 5 7
Guitar | G sus4 | voicing 1 | open | 3 3 0 0 1 3
Guitar | G sus4 | voicing 2 | movable | root on string 6 | barre at fret 3 | 3 5 5 5 3 3
Guitar | G sus4 | voicing 3 | movable | root on string 5 | barre at fret 10 | x 10 10 12 13 10
Ukulele | G sus4 | voicing 1 | open | 0 2 3 3
Ukulele | G sus4 | voicing 2 | movable | root on string 3 | barre at fret 5 | 5 7 8 5
Ukulele | G sus4 | voicing 3 | movable | root on string 3, 1 | barre at fret 7 | 7 7 8 10

### G maj7 | notes: G B D F# | steps: 0 4 7 11
Guitar | G maj7 | voicing 1 | open | 3 2 0 0 0 2
Guitar | G maj7 | voicing 2 | movable | root on string 6 | barre at fret 3 | 3 5 4 4 3 3
Guitar | G maj7 | voicing 3 | movable | root on string 5 | barre at fret 10 | x 10 12 11 12 10
Ukulele | G maj7 | voicing 1 | movable | root on string 3 | barre at fret 7 | 7 7 7 9
Ukulele | G maj7 | voicing 2 | movable | root on string 2 | no barre | 4 6 3 5

### G m7 | notes: G A# D F | steps: 0 3 7 10
Guitar | G m7 | voicing 1 | movable | root on string 6 | barre at fret 3 | 3 5 3 3 3 3
Guitar | G m7 | voicing 2 | movable | root on string 5 | barre at fret 10 | x 10 12 10 11 10
Ukulele | G m7 | voicing 1 | open | 0 2 1 1
Ukulele | G m7 | voicing 2 | movable | root on string 1 | barre at fret 10 | 10 10 10 10
Ukulele | G m7 | voicing 3 | movable | root on string 2 | barre at fret 3 | 3 5 3 5

### G 7sus4 | notes: G C D F | steps: 0 5 7 10
Guitar | G 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 3 | 3 3 3 5 3 3
Guitar | G 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 8 | x 10 10 10 8 8
Ukulele | G 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 7 | 7 7 8 8
Ukulele | G 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 3 | 5 5 3 3

### G# Major | notes: G# C D# | steps: 0 4 7
Guitar | G# Major | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 6 6 5 4 4
Guitar | G# Major | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 13 13 13 11
Ukulele | G# Major | voicing 1 | movable | root on string 3 | no barre | 8 8 8 6
Ukulele | G# Major | voicing 2 | movable | root on string 2 | barre at fret 3 | 5 3 4 3

### G# Minor | notes: G# B D# | steps: 0 3 7
Guitar | G# Minor | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 6 6 4 4 4
Guitar | G# Minor | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 13 13 12 11
Ukulele | G# Minor | voicing 1 | movable | root on string 2 | no barre | 4 3 4 2
Ukulele | G# Minor | voicing 2 | movable | root on string 3 | no barre | 8 8 7 6

### G# 7 | notes: G# C D# F# | steps: 0 4 7 10
Guitar | G# 7 | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 6 4 5 4 4
Guitar | G# 7 | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 13 11 13 11
Ukulele | G# 7 | voicing 1 | movable | root on string 3 | barre at fret 8 | 8 8 8 9
Ukulele | G# 7 | voicing 2 | movable | root on string 4 | no barre | 1 3 2 3

### G# 5 | notes: G# D# | steps: 0 7
Guitar | G# 5 | voicing 1 | movable | root on string 6 | no barre | 4 6 6 x x x
Guitar | G# 5 | voicing 2 | movable | root on string 5 | no barre | x 11 13 13 x x
Ukulele | G# 5 | voicing 1 | generated | two adjacent strings, rest muted | 1 3 x x

### G# dim | notes: G# B D | steps: 0 3 6
Guitar | G# dim | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 5 6 4 x x
Guitar | G# dim | voicing 2 | movable | root on string 5 | no barre | x 11 12 13 12 x
Ukulele | G# dim | voicing 1 | movable | root on string 2 | barre at fret 2 | 4 2 4 2
Ukulele | G# dim | voicing 2 | movable | root on string 4, 2 | no barre | 1 2 4 2

### G# dim7 | notes: G# B D F | steps: 0 3 6 9
Guitar | G# dim7 | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 5 6 4 6 4
Guitar | G# dim7 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 11 9 10 9 10
Ukulele | G# dim7 | voicing 1 | movable | root on string 4 | barre at fret 1 | 1 2 1 2

### G# aug | notes: G# C E | steps: 0 4 8
Guitar | G# aug | voicing 1 | movable | root on string 6 | barre at fret 1 | 4 3 2 1 1 x
Guitar | G# aug | voicing 2 | movable | root on string 5 | barre at fret 9 | x 11 10 9 9 12
Ukulele | G# aug | voicing 1 | movable | root on string 2 | no barre | 5 4 4 3
Ukulele | G# aug | voicing 2 | movable | root on string 2 | barre at fret 4 | 5 4 4 7

### G# sus2 | notes: G# A# D# | steps: 0 2 7
Guitar | G# sus2 | voicing 1 | movable | root on string 6 | barre at fret 1 | 4 1 1 1 4 4
Guitar | G# sus2 | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 13 13 11 11
Ukulele | G# sus2 | voicing 1 | movable | root on string 3 | barre at fret 6 | 8 8 6 6
Ukulele | G# sus2 | voicing 2 | movable | root on string 4, 2 | barre at fret 1 | 1 3 4 1

### G# sus4 | notes: G# C# D# | steps: 0 5 7
Guitar | G# sus4 | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 6 6 6 4 4
Guitar | G# sus4 | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 11 13 14 11
Ukulele | G# sus4 | voicing 1 | movable | root on string 3 | barre at fret 6 | 6 8 9 6
Ukulele | G# sus4 | voicing 2 | movable | root on string 4, 2 | no barre | 1 3 4 4

### G# maj7 | notes: G# C D# G | steps: 0 4 7 11
Guitar | G# maj7 | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 6 5 5 4 4
Guitar | G# maj7 | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 13 12 13 11
Ukulele | G# maj7 | voicing 1 | movable | root on string 4 | no barre | 1 3 3 3
Ukulele | G# maj7 | voicing 2 | movable | root on string 3 | barre at fret 8 | 8 8 8 10

### G# m7 | notes: G# B D# F# | steps: 0 3 7 10
Guitar | G# m7 | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 6 4 4 4 4
Guitar | G# m7 | voicing 2 | movable | root on string 5 | barre at fret 11 | x 11 13 11 12 11
Ukulele | G# m7 | voicing 1 | movable | root on string 2 | barre at fret 4 | 4 6 4 6
Ukulele | G# m7 | voicing 2 | movable | root on string 4 | no barre | 1 3 2 2

### G# 7sus4 | notes: G# C# D# F# | steps: 0 5 7 10
Guitar | G# 7sus4 | voicing 1 | movable | root on string 6 | barre at fret 4 | 4 4 4 6 4 4
Guitar | G# 7sus4 | voicing 2 | movable | root on string 5 | barre at fret 9 | x 11 11 11 9 9
Ukulele | G# 7sus4 | voicing 1 | movable | root on string 3 | barre at fret 8 | 8 8 9 9
Ukulele | G# 7sus4 | voicing 2 | movable | root on string 2 | barre at fret 4 | 6 6 4 4
