const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularResistencia(tensao, corrente) {
  if (corrente === 0) {
    return Infinity; 
  } else {
    return tensao / corrente;
  }
}

function receberDados() {
  rl.question('Digite a tensão aplicada (V): ', (tensao) => {
    rl.question('Digite a corrente elétrica (A): ', (corrente) => {
      
      tensao = parseFloat(tensao);
      corrente = parseFloat(corrente);

   
      if (isNaN(tensao) || isNaN(corrente)) {
        console.log('Por favor, digite valores numéricos válidos.');
      } else {
        const resistencia = calcularResistencia(tensao, corrente);
        console.log(`A resistência do condutor é: ${resistencia.toFixed(2)} ohms`);
      }

      rl.close();
    });
  });
}

receberDados();
