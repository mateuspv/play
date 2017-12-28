class Context {
  constructor(scope, parent) {
    this.scope = scope;
    this.parent = parent;
  }

  get(identifier) {
    if (identifier in this.scope) {
      return this.scope[identifier];
    }

    if (this.parent !== undefined) {
      return this.parent.get(identifier);
    }

    throw new Error('Could not resolve symbol');
  }
}

export default Context;
