@mvp @epic-voicings
Feature: Voicings for each instrument
  As a learner
  I want to see several ways to play the same chord
  So that I understand that one chord can live in many places on the neck

  Background:
    Given I am on the Chord Explorer

  @US-601
  Scenario: Guitar and ukulele offer numbered voicings
    Given the instrument is "Guitar"
    When I select the chord "C" "Major"
    Then I see numbered voicing buttons, one per available voicing
    And the first voicing is selected

  @US-602
  Scenario: Choosing a voicing updates the fretboard
    Given "C" "Major" is selected on "Guitar"
    When I select voicing "2"
    Then the fretboard shows the second voicing
    And the notes and degrees shown still describe "C" "Major"

  @US-603
  Scenario: The selected voicing is remembered when switching the chord type
    Given voicing "2" is selected for "C" "Major"
    When I select the type "Minor"
    Then voicing "2" of "C" "Minor" is shown if it exists
    And otherwise voicing "1" is shown

  @US-604
  Scenario: Open-position voicings are listed first
    Given an open-position voicing exists for the selected chord
    Then it is voicing "1"
    And movable (barre) voicings follow, ordered from the lowest on the neck to the highest

  @US-605
  Scenario Outline: Movable shapes are transposed to every root
    Given a movable shape is defined for "<type>" with its root on the "<string>" string
    When I select the root "<root>" and the type "<type>"
    Then the shape is shown with its root on the correct fret
    And the notes shown match the chord formula

    Examples:
      | type  | string | root |
      | Major | A      | D    |
      | Major | E      | G    |
      | Minor | A      | F#   |

  @US-606
  Scenario: Voicings never exceed the fretboard
    When I select any root and type on "Guitar" or "Ukulele"
    Then every shown voicing lies within frets 0 to 15
    And a shape that would not fit is not offered

  @US-607
  Scenario: Every chord has at least one voicing on every instrument
    Given the 12 roots and the 12 chord types
    When I select any of them on any instrument
    Then at least one voicing is available

  @US-608
  Scenario: Every voicing is musically correct
    Given the voicing data
    Then for every voicing the sounding notes are exactly the notes of the chord formula
    And the root appears at least once
    And no string is marked sounding and muted at the same time
    # Verified by an automated test over the whole dataset

  @US-609
  Scenario: Bass voicings are generated from the chord formula
    Given the instrument is "Bass"
    When I select the chord "C" "Major"
    Then the voicings are generated positions of the chord tones
    And each position fits within a window of five frets
    And each position starts from a different string for the root

  @US-610
  Scenario: Bass shows chord tones, not grips
    Given the instrument is "Bass"
    When I select the chord "A" "Minor"
    Then the voicing shows only the notes "A", "C" and "E"
    And no muted-string markers are shown

  @US-611
  Scenario: The ukulele has its own voicings
    Given the instrument is "Ukulele"
    When I select the chord "C" "Major"
    Then the voicings are those defined for the ukulele
    And no guitar voicing is shown

  @US-613
  Scenario Outline: Ukulele power chords without a four-string shape are generated
    Given the instrument is "Ukulele"
    When I select the chord "<root>" "5"
    Then a voicing is shown on two adjacent strings with the other strings muted
    And its notes are exactly the root and the fifth

    Examples:
      | root |
      | A    |
      | A#   |
      | B    |
      | G#   |

  @US-612
  Scenario: Voicing data comes from a reviewed dataset
    Given the voicing dataset created from the supplied reference screenshots
    Then each voicing records its source
    And a voicing with no recorded review is not shipped
