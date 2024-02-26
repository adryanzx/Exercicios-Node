const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question('Digite um número inteiro: ', (numero) => {
    let fatorial = 1;
    for (let i = 1; i <= parseInt(numero); i++) {
        fatorial *= i;
    }
    console.log(`A fatorial de ${numero} é: ${fatorial}`);
    rl.close();
});
 