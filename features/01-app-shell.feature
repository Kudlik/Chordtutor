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
    Then I see the "Full chords" tab without any login, registration or paywall
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
    Then the "Full chords" tab loads
    And all chords, voicings and explanations are available

  @US-106
  Scenario: The main navigation has three tabs
    When I look at the main navigation
    Then I see the tabs "Full chords", "Power chords" and "Chord inversions", in that order
    And the open tab is highlighted
    And the navigation is built so further tabs can be added later

  @US-110
  Scenario: Switching tabs keeps the root, the instrument and the settings
    Given I selected the root "G" and the instrument "Ukulele" on the "Full chords" tab
    When I open the "Chord inversions" tab
    Then the root is still "G" and the instrument is still "Ukulele"
    And left-handed mode, note names, theme and language are unchanged

  @US-111
  Scenario: The tab is part of the address
    When I open the "Power chords" tab
    Then the page address contains the tab, the chord and the instrument
    And opening that address on another device shows the same tab and chord

  @US-112
  Scenario: The navigation fits on a phone
    Given I open the app on a phone with a viewport width of 375 px
    Then all three tabs are visible on one row below the title, without scrolling

  @US-107
  Scenario: The footer links to the privacy settings
    When I scroll to the bottom of any page
    Then I see a link that reopens the analytics consent settings

  @US-108
  Scenario: The settings show the author's social links
    When I open the settings
    Then below the author credit I see links to "Spotify" and "LinkedIn"
    And each link opens the author's page in a new tab

  @US-109
  Scenario Outline: The content is centred and fills the width of the screen
    Given I open the app on a <device> with a viewport width of <width> px
    Then the controls and the chord card start and end at the same distance from the left and right edges
    And no empty strip is left to the right of the controls

    Examples:
      | device  | width |
      | phone   | 393   |
      | tablet  | 768   |
      | desktop | 1280  |
