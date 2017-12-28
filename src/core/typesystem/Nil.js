class _Nil_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'nil';
  }

  get value() {
    return null;
  }

  set value(val) {
    this.value = val;
  }
}

export default _Nil_;
