import util from 'util';

class _Nil_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'nil';
  }

  toString() {
    return this.value;
  }
  
  [util.inspect.custom]() {
    return this.toString();
  }

  get value() {
    return null;
  }

  set value(val) {
    this.value = val;
  }
}

export default _Nil_;
