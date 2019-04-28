const fs = require('fs');
const repl = require('repl');

const addUser = require('../src/services/addUser');
const deleteUser = require('../src/services/deleteUser');
const { requestChangePassword, verifyPassword } = require('../src/services/changeUserPassword');

const s = {
  addUser,
  deleteUser,
  requestChangePassword,
  verifyPassword,
};

const r = repl.start();

r.context.s = s;
