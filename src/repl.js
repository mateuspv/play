#!/usr/bin/env node

import repl from 'repl';
import chalk from 'chalk';

import readEval from './core/index';

repl.start({
  prompt: chalk.yellow('► '),

  eval(cmd, context, filename, callback) {
    if (cmd === '(\n)') {
      return callback(null);
    }

    return callback(null, readEval(cmd));
  },
});
