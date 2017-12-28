import util from 'util';

class _Symbol_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'symbol';
  }

  toString() {
    return this.value;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  parseValue(x) {
    return x.slice(1, x.length - 1);
  }

  get value() {
    return this.parseValue(this.expr);
  }

  set value(val) {
    this.value = this.parseValue(val);
  }
}

export default _Symbol_;
