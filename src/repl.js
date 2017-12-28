#!/usr/bin/env node

import repl from 'repl';
import readEval from './core/index';

repl.start({
  prompt: '\x1b[33m►\x1b[0m ',

  writer(output) {
    return output;
  },

  eval(cmd, context, filename, callback) {
    if (cmd === '(\n)') {
      return callback(null);
    }
    
    return callback(null, readEval(cmd));
  },
});
