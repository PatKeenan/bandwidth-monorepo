const inquirer = require('inquirer');
const process = require('process');

(async function main() {
  await inquirer
    .prompt([
      {
        name: 'user_name',
        type: 'input',
        message: 'What is your name?',
      },
    ])
    .then((answer) => {
      console.log('Hello ' + answer.user_name);
    });
})();
