@epic-spelling
Feature: Simplified or theoretically correct note names
  As a learner
  I want to choose how notes are named
  So that I can learn the basics simply, or learn the names theory and sheet music use

  Notes that need a double flat or double sharp in theory (for example the seventh of F dim7, or the third of D# Major)
  are shown either as the plain note or with their theoretically correct name.

  @US-1201
  Scenario: A modal asks for the choice on the first visit
    Given I have never chosen how notes are named
    When I open the app
    Then a modal asks "How should notes be named?"
    And it describes "Simplified" and "Theoretically correct" side by side
    And neither option is pre-selected

  @US-1202
  Scenario: The modal explains both ways and the risk of the simplified one
    When the modal is shown
    Then "Simplified" is described as for musicians who only want the basics of chords
    And it warns that learners who develop further may have picked up wrong names
    And "Theoretically correct" is described as matching theory books and sheet music
    And each description gives the example "F dim7"

  @US-1203
  Scenario: The modal cannot be skipped
    When the modal is shown
    Then it has no close button
    And pressing Escape does not close it
    And clicking outside it does not close it
    And the app can only be used after one of the two options is chosen

  @US-1204
  Scenario: The consent modal follows the spelling modal
    Given I have never chosen how notes are named
    And I have never made an analytics choice
    When I choose one of the options
    Then the analytics consent modal is shown next

  @US-1205
  Scenario: The choice is remembered
    Given I chose "Theoretically correct"
    When I return to the app later on the same device
    Then the modal is not shown
    And the notes are shown with theoretically correct names

  @US-1206
  Scenario: The choice can be changed in the settings
    Given I chose "Simplified"
    When I open the settings
    Then I see the section "Note names" with the options "Simplified" and "Theoretically correct"
    When I choose "Theoretically correct"
    Then every note name in the app changes immediately
    And my selected chord and instrument are kept

  @US-1207
  Scenario Outline: Chord notes in both modes
    Given the note names are set to "<mode>"
    When I select the chord "<root>" "<type>"
    Then the chord consists of the notes <notes>

    Examples:
      | mode                  | root | type  | notes           |
      | Simplified            | F    | dim7  | F, Ab, Cb, D    |
      | Theoretically correct | F    | dim7  | F, Ab, Cb, Ebb  |
      | Simplified            | D#   | Major | D#, G, A#       |
      | Theoretically correct | D#   | Major | D#, F##, A#     |
      | Simplified            | Gb   | Minor | Gb, A, Db       |
      | Theoretically correct | Gb   | Minor | Gb, Bbb, Db     |
      | Simplified            | C    | Major | C, E, G         |
      | Theoretically correct | C    | Major | C, E, G         |

  @US-1208
  Scenario: Both modes always describe the same sounds
    Given the 12 roots and the 12 chord types
    Then for every chord the notes of "Simplified" and "Theoretically correct" are the same pitches
    And "Simplified" never shows a double flat or double sharp
    # Verified by an automated test over all 144 combinations

  @US-1209
  Scenario: The explanation example uses the chosen names
    Given the note names are set to "Theoretically correct"
    When I select the chord "F" "dim7"
    Then "Example in F" lists "F, Ab, Cb, Ebb"
    And the notes on the fretboard, the legend and the scale use the same names

  @US-1210
  Scenario: The modal and settings are available in Polish
    Given the interface is in Polish
    Then the modal reads "Jak nazywać dźwięki?" with the options "Uproszczone" and "Teoretycznie poprawne"
    And the settings section is called "Nazwy dźwięków"
