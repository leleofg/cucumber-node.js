Feature: Is it Friday yes?
    Everybody wantas to know when it's Friday

    Scenario Outline: Today is or not Friday
        Given today is <day>
        When I ask whether its Friday yet
        Then I should be told <answer>

    Examples:
        | day      | answer |
        | "Friday" | "TGIF" |
        | "Sunday" | "Nope" |