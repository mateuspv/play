import util from 'util';

class _Keyword_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'keyword';
  }

  toString() {
    return this.value;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  get value() {
    return this.expr;
  }

  set value(val) {
    this.value = val;
  }
}

export default _Keyword_;
