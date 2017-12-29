import chalk from 'chalk';

class _String_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'string';
    this.value = this.expr;
  }

  inspect() {
    return chalk.cyan(this.value);
  }
}

export default _String_;
