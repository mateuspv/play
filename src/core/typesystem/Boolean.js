class _Boolean_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'boolean';
  }

  inspect() {
    return `[Boolean ${this.value}]`;
  }

  get value() {
    return this.expr;
  }

  set value(val) {
    this.value = val;
  }
}

export default _Boolean_;
