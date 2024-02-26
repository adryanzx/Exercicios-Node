const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function determinarMaiorNumero(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function receberDados() {
  rl.question('Digite o primeiro número inteiro: ', (num1) => {
    rl.question('Digite o segundo número inteiro: ', (num2) => {
      rl.question('Digite o terceiro número inteiro: ', (num3) => {
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);

        
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
          console.log('Por favor, digite valores inteiros válidos.');
        } else {
          const maiorNumero = determinarMaiorNumero(num1, num2, num3);
          console.log(`O maior número digitado é: ${maiorNumero}`);
        }

        rl.close();
      });
    });
  });
}

receberDados();
