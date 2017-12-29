import chalk from 'chalk';

class _Symbol_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'symbol';
    this.value = this.expr;
  }

  inspect() {
    return chalk.magenta(this.value);
  }
}

export default _Symbol_;
