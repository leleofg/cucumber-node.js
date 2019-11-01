Feature: Register user

    Scenario: I as a user want to sign up with invalid email
        Given the register screen
        When fills the fields with "Leonardo Farias", "test@" and "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with email in caps lock
        Given the register screen
        When fills the fields with "Leonardo Farias", "LEONARDO-TEST@GMAIL.COM" and "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with a short name
        Given the register screen
        When fills the fields with "Le", "test@gmail.com" and "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with a big name
        Given the register screen
        When fills the fields with "Leonardo Farias Galvão Lorem Ipsum", "test@gmail.com" and "123456"
        Then response status should be 400

    Scenario: I as a user want to sign up with a shot password
        Given the register screen
        When fills the fields with "Leonardo Farias Galvão", "test@gmail.com" and "12"
        Then response status should be 400

    Scenario: I as a user want to sign up with a big password
        Given the register screen
        When fills the fields with "Leonardo Farias Galvão", "test@gmail.com" and "1234567891234567891234567891234568975"
        Then response status should be 400

    Scenario: I as a user want to sign up without email, name and password
        Given the register screen
        When fills the fields with "", "" and ""
        Then response status should be 400

    Scenario: I as a user want to sign up
        Given the register screen
        When fills the fields with "Leonardo Farias", "leoo.farias@gmail.com" and "123456"
        Then response status should be 201

    Scenario: I as a user want to sign up with the same email register before
        Given the register screen
        When fills the fields with "Leonardo Farias", "leoo.farias@gmail.com" and "123456"
        Then response status should be 400