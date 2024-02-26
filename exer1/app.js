
const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        rl.question('Digite o terceiro número: ', (num3) => {
            rl.question('Digite o quarto número: ', (num4) => {
                const media = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4)) / 4;
                console.log(`A média dos números é: ${media}`);
                rl.close();
            });
        });
    });
});