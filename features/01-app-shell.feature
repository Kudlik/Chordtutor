@mvp @epic-app-shell
Feature: App shell, access and platforms
  As a beginner or self-taught musician
  I want to open the app and start learning immediately on any device
  So that nothing stands between me and understanding how chords are built

  Background:
    Given the app is deployed as a responsive website

  @US-101
  Scenario: Using the app requires no signup
    When I open the app for the first time
    Then I see the Chord Explorer without any login, registration or paywall
    And no account is created for me

  @US-102
  Scenario Outline: The layout adapts to the device
    Given I open the app on a <device> with a viewport width of <width> px
    Then the fretboard is fully visible without horizontal page scrolling
    And all controls are reachable without zooming

    Examples:
      | device  | width |
      | phone   | 375   |
      | tablet  | 768   |
      | desktop | 1280  |

  @US-103
  Scenario: The fretboard turns vertical on narrow screens
    Given I open the app on a phone in portrait orientation
    Then the fretboard is drawn vertically
    And the note and degree labels on the dots remain readable

  @US-104
  Scenario: The app can be installed as a PWA
    Given I use a browser that supports installing web apps
    When I choose to install the app
    Then the app opens in its own window with its own icon

  @US-105
  Scenario: The app works offline after the first visit
    Given I have opened the app once while online
    When I open the app again with no network connection
    Then the Chord Explorer loads
    And all chords, voicings and explanations are available

  @US-106
  Scenario: Navigation is ready for additional tabs
    When I look at the main navigation
    Then I see "Chord Explorer" as the only tab
    And the navigation is built so further tabs can be added later

  @US-107
  Scenario: The footer links to the privacy settings
    When I scroll to the bottom of any page
    Then I see a link that reopens the analytics consent settings
