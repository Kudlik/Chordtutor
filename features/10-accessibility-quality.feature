@mvp @epic-quality
Feature: Accessibility and quality
  As any learner, including those with limited vision or using only a keyboard
  I want the app to be usable and readable
  So that nobody is excluded from learning chord theory

  @US-1001
  Scenario: Colour is never the only carrier of meaning
    When I look at a chord on the fretboard
    Then each degree is identifiable by its text label as well as by its colour
    And the root has a marker that does not rely on colour

  @US-1002
  Scenario: Colours work for common colour-blindness
    Given a colour-blindness simulation for deuteranopia, protanopia and tritanopia
    When I view "C" "7sus4"
    Then every pair of degree colours in the chord can be told apart

  @US-1003
  Scenario: Text contrast meets WCAG AA
    Then the labels on dots, buttons and explanations have a contrast ratio of at least 4.5 to 1
    And this holds in light and dark themes

  @US-1004
  Scenario: The app can be used with the keyboard only
    When I press Tab repeatedly
    Then focus moves through settings, roots, types, voicings and toggles in a logical order
    And the focused element is clearly visible
    And Enter or Space activates it

  @US-1005
  Scenario: A text alternative describes the fretboard
    Given a screen reader is in use
    When I select "C" "Major" with voicing "1"
    Then the fretboard has a text description listing each string with its fret, note and degree

  @US-1006
  Scenario: Touch targets are large enough
    Given I use a phone
    Then every button is at least 44 by 44 px

  @US-1007
  Scenario: Text can be enlarged
    When I increase the browser text size to 200 percent
    Then no content is cut off or overlapping

  @US-1008
  Scenario: Dark mode follows the system setting
    Given my system uses a dark theme
    When I open the app
    Then the app is shown in a dark theme

  @US-1009
  Scenario: The app loads quickly on mobile
    Given a mid-range phone on a 4G connection
    When I open the app for the first time
    Then the chord and fretboard are visible within 3 seconds

  @US-1010
  Scenario: Supported browsers
    Then the app works in the current and previous major versions of Chrome, Safari, Firefox and Edge
    And on iOS Safari and Android Chrome

  @US-1011
  Scenario: Chord theory is verified automatically
    Given the chord formulas and the spelling rules
    Then an automated test checks the notes and degrees of all 144 root and type combinations
    And the tests fail if any combination is spelled incorrectly
