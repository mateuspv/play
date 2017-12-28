import util from 'util';

class _Nil_ {
  constructor() {
    this.expr = 'nil';
    this.type = 'nil';
  }

  toString() {
    return this.expr;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  get value() {
    return this.expr;
  }
}

export default _Nil_;
