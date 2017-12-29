import chalk from 'chalk';

class _Keyword_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'keyword';
    this.value = this.expr;
  }

  inspect() {
    return chalk.yellow(this.value);
  }
}

export default _Keyword_;
