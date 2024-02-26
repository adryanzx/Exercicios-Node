const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.question('Digite a primeira nota: ', (nota1) => {
    rl.question('Digite a segunda nota: ', (nota2) => {
        const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        console.log(`A média é: ${media.toFixed(2)}`);
        if (media >= 6.0) {
            console.log('Aluno aprovado!');
        } else {
            console.log('Aluno reprovado!');
        }
        rl.close();
    });
});