class _Number_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'number';
  }

  get value() {
    return parseFloat(this.expr);
  }

  set value(val) {
    this.value = val;
  }
}

export default _Number_;
