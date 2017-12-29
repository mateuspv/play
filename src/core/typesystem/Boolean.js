class _Boolean_ {
  constructor(expr) {
    this.expr = expr;
    this.type = 'boolean';
    this.value = expr === 'true';
  }

  inspect() {
    return `[Boolean ${this.value}]`;
  }
}

export default _Boolean_;
