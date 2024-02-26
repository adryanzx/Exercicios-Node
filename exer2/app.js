const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function calcularPrecoVenda(precoUnitario, quantidade, desconto) {
  const precoTotal = precoUnitario * quantidade;
  const precoComDesconto = precoTotal - desconto;
  return precoComDesconto;
}


function receberDados() {
  rl.question('Digite o preço unitário do produto: ', (precoUnitario) => {
    rl.question('Digite a quantidade vendida: ', (quantidade) => {
      rl.question('Digite o valor do desconto: ', (desconto) => {
       
        precoUnitario = parseFloat(precoUnitario);
        quantidade = parseFloat(quantidade);
        desconto = parseFloat(desconto);
        
       
        if (isNaN(precoUnitario) || isNaN(quantidade) || isNaN(desconto)) {
          console.log('Por favor, digite valores numéricos válidos.');
        } else {
          const precoVenda = calcularPrecoVenda(precoUnitario, quantidade, desconto);
          console.log(`O preço de venda do produto é: R$ ${precoVenda.toFixed(2)}`);
        }
        
        
        rl.close();
      });
    });
  });
}


receberDados();