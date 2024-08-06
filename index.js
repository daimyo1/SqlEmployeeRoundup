const inquirer = require('inquirer');

// Define your ASCII art logo
const logo = `
░█▀▀░█▄█░█▀█░█░░░█▀█░█░█░█▀▀░█▀▀░░░█▀▄░█▀█░█░█░█▀█░█▀▄░█░█░█▀█░█
░█▀▀░█░█░█▀▀░█░░░█░█░░█░░█▀▀░█▀▀░░░█▀▄░█░█░█░█░█░█░█░█░█░█░█▀▀░▀
░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░░▀░░▀▀▀░▀▀▀░░░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀░░▀▀▀░▀░░░▀
by: Jose Arambula
`;

// Display the logo
console.log(logo);

// Your existing code for CLI interactions
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

  // Handle user choices
  switch (action) {
    case 'View all departments':
      // Your code to view departments
      break;
    case 'View all roles':
      // Your code to view roles
      break;
    case 'View all employees':
      // Your code to view employees
      break;
    case 'Add a department':
      // Your code to add a department
      break;
    case 'Add a role':
      // Your code to add a role
      break;
    case 'Add an employee':
      // Your code to add an employee
      break;
    case 'Update an employee role':
      // Your code to update an employee role
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
