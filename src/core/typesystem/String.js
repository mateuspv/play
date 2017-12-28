import util from 'util';

class _String_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'string';
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

export default _String_;
