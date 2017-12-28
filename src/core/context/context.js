class Context {
  constructor(scope = {}, parent) {
    this.scope = scope;
    this.parent = parent;
  }

  get(identifier) {
    if (this.scope[identifier]) {
      return this.scope[identifier];
    }

    if (this.parent) {
      return this.parent.get(identifier);
    }

    throw new Error(`Could not resolve symbol ${identifier}`);
  }
}

export default Context;
