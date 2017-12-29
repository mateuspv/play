import chalk from 'chalk';

class _Function_ {
  constructor(name) {
    this.expr = 'function';
    this.name = name;
    this.type = 'function';
  }

  invoke() {
    throw Error('missing function implementation');
  }

  inspect() {
    return chalk.red(`[Function ${this.name}]`);
  }

  get value() {
    return this.expr;
  }
}

export default _Function_;
