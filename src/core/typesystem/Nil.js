import chalk from 'chalk';

class _Nil_ {
  constructor() {
    this.expr = 'nil';
    this.type = 'nil';
  }

  inspect() {
    return chalk.gray(this.expr);
  }

  get value() {
    return this.expr;
  }
}

export default _Nil_;
