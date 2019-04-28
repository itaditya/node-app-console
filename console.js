const repl = require('repl');

const addUser = require('./usecases/addUser.js');

const msg = 'messagsjfbe';

const context = {
  msg,
  addUser,
};

function completer(line) {
  const completions = Object.keys(context);
  const hits = completions.filter((c) => c.startsWith(line));
  // Show all completions if none found
  return [hits.length ? hits : completions, line];
}

const r = repl.start({ completer });

Object.assign(r.context, context);
