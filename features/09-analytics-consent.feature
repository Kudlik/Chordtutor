@mvp @epic-analytics
Feature: Analytics with consent
  As the owner of the app
  I want to understand who uses it and how
  So that I can improve it, while respecting visitors' privacy choices

  @US-901
  Scenario: A consent modal appears on the first visit
    Given I have never made an analytics choice
    When I open the app
    Then a consent modal is shown
    And it explains in plain language what is measured
    And it offers "Accept" and "Reject" with equal prominence

  @US-902
  Scenario: Nothing is measured before consent
    Given I have not yet answered the consent modal
    Then Google Analytics 4 is not loaded
    And no analytics cookies are set
    And no analytics requests are sent

  @US-903
  Scenario: Accepting enables analytics
    When I choose "Accept"
    Then Google Analytics 4 starts measuring my visit
    And my choice is stored on this device

  @US-904
  Scenario: Rejecting keeps analytics off
    When I choose "Reject"
    Then Google Analytics 4 is not loaded
    And the modal does not appear again on later visits

  @US-905
  Scenario: The choice can be changed at any time
    Given I rejected analytics
    When I click the privacy link in the footer
    And I choose "Accept"
    Then analytics starts measuring from that moment

  @US-906
  Scenario: Withdrawing consent stops measurement
    Given I accepted analytics
    When I open the privacy settings and choose "Reject"
    Then no further analytics requests are sent
    And analytics cookies are removed

  @US-907
  Scenario Outline: The owner can see the agreed metrics
    Given visitors have accepted analytics
    Then the analytics reports show "<metric>"

    Examples:
      | metric                         |
      | device category (mobile/desktop)|
      | country                        |
      | new users                      |
      | returning users                |
      | bounce rate                    |
      | average engagement time        |

  @US-908
  Scenario: The modal is available in both languages
    Given the interface is in Polish
    When the consent modal appears
    Then it is shown in Polish

  @US-909
  Scenario: The modal does not block the app for visitors who reject
    When I choose "Reject"
    Then every feature of the app works the same as for visitors who accept

  @US-910
  Scenario: No personal data is sent to analytics
    Given I accepted analytics
    Then IP addresses are anonymised
    And no chord search text or user-entered data is sent as an identifier

  @US-911
  Scenario: A privacy notice describes the analytics
    When I open the privacy notice
    Then it names the tool, the purpose, the retention period and how to withdraw consent
    And it states that the analytics data is kept for 12 months

  @US-912
  Scenario: Analytics data is kept for 12 months
    Given visitors have accepted analytics
    Then analytics data older than 12 months is deleted
    # GA4 offers only 2 or 14 months of event retention, see README
