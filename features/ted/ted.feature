Feature: Transfer TED

    Scenario: I as a user want to trasnfer R$ 50,00 to my friend
        Given the account number 54263211 and branch 21453
        When entering account data to do the transfer with account number 1459785, branch 1030 and value 50
        Then response status ted should be 201