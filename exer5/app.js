const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question('Digite o comprimento do lado 1: ', (lado1) => {
    rl.question('Digite o comprimento do lado 2: ', (lado2) => {
        const area = parseFloat(lado1) * parseFloat(lado2);
        console.log(`A área do retângulo/quadrado é: ${area}`);
        if (lado1 === lado2) {
            console.log('A figura é um quadrado.');
        } else {
            console.log('A figura é um retângulo.');
        }
        rl.close();
    });
});