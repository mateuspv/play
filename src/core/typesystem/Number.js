import chalk from 'chalk';

class _Number_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'number';
  }

  inspect() {
    return chalk.white(this.value);
  }

  get value() {
    return parseFloat(this.expr);
  }
}

export default _Number_;
