const inquirer = require('inquirer');
const pool = require('./config/connection');

const logo = `
░█▀▀░█▄█░█▀█░█░░░█▀█░█░█░█▀▀░█▀▀░░░█▀▄░█▀█░█░█░█▀█░█▀▄░█░█░█▀█░█
░█▀▀░█░█░█▀▀░█░░░█░█░░█░░█▀▀░█▀▀░░░█▀▄░█░█░█░█░█░█░█░█░█░█░█▀▀░▀
░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀▀░░░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀░░░▀
by: Jose Arambula
`;


console.log(logo);


const mainMenu = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ]
  });

 
  switch (action) {
    case 'View all departments':
      break;
    case 'View all roles':
       break;
    case 'View all employees':
      break;
    case 'Add a department':
      break;
    case 'Add a role':
      break;
    case 'Add an employee':
      break;
    case 'Update an employee role':
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
      break;
    default:
      console.log('Invalid choice');
  }
};

mainMenu();
