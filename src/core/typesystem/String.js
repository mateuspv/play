class _String_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'string';
  }

  inspect() {
    return `[String ${this.value}]`;
  }

  get value() {
    return this.expr;
  }

  set value(val) {
    this.value = val;
  }
}

export default _String_;
