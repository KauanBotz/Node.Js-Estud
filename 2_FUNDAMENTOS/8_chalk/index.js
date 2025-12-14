import chalk from 'chalk';

const nota = 5;

if (nota >= 7) {
    console.log(chalk.green('Parabéns você está aprovado'));
} else {
    console.log(chalk.bgRed('Você está reprovado!'));
}