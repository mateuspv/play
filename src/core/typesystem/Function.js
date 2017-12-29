import util from 'util';

import Context from '../context/context';

class _Function_ {
  constructor(name) {
    this.name = name;
    this.type = 'function';
  }

  toString() {
    return `[Function ${this.name}]`;
  }

  [util.inspect.custom]() {
    return this.toString();
  }

  get value() {
    return this.expr;
  }

  /**
   * [invoke description]
   * @param  {[type]} a full exprission like ((lambda (x) x) "play")
   * @param  {[type]} context  [description]
   * @param  {[type]} evaluate [description]
   * @return {[type]}          [description]
   */
  invoke(input, context, evaluate) {
    const Expr = input.head().value;
    const body = Expr[1];
    const returnExpr = Expr[2];
    const args = input.tail();

    const lambdaScope = body.value.reduce((acc, x, i) => {
      acc[x.value] = args[i];
      return acc;
    }, {});


    return evaluate(returnExpr, new Context(lambdaScope, context));
  }
}

export default _Function_;
