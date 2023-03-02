#5) Escreva um programa que inverta os caracteres de um string.

#IMPORTANTE:

#a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
 #b) Evite usar funções prontas, como, por exemplo, reverse;

# Definição da string a ser invertida
string = "hello world"

# Conversão da string em uma lista de caracteres
lista = list(string)

# Inversão da lista
lista_reversa = []
for i in range(len(lista)):
    lista_reversa.append(lista[len(lista)-i-1])

# Conversão da lista de volta para string
string_reversa = "".join(lista_reversa)

# Impressão da string invertida
print(string_reversa)