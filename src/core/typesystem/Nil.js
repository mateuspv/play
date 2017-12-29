class _Nil_ {
  constructor() {
    this.expr = 'nil';
    this.type = 'nil';
  }

  inspect() {
    return `[Nil ${this.expr}]`;
  }

  get value() {
    return this.expr;
  }
}

export default _Nil_;
