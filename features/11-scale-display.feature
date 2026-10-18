@epic-scale
Feature: The scale behind the chord
  As a learner
  I want to see the scale a chord comes from, with the chord notes marked
  So that I learn the scale together with the chord

  Background:
    Given I am on the Chord Explorer

  @US-1101
  Scenario: The scale is shown below the variants
    When I select the chord "D" "Major"
    Then below the "Variant" section I see the scale "D Major scale"
    And the notes are shown in order as "D", "E", "F#", "G", "A", "B", "C#", "D"
    And the root is repeated at the end to close the octave

  @US-1102
  Scenario: The chord notes are highlighted in the scale
    When I select the chord "D" "Major"
    Then the notes "D", "F#" and "A" are highlighted
    And the other notes of the scale are not highlighted
    And a caption explains that highlighted notes are the notes of the chord

  @US-1103
  Scenario: Highlighted notes use the colours of the fretboard
    When I select the chord "D" "Major"
    Then each highlighted note has the colour of its degree on the fretboard
    And the highlighted notes are also bold and outlined, so colour is not the only cue
    And a screen reader announces each highlighted note as a chord note

  @US-1104
  Scenario Outline: Each chord type uses the scale it is built from
    When I select the chord "C" "<type>"
    Then the scale is named "<scale>"
    And the scale notes are <notes>

    Examples:
      | type  | scale                         | notes                    |
      | Major | Major scale                   | C D E F G A B            |
      | Minor | Natural minor scale           | C D Eb F G Ab Bb         |
      | 7     | Mixolydian scale              | C D E F G A Bb           |
      | 5     | Major scale                   | C D E F G A B            |
      | dim   | Locrian scale                 | C Db Eb F Gb Ab Bb       |
      | dim7  | Diminished scale (whole-half) | C D Eb F Gb Ab A B       |
      | aug   | Whole-tone scale              | C D E F# G# Bb           |
      | sus2  | Major scale                   | C D E F G A B            |
      | sus4  | Major scale                   | C D E F G A B            |
      | maj7  | Major scale                   | C D E F G A B            |
      | m7    | Dorian scale                  | C D Eb F G A Bb          |
      | 7sus4 | Mixolydian scale              | C D E F G A Bb           |

  @US-1105
  Scenario: The scale follows the chosen root and its spelling
    When I select the root "Db" with the type "Major"
    Then the scale notes are "Db", "Eb", "F", "Gb", "Ab", "Bb", "C"
    When I select the root "C#" with the type "Major"
    Then the scale notes are spelled with sharps as "C#", "D#", "E#", "F#", "G#", "A#", "B#"

  @US-1106
  Scenario Outline: Scale notes follow the chosen note names
    Given the note names are set to "<mode>"
    When I select the chord "D#" "Major"
    Then the scale notes are <notes>
    And a tooltip on a note with a different second name gives that name

    Examples:
      | mode                  | notes                           |
      | Simplified            | D#, E#, G, G#, A#, B#, D, D#    |
      | Theoretically correct | D#, E#, F##, G#, A#, B#, C##, D# |

  @US-1107
  Scenario: Every chord note belongs to the scale
    Given the 12 roots and the 12 chord types
    Then the scale starts on the root
    And it contains every note of the chord
    # Verified by an automated test over all 144 combinations

  @US-1108
  Scenario: The scale is available in Polish
    Given the interface is in Polish
    When I select the chord "C" "Minor"
    Then the scale is named "Skala molowa naturalna"
    And the notes are shown as "C", "D", "Eb", "F", "G", "Ab", "Bb"

  @US-1109
  Scenario: The scale fits on narrow screens
    Given I open the app on a phone with a viewport width of 375 px
    When I select the chord "C" "dim7"
    Then all nine notes of the scale are visible without horizontal page scrolling

  @US-1110
  Scenario: Other matching scales are hidden by default
    When I select the chord "A" "Minor"
    Then I see a switch "Show other matching scales" below the scale
    And it is off
    And only the scale "A Natural minor scale" is shown

  @US-1111
  Scenario: Turning the switch on lists every scale that holds the chord
    Given "A" "Minor" is selected
    When I turn on "Show other matching scales"
    Then below the main scale I see the scales "A Dorian", "A Phrygian", "A Harmonic minor", "A Melodic minor", "A Minor pentatonic", "A Blues" and "A Diminished (half-whole)"
    And each scale is shown with its notes, starting and ending on the root
    And the notes "A", "C" and "E" are highlighted in every scale

  @US-1112
  Scenario Outline: Only scales that contain every note of the chord are listed
    Given the chord "<root>" "<type>" is selected
    When I turn on "Show other matching scales"
    Then every listed scale contains all the notes of the chord
    And the scales "<expected>" are among them
    And the scale "<excluded>" is not listed

    Examples:
      | root | type  | expected                                     | excluded      |
      | C    | Major | Lydian, Mixolydian, Major pentatonic         | Natural minor |
      | C    | 7     | Lydian dominant, Diminished (half-whole)     | Major         |
      | C    | aug   | Whole-tone                                   | Dorian        |
      | C    | dim7  | Diminished (half-whole)                      | Mixolydian    |

  @US-1113
  Scenario: The default scale stays first and is not repeated
    When I turn on "Show other matching scales"
    Then the main scale remains the first one shown, above the switch
    And it does not appear again in the list of other scales

  @US-1114
  Scenario: The choice follows the chord
    Given "Show other matching scales" is on
    When I select another root or chord variant
    Then the list is updated for the new chord
    And the switch stays on

  @US-1115
  Scenario: The switch and the extra scales are available in Polish
    Given the interface is in Polish
    When I select the chord "A" "Minor"
    Then the switch reads "Pokaż inne pasujące skale"
    And the extra scales are named, for example, "Skala dorycka" and "Pentatonika molowa"

  @US-1116
  Scenario: The switch is operable from the keyboard
    When I focus the switch with the Tab key
    Then the focus is clearly visible
    And Space turns it on or off
    And the touch target is at least 44 px high
