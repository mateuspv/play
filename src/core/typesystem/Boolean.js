import chalk from 'chalk';

class _Boolean_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'boolean';
    this.value = expr === 'true';
  }

  inspect() {
    return chalk.green(this.value);
  }
}

export default _Boolean_;
