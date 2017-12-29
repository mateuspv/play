class _Keyword_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'keyword';
  }

  inspect() {
    return `[Keyword ${this.value}]`;
  }

  get value() {
    return this.expr;
  }

  set value(val) {
    this.value = val;
  }
}

export default _Keyword_;
