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
  Scenario: Double accidentals are shown as the plain enharmonic note
    Given the correct spelling of a scale note needs a double accidental
    Then the note is shown as the plain enharmonic note
    And a tooltip gives the theoretically correct spelling

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
