import util from 'util';

class _Number_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'number';
  }

  toString() {
    return this.value;
  }
  
  [util.inspect.custom]() {
    return this.toString();
  }

  get value() {
    return parseFloat(this.expr);
  }

  set value(val) {
    this.value = val;
  }
}

export default _Number_;
