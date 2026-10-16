@mvp @epic-content
Feature: Written explanation of each chord type
  As a learner
  I want to read what a chord type is, how it sounds and how it is built
  So that I understand the idea behind it

  Background:
    Given I am on the Chord Explorer

  @US-801
  Scenario: An explanation sits below the chord options
    When I select the chord type "Minor"
    Then an explanation is shown below the root and type buttons
    And it is shown without leaving the page

  @US-802
  Scenario: The explanation changes with the type
    Given the explanation for "Minor" is shown
    When I select the type "7"
    Then the explanation for "7" replaces it

  @US-803
  Scenario: The explanation does not change with the root
    Given the explanation for "Major" is shown with the root "C"
    When I select the root "F#"
    Then the same explanation text for "Major" is shown
    But any worked example in it uses the root "F#"

  @US-804
  Scenario Outline: Every explanation has the same three parts
    When I select the chord type "<type>"
    Then the explanation contains a section "What it is"
    And a section "How it sounds"
    And a section "How it is built"

    Examples:
      | type  |
      | Major |
      | Minor |
      | 5     |
      | 7     |
      | dim   |
      | dim7  |
      | aug   |
      | sus2  |
      | sus4  |
      | maj7  |
      | m7    |
      | 7sus4 |

  @US-805
  Scenario Outline: "How it is built" shows the formula
    When I select the chord type "<type>"
    Then "How it is built" lists the steps from the root as "<steps>"
    And lists the degrees as "<degrees>"
    And gives the chord for the selected root as a worked example

    Examples:
      | type  | steps        | degrees        |
      | Major | 4, 7         | 1, 3, 5        |
      | Minor | 3, 7         | 1, b3, 5       |
      | 5     | 7            | 1, 5           |
      | 7     | 4, 7, 10     | 1, 3, 5, b7    |
      | dim   | 3, 6         | 1, b3, b5      |
      | dim7  | 3, 6, 9      | 1, b3, b5, bb7 |
      | aug   | 4, 8         | 1, 3, #5       |
      | sus2  | 2, 7         | 1, 2, 5        |
      | sus4  | 5, 7         | 1, 4, 5        |
      | maj7  | 4, 7, 11     | 1, 3, 5, 7     |
      | m7    | 3, 7, 10     | 1, b3, 5, b7   |
      | 7sus4 | 5, 7, 10     | 1, 4, 5, b7    |

  @US-806
  Scenario: The worked example matches the fretboard
    When I select the chord "D" "Minor"
    Then the notes in the written example are the same as those on the fretboard

  @US-807
  Scenario: Relationships between chords are explained
    When I select the chord type "maj7"
    Then the explanation says it is a major chord plus a note 11 steps up
    And it links to the "Major" type

  @US-808
  Scenario: The explanation is available in Polish and English
    Given the interface is in Polish
    When I select the chord type "Minor"
    Then the explanation is shown in Polish

  @US-809
  Scenario: Explanation text comes from the supplied content sheet
    Given the content sheet "A Music Theory"
    Then every explanation is derived from it
    And any statement that differs from it is listed in the README for approval
    # The sheet spells notes with sharps only; the app uses theoretically correct spelling (see README)

  @US-810
  Scenario: A short glossary is reachable from the explanation
    When I read an explanation containing the word "semitone" or "degree"
    Then I can open a short definition of the term without leaving the page
