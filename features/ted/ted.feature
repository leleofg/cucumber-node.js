Feature: Transferência TED entre contas PF

    Scenario: como usuário PF quero transferir R$ 50,00 para outra conta PF
        Given número de conta origem 54263211 e agencia 21453
        And saldo atual de 120
        When digitar número da conta a ser realizada a trasnferência 1459785 e agencia 1030
        And valor a ser transferido de 50
        Then o status de resposta da transferencia TED deve ser 201
        And e o saldo deve ser de 70
