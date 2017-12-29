import chalk from 'chalk';

class _Nil_ {
  constructor() {
    this.expr = 'nil';
    this.type = 'nil';
    this.value = this.expr;
  }

  inspect() {
    return chalk.gray(this.expr);
  }
}

export default _Nil_;
