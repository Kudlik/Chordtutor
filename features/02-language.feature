@mvp @epic-localisation
Feature: Polish and English interface
  As a Polish- or English-speaking learner
  I want to use the app in my language
  So that the theory is explained in words I understand

  @US-201
  Scenario Outline: The first language follows the browser
    Given my browser language is "<browser_language>"
    And I have never chosen a language in the app
    When I open the app
    Then the interface is shown in <app_language>

    Examples:
      | browser_language | app_language |
      | pl-PL            | Polish       |
      | en-GB            | English      |
      | de-DE            | English      |

  @US-202
  Scenario: Switching the language
    Given the interface is in English
    When I switch the language to Polish
    Then all labels, buttons, chord names, degree names and explanations are shown in Polish
    And the page reloads no data and keeps my selected chord and instrument

  @US-203
  Scenario: The chosen language is remembered
    Given I switched the language to Polish
    When I return to the app later on the same device
    Then the interface is shown in Polish

  @US-204
  Scenario: Note names stay the same in both languages
    Given the interface is in Polish
    When I select the chord "C" "Major"
    Then the notes are shown as "C", "E", "G"

  @US-206
  Scenario: The note B is always called B
    Given the interface is in Polish
    When I select the chord "G" "Major"
    Then the notes are shown as "G", "B", "D"
    And the name "H" is not used anywhere in the app

  @US-205
  Scenario: No hard-coded text outside translation files
    Given the codebase
    Then every user-visible string is loaded from a translation resource
    And a missing Polish string is reported at build time
