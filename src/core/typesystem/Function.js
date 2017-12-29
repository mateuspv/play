class _Function_ {
  constructor(name) {
    this.name = name;
    this.type = 'function';
  }

  invoke() {
    throw Error('missing function implementation');
  }

  inspect() {
    return `[Function ${this.name}]`;
  }

  get value() {
    return this.expr;
  }
}

export default _Function_;
