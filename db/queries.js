const pool = require('../config/connection');

const getDepartments = async () => {
  const result = await pool.query('SELECT * FROM department');
  return result.rows;
};

const getRoles = async () => {
  const result = await pool.query(`
    SELECT role.id, title, salary, department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id
  `);
  return result.rows;
};

const getEmployees = async () => {
  const result = await pool.query(`
    SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name AS manager
    FROM employee e
    JOIN role r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id
    LEFT JOIN employee m ON e.manager_id = m.id
  `);
  return result.rows;
};

const addDepartment = async (name) => {
  await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
};

const addRole = async (title, salary, department_id) => {
  await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
};

const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id || null]);
};

const updateEmployeeRole = async (employee_id, role_id) => {
  await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
};

const updateEmployeeManager = async (employee_id, manager_id) => {
  await pool.query('UPDATE employee SET manager_id = $1 WHERE id = $2', [manager_id || null, employee_id]);
};

const getEmployeesByManager = async (manager_id) => {
  const result = await pool.query(`
    SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department
    FROM employee e
    JOIN role r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id
    WHERE e.manager_id = $1
  `, [manager_id]);
  return result.rows;
};

const getEmployeesByDepartment = async (department_id) => {
  const result = await pool.query(`
    SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department
    FROM employee e
    JOIN role r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id
    WHERE d.id = $1
  `, [department_id]);
  return result.rows;
};

const deleteDepartment = async (id) => {
  await pool.query('DELETE FROM department WHERE id = $1', [id]);
};

const deleteRole = async (id) => {
  await pool.query('DELETE FROM role WHERE id = $1', [id]);
};

const deleteEmployee = async (id) => {
  await pool.query('DELETE FROM employee WHERE id = $1', [id]);
};

const getDepartmentBudget = async (department_id) => {
  const result = await pool.query(`
    SELECT SUM(r.salary) AS total_budget
    FROM employee e
    JOIN role r ON e.role_id = r.id
    WHERE r.department_id = $1
  `, [department_id]);
  return result.rows[0].total_budget;
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
  getEmployeesByManager,
  getEmployeesByDepartment,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
  getDepartmentBudget
};
