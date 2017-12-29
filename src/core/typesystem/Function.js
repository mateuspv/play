import Context from '../context/context';

class _Function_ {
  constructor(name) {
    this.name = name;
    this.type = 'function'
  }

  invoke() {
    return throw('missing function implementation')
  }

  inspect() {
    return `[Function ${this.name}]`;
  }

  get value() {
    return this.expr;
  }
}

export default _Function_;
