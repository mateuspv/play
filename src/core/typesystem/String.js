class _String_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'string';
  }

  get value() {
    return this.expr.slice(1, -1);
  }

  set value(val) {
    this.value = val;
  }
}

export default _String_;
