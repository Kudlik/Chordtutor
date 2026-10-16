@mvp @epic-instrument
Feature: Instrument and handedness settings
  As a guitarist, bassist or ukulele player
  I want to set my instrument and playing hand
  So that the fretboard looks like the one in my hands

  Background:
    Given I am on the Chord Explorer

  @US-301
  Scenario Outline: Choosing an instrument
    When I select the instrument "<instrument>"
    Then the fretboard shows <strings> strings
    And the open strings, from thickest or lowest to thinnest, are labelled <tuning>
    And the fretboard shows frets 0 to 15

    Examples:
      | instrument | strings | tuning                |
      | Guitar     | 6       | E, A, D, G, B, E      |
      | Bass       | 4       | E, A, D, G            |
      | Ukulele    | 4       | G, C, E, A            |

  @US-302
  Scenario: Guitar is the default instrument
    Given I have never chosen an instrument
    When I open the Chord Explorer
    Then the instrument is "Guitar"

  @US-303
  Scenario: Switching instrument keeps the selected chord
    Given I selected the chord "A" "Minor" on "Guitar"
    When I switch the instrument to "Ukulele"
    Then the chord "A Minor" is still selected
    And the voicing list is replaced by the Ukulele voicings for "A Minor"

  @US-304
  Scenario Outline: Left-handed mode mirrors the fretboard
    Given the instrument is "<instrument>"
    When I turn on the left-handed mode
    Then the nut is on the right side of the fretboard
    And the fret numbers run from right to left
    And the string order and the chord notes are unchanged

    Examples:
      | instrument |
      | Guitar     |
      | Bass       |
      | Ukulele    |

  @US-305
  Scenario: Left-handed mode applies to every instrument
    Given I turned on the left-handed mode while on "Guitar"
    When I switch the instrument to "Bass"
    Then the left-handed mode is still on

  @US-306
  Scenario: The ukulele uses re-entrant tuning
    Given the instrument is "Ukulele"
    Then the fourth string is the high G, tuned above the C string
    And there is no option to switch to a low G string

  @US-308
  Scenario: Only standard tuning is available
    When I open the settings
    Then I see no option to change the tuning

  @US-309
  Scenario: Settings are remembered without an account
    Given I chose "Bass" with left-handed mode on
    When I return to the app later on the same device
    Then "Bass" and left-handed mode are restored

  @US-310
  Scenario: The app works when browser storage is unavailable
    Given my browser blocks local storage
    When I open the app and change a setting
    Then the setting applies for the current visit
    And no error is shown
