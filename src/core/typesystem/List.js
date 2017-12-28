import util from 'util';

class _List_ {
  constructor(...expr) {
    this.expr = expr;
    this.type = 'list';
    this.value = [...this.expr];
  }

  toString() {
    const exprs = this.value.map(exp => exp.toString()).join(' ');
    return `(${exprs})`;
  }
  
  [util.inspect.custom]() {
    return this.toString();
  }
  
  
  last() {
    return this.value[this.value.length - 1];
  }

  push(x) {
    return new _List_(...this.value, x);
  }
  
  conj(...x) {
    return new _List_(...this.value.concat(x));
  }
}
export default _List_;
