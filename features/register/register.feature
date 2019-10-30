Feature: Register user

    Scenario: I as a user want to sign up without email
        Given the email ""
        And the name "Leonardo Farias"
        And the password "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up without email, name and password
        Given the email ""
        And the name ""
        And the password ""
        Then response status should be 400

    Scenario: I as a user want to sign up
        Given the email "leoo.farias@gmail.com"
        And the name "Leonardo Farias"
        And the password "123456"
        Then response status should be 201

    Scenario: I as a user want to sign up with the same email register before
        Given the email "leoo.farias@gmail.com"
        And the name "Leonardo Farias"
        And the password "123456"
        Then response status should be 400