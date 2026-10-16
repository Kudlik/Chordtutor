@mvp @epic-chord-selection
Feature: Choosing a chord
  As a learner
  I want to pick any root and any chord type
  So that I can study how every chord is built

  Background:
    Given I am on the Chord Explorer

  @US-401
  Scenario: Twelve root buttons are available
    Then I see root buttons for "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"

  @US-402
  Scenario: Black-key roots show both names
    When I look at the root button for the note between C and D
    Then it is labelled "C#/Db"

  @US-403
  Scenario Outline: Choosing a black-key root sets the spelling
    When I select the root "<root>"
    Then the chord name reads "<chord_name>"
    And the chord notes are spelled "<notes>"

    Examples:
      | root | chord_name | notes       |
      | C#   | C# Major   | C#, E#, G#  |
      | Db   | Db Major   | Db, F, Ab   |
      | F#   | F# Major   | F#, A#, C#  |
      | Gb   | Gb Major   | Gb, Bb, Db  |

  @US-404
  Scenario: Black-key root buttons let me pick the sharp or the flat name
    When I select the root button "C#/Db"
    Then I am asked, or can switch between, "C#" and "Db"
    And the selected name is highlighted

  @US-405
  Scenario: Chord types are listed as one set of variants
    Then I see a "Variant" section below the "Root" section
    And it contains one button each for "Major", "Minor", "7", "5", "dim", "dim7", "aug", "sus2", "sus4", "maj7", "m7" and "7sus4", in that order
    And the buttons are not split into groups

  @US-406
  Scenario: Every combination of root and type exists
    Given the 12 roots and the 12 chord types
    When I select any root with any chord type
    Then the chord title, the fretboard and the explanation are shown
    And no combination shows an empty or error state

  @US-407
  Scenario: Major is the default type, C is the default root
    Given I have never selected a chord
    When I open the Chord Explorer
    Then "C" "Major" is selected

  @US-408
  Scenario: The selected chord is shown in the title
    When I select "A#/Bb" with the sharp name and the type "m7"
    Then the title reads "A# m7"

  @US-409
  Scenario: The selected chord is in the URL
    When I select "G" "7" on "Ukulele"
    Then the page address contains the chord and the instrument
    And opening that address on another device shows the same chord and instrument

  @US-410
  Scenario: Switching the chord type does not reset the root
    Given "E" "Minor" is selected
    When I select the type "7"
    Then the root is still "E"
    And the chord is "E 7"
