Feature: Register user

    Scenario: I as a user want to sign up with invalid email
        Given the email "test@"
        And the name "Leonardo Farias"
        And the password "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with email in caps lock
        Given the email "LEONARDO-TEST@GMAIL.COM"
        And the name "Leonardo Farias"
        And the password "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with a short name
        Given the email "test@gmail.com"
        And the name "Le"
        And the password "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with a big name
        Given the email "test@gmail.com"
        And the name "Leonardo Farias Galvão Lorem Ipsum"
        And the password "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with a shot password
        Given the email "test@gmail.com"
        And the name "Leonardo Farias Galvão"
        And the password "12"
        Then response status should be 400

    Scenario: I as a user want to sign up with a big password
        Given the email "test@gmail.com"
        And the name "Leonardo Farias Galvão"
        And the password "1234567891234567891234567891234568975"
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