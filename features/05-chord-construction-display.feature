@mvp @epic-fretboard
Feature: Seeing how a chord is built on the fretboard
  As a learner
  I want each dot to show its note name and its degree in the chord
  So that I can memorise the construction of the chord, not only its shape

  Background:
    Given I am on the Chord Explorer
    And the instrument is "Guitar"

  @US-501
  Scenario: Every chord dot shows a note and a degree
    When I select the chord "C" "Major"
    Then each dot on the fretboard shows the note name and the degree
    And the dots show "C" with "1", "E" with "3" and "G" with "5"

  @US-502
  Scenario Outline: Notes and degrees for every chord type, rooted on C
    When I select the chord "C" "<type>"
    Then the chord consists of the notes <notes>
    And the degrees are <degrees>

    Examples:
      | type  | notes              | degrees              |
      | Major | C, E, G            | 1, 3, 5              |
      | Minor | C, Eb, G           | 1, b3, 5             |
      | 5     | C, G               | 1, 5                 |
      | 7     | C, E, G, Bb        | 1, 3, 5, b7          |
      | dim   | C, Eb, Gb          | 1, b3, b5            |
      | dim7  | C, Eb, Gb, A       | 1, b3, b5, bb7       |
      | aug   | C, E, G#           | 1, 3, #5             |
      | sus2  | C, D, G            | 1, 2, 5              |
      | sus4  | C, F, G            | 1, 4, 5              |
      | maj7  | C, E, G, B         | 1, 3, 5, 7           |
      | m7    | C, Eb, G, Bb       | 1, b3, 5, b7         |
      | 7sus4 | C, F, G, Bb        | 1, 4, 5, b7          |

  @US-503
  Scenario Outline: Spelling follows the chosen root
    When I select the chord "<root>" "<type>"
    Then the chord consists of the notes <notes>

    Examples:
      | root | type  | notes           |
      | Eb   | Minor | Eb, Gb, Bb      |
      | D#   | Minor | D#, F#, A#      |
      | C#   | dim7  | C#, E, G, Bb    |
      | G#   | dim7  | G#, B, D, F     |
      | F#   | maj7  | F#, A#, C#, E#  |
      | A    | sus4  | A, D, E         |

  @US-504
  Scenario Outline: Double accidentals follow the chosen note names
    Given the note names are set to "<mode>"
    When I select the chord "C" "dim7"
    Then the dot for the seventh shows the note "<note>" and the degree "bb7"
    And a tooltip on the dot says "<tooltip>"

    Examples:
      | mode                  | note | tooltip                    |
      | Simplified            | A    | Theoretically spelled Bbb  |
      | Theoretically correct | Bbb  | Sounds like A              |

  @US-505
  Scenario: Notes and degrees have distinct visual styles
    When I look at a dot
    Then the note name is the large label
    And the degree is the small label
    And the dot is filled with the colour assigned to its degree

  @US-506
  Scenario: Degree colours are consistent across chords
    Given I view "C" "Major" and note the colour of the degree "5"
    When I select the chord "F#" "m7"
    Then the dot for degree "5" has the same colour as before

  @US-507
  Scenario: The root has its own colour and a distinct marker
    When I select any chord
    Then every dot for the root is drawn in the root colour
    And every root dot also has a marker that does not rely on colour

  @US-508
  Scenario: A legend explains colours, notes and degrees
    When I look below the fretboard
    Then I see a legend listing each degree of the selected chord with its colour, its note and its name
    And for "C" "Major" the legend reads "1 Root: C", "3 Major third: E", "5 Perfect fifth: G"

  @US-509
  Scenario: Open strings are shown as circles on the nut
    Given the selected voicing plays the thinnest string open
    Then a circle with its note and degree sits left of the nut on that string

  @US-510
  Scenario: Muted strings are marked with an X
    Given the selected voicing does not play the thickest string
    Then an "X" is shown left of the nut on that string

  @US-511
  Scenario: Barre fingerings are drawn as a bar
    Given the selected voicing is a barre
    Then the barre is drawn as a bar across the covered strings
    And each sounding string in the bar still shows its own note and degree

  @US-512
  Scenario: Fret numbers and position dots are shown
    Then fret numbers 0 to 15 are shown above the fretboard
    And inlay dots are drawn at frets 3, 5, 7, 9, 12 and 15

  @US-513
  Scenario: Left-handed mode keeps labels readable
    Given left-handed mode is on
    When I select any chord
    Then no label is mirrored or upside down

  @US-514
  Scenario: Hovering a dot shows the name of its degree
    Given I use a mouse
    When I hover over a dot
    Then a tooltip shows its degree and the degree name, for example "3 Major third" or "5 Perfect fifth"
    And the tooltip disappears when the pointer leaves the dot

  @US-515
  Scenario: Tapping a dot shows and hides the tooltip on touch screens
    Given I use a touch screen
    When I tap a dot
    Then the tooltip for that dot is shown
    When I tap outside the dot
    Then the tooltip is closed

  @US-516
  Scenario: The tooltip is available from the keyboard
    When I focus a dot with the Tab key
    Then the tooltip is shown
    And pressing Enter or Space keeps it open until I press Escape

  @US-517
  Scenario: The tooltip is in the selected language
    Given the interface is in Polish
    When I hover over a dot for the degree "b3"
    Then the tooltip reads "b3 · Tercja mała"
