import chalk from 'chalk';

class _String_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'string';
  }

  inspect() {
    return chalk.cyan(this.value);
  }

  get value() {
    return this.expr;
  }

  set value(val) {
    this.value = val;
  }
}

export default _String_;
