class _Symbol_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'symbol';
  }

  get value() {
    return this.expr;
  }

  set value(val) {
    this.value = val;
  }
}

export default _Symbol_;
