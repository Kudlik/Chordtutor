@epic-inversions
Feature: Chord inversions
  As a learner
  I want to pick a chord, its variant and an inversion
  So that I understand that the same chord can have a different note at the bottom

  The inversions come from the reference file chord_inversions.md: for every chord the bass note, the notes from
  bottom to top and the steps from the bass. The file has no fret positions, so the app generates them.

  Background:
    Given I am on the "Chord inversions" tab

  @US-1301
  Scenario: The tab offers root, variant and inversion
    Then I see the instrument selector, the "Root" buttons and the "Variant" buttons
    And the variants are all 12 chord types, including "5"
    And I see an "Inversion" section below them

  @US-1302
  Scenario Outline: The number of inversions follows the chord
    When I select the variant "<type>"
    Then the "Inversion" section has <count> buttons

    Examples:
      | type  | count |
      | 5     | 2     |
      | Major | 3     |
      | Minor | 3     |
      | dim   | 3     |
      | aug   | 3     |
      | sus2  | 3     |
      | sus4  | 3     |
      | 7     | 4     |
      | maj7  | 4     |
      | m7    | 4     |
      | dim7  | 4     |
      | 7sus4 | 4     |

  @US-1303
  Scenario: Each inversion button shows its name and the slash chord
    When I select the chord "C" "Major"
    Then the inversion buttons read "Root position C", "1st inversion C/E" and "2nd inversion C/G"

  @US-1304
  Scenario: Root position is the default inversion
    Given I have never selected an inversion
    When I open the "Chord inversions" tab
    Then "Root position" is selected

  @US-1305
  Scenario Outline: The title is the slash chord
    When I select the chord "<root>" "<type>" and the inversion "<inversion>"
    Then the title reads "<title>"
    And below it I read "<chord> · <inversion>"

    Examples:
      | root | type  | inversion       | title      | chord   |
      | C    | Major | Root position   | C          | C Major |
      | C    | Major | 1st inversion   | C/E        | C Major |
      | A    | Minor | 2nd inversion   | Am/E       | A Minor |
      | G    | 7     | 3rd inversion   | G7/F       | G 7     |
      | D    | sus4  | 1st inversion   | Dsus4/G    | D sus4  |
      | A    | 5     | 1st inversion   | A5/E       | A 5     |

  @US-1306
  Scenario Outline: The notes are listed from the bottom to the top
    When I select the chord "<root>" "<type>" and the inversion "<inversion>"
    Then the notes are listed as <notes>
    And "How it is built" shows the steps from the bass as "<steps>"

    Examples:
      | root | type  | inversion     | notes          | steps    |
      | C    | Major | 1st inversion | E, G, C        | 0, 3, 8  |
      | C    | Major | 2nd inversion | G, C, E        | 0, 5, 9  |
      | A    | 7     | 3rd inversion | G, A, C#, E    | 0, 2, 6, 9 |
      | C    | maj7  | 1st inversion | E, G, B, C     | 0, 3, 7, 8 |

  @US-1307
  Scenario: The bass note is marked on the fretboard
    When I select the chord "C" "Major" and the inversion "1st inversion"
    Then the lowest note of the shown position, "E", has a dashed ring
    And the legend lists "Bass note: E"
    And the marker does not rely on colour

  @US-1308
  Scenario: Every dot shows its note and its degree, as in the other tabs
    When I select the chord "C" "Major" and the inversion "1st inversion"
    Then the dots show "E" with "3", "G" with "5" and "C" with "1"
    And they use the same colours as on the other tabs

  @US-1309
  Scenario: A text description names the bass note
    Given a screen reader is in use
    When I select the chord "C" "Major" and the inversion "1st inversion"
    Then the fretboard description lists each string with its fret, note and degree
    And it says which note is the bass note

  @US-1310
  Scenario Outline: Every inversion can be played on every instrument
    Given the instrument is "<instrument>"
    Then every inversion of every chord, for all 12 roots and 12 types, has at least one position
    # Verified by an automated test over the whole dataset

    Examples:
      | instrument |
      | Guitar     |
      | Ukulele    |
      | Bass       |

  @US-1311
  Scenario: Positions on guitar and ukulele have the inversion's bass note at the bottom
    Given the instrument is "Guitar" or "Ukulele"
    When I select any chord and inversion
    Then in every position the lowest sounding note is the bass note of that inversion
    And every note of the chord is played at least once
    And no other note is played
    And the notes that are not played are marked with an "X"

  @US-1312
  Scenario: Positions are playable
    When I select any chord and inversion on "Guitar" or "Ukulele"
    Then the fretted notes of a position span at most four frets
    And a position with an open string uses no fret above the fifth
    And every position lies within frets 0 to 15
    And a grip is not listed twice at a distance of an octave

  @US-1313
  Scenario: Positions are numbered, simplest first
    When a chord has several positions
    Then I see numbered position buttons
    And positions without doubled notes come first, then the lowest on the neck
    And on bass, positions with every note on its own string come first
    And at most ten positions are offered
    And the first position is selected

  @US-1314
  Scenario: Choosing a position updates the fretboard
    When I select position "2"
    Then the fretboard shows the second position
    And the notes and the bass marker still describe the selected inversion

  @US-1315
  Scenario Outline: Bass shows exactly one dot per chord note
    Given the instrument is "Bass"
    When I select the chord "<root>" "<type>" and the inversion "<inversion>"
    Then every position shows exactly <count> dots, one for each note of the chord
    And the lowest of them is the bass note of the inversion
    And the dots lie within five frets
    And no muted-string markers are shown
    And a hint explains that each note is shown once and the lowest one is the bass note

    Examples:
      | root | type  | inversion     | count |
      | C    | Major | 1st inversion | 3     |
      | A    | Minor | 2nd inversion | 3     |
      | G    | 7     | 3rd inversion | 4     |
      | A    | 5     | 1st inversion | 2     |

  @US-1316
  Scenario: Selecting a chord or inversion keeps the choices
    Given I selected "G" "7" and the inversion "2nd inversion"
    When I select another root
    Then the inversion is still "2nd inversion"
    And when I select a variant with fewer inversions, the last available inversion is shown

  @US-1317
  Scenario: Symmetric chords explain why their inversions look alike
    When I select the variant "aug" or "dim7"
    Then "How it is built" explains that every inversion has the same steps from the bass

  @US-1318
  Scenario: The explanation describes the inversion
    When I select the chord "C" "Major" and the inversion "1st inversion"
    Then "What it is" explains what an inversion is and names the bass note and its degree, "E, the major third of C Major"
    And "How it sounds" describes how a 1st inversion sounds
    And "How it is built" lists the notes, the steps from the bass and the slash chord, with an explanation of slash notation

  @US-1319
  Scenario Outline: Note names follow the chosen setting
    Given the note names are set to "<mode>"
    When I select the chord "F" "dim7" and the inversion "3rd inversion"
    Then the notes are listed as <notes>
    And the slash chord is "<slash>"

    Examples:
      | mode                  | notes             | slash     |
      | Simplified            | D, F, Ab, Cb      | Fdim7/D   |
      | Theoretically correct | Ebb, F, Ab, Cb    | Fdim7/Ebb |

  @US-1320
  Scenario: The inversion is part of the address
    When I select "G" "7" and the inversion "2nd inversion" on "Ukulele"
    Then the page address contains the tab, the chord, the instrument and the inversion
    And opening that address on another device shows the same selection

  @US-1321
  Scenario: The tab works in Polish and on a phone
    Given the interface is in Polish
    Then the tab is called "Przewroty akordów" and the inversions "Postać zasadnicza", "1. przewrót", "2. przewrót" and "3. przewrót"
    Given I open the app on a phone with a viewport width of 375 px
    Then the fretboard is vertical and nothing needs horizontal scrolling

  @US-1322
  Scenario: The inversion data is consistent with the chord theory
    Given the inversion dataset
    Then every chord has as many inversions as it has notes
    And every inversion contains exactly the notes of the chord formula
    And its first note is the bass note and its steps from the bass match the notes
    # Verified by an automated test over all 144 chords
