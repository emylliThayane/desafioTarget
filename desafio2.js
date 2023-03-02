//2) Dado a sequência de fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
 //(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
 //ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

R: function fibonacci(numero) {
  // inicializa as variáveis com os dois primeiros valores da sequência
  let anterior = 0;
  let atual = 1;

  // loop para calcular os valores da sequência até o número informado
  while (atual < numero) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  // verifica se o número informado pertence à sequência
  if (atual === numero) {
    console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
  }
}

// exemplo de uso da função com o número 13
fibonacci(13);