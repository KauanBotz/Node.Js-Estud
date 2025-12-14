import inquirer from 'inquirer';
import chalk from 'chalk';

try {
  inquirer.prompt([
    {
      name: 'p1',
      message: 'Qual é o seu nome?',
    },
    {
      name: 'p2',
      message: 'Qual é a sua idade?',
    }
  ]).then((answers) => {
    console.log(chalk.bgYellow.black(`Nome dele é ${answers.p1} e a idade dele é ${answers.p2}`));
  }).catch((err) => {
    console.log(`Erro no prompt: ${err}`);
  });
} catch (err) {
  console.log(`Erro no try: ${err}`);
}
