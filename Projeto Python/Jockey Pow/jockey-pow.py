import random
print('''Suas opções:
[ 0 ] PEDRA
[ 1 ] PAPEL 
[ 2 ] TESOURA''')
jogada = int(input('Qual a sua jogada? '))
lista = [0, 1, 2]
sorteado = random.choice(lista)
itens = ('PEDRA', 'PAPEL', 'TESOURA')
if jogada >= 3:
    print('NÃO TEM ESSA OPÇÃO.')
elif jogada == sorteado:
    print(f'EMPATOU, eu também escolhi {itens[sorteado]}')
elif jogada != sorteado:
    if jogada == 0 and sorteado == 1:
        print('Eu ganhei, escolhi PAPEL.')
    elif jogada == 0 and sorteado == 2:
        print('Você ganhou, eu escolhi TESOURA.')
    elif jogada == 1 and sorteado == 0:
        print('Você ganhou, eu escolhi PEDRA.')
    elif jogada == 1 and sorteado == 2:
        print('Eu ganhei, escolhi TESOURA')
    elif jogada == 2 and sorteado == 0:
        print('Eu ganhei, escolhi PEDRA')
    elif jogada == 2 and sorteado == 1:
        print('Você ganhou, eu escolhi PAPEL.')
