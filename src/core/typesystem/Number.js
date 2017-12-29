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

  set value(val) {
    this.value = val;
  }
}

export default _Number_;
