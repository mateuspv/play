import util from 'util';

class _Boolean_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'boolean';
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

export default _Boolean_;
