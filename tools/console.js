const fs = require('fs');
const repl = require('repl');

const addUser = require('../src/services/addUser');
const deleteUser = require('../src/services/deleteUser');
const { requestChangePassword, verifyPassword } = require('../src/services/changeUserPassword');

const context = {
  addUser,
  deleteUser,
  requestChangePassword,
  verifyPassword,
};

const moduleCompletions = Object.keys(context);
const commandCompletions = ['.break', '.clear', '.editor', '.exit', '.help', '.load', '.save'];
const completions = [...moduleCompletions, ...commandCompletions];

function completer(line) {
  const hits = completions.filter((c) => c.startsWith(line));
  // Show all completions if none found
  return [hits.length ? hits : completions, line];
}

const r = repl.start({ completer });

Object.assign(r.context, context);
r.context.completions = completions; // for debugging completions
