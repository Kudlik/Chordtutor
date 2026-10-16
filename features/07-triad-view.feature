@mvp @epic-triads
Feature: Triad only toggle
  As a bass player, or any learner who wants the core of a chord
  I want to see only the three essential notes of a chord
  So that I can learn root, third and fifth before the extensions

  Background:
    Given I am on the Chord Explorer

  @US-703
  Scenario: A toggle reduces any chord to its triad
    Given "C" "7" is selected
    When I turn on "Triad only"
    Then only the notes "C", "E" and "G" are shown
    And the degrees shown are "1", "3" and "5"

  @US-704
  Scenario Outline: The triad of each four-note chord
    Given the chord "C" "<type>" is selected
    When I turn on "Triad only"
    Then the shown notes are <notes>

    Examples:
      | type  | notes     |
      | 7     | C, E, G   |
      | maj7  | C, E, G   |
      | m7    | C, Eb, G  |
      | dim7  | C, Eb, Gb |
      | 7sus4 | C, F, G   |

  @US-705
  Scenario: Triad only on a chord without a third
    Given "C" "5" is selected
    When I look at the "Triad only" toggle
    Then it is disabled
    And a hint explains that the chord has only two notes

  @US-706
  Scenario: Triad only works for every instrument
    Given "Triad only" is on
    When I switch the instrument to "Bass"
    Then only the three triad tones are shown in each bass position

  @US-707
  Scenario: Triad only is remembered while I browse chords
    Given "Triad only" is on
    When I select another root
    Then "Triad only" is still on

  @US-708
  Scenario: The explanation mentions the triad
    Given "C" "7" is selected
    When I turn on "Triad only"
    Then the explanation points out that the triad of this chord is "C Major"
