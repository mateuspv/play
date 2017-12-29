import _Symbol_ from '../typesystem/Symbol';
import Context from './context';

export default {
  if: (() => {
    const sym = new _Symbol_('if');
    const invoke = (input, context, evaluate) => {
      const expr = input.head().value;
    };

    sym.invoke = invoke;


    return sym;
  })(),

  lambda: (() => {
    const sym = new _Symbol_('lambda');
    const invoke = (input, context, evaluate) => {
      const expr = input.head().value;
      const body = expr[1];
      const returnExpr = expr[2];
      const args = input.tail();

      const lambdaScope = body.value.reduce((acc, x, i) => {
        acc[x.value] = args[i];
        return acc;
      }, {});

      return evaluate(returnExpr, new Context(lambdaScope, context));
    };

    sym.invoke = invoke;

    return sym;
  })()
  ,
};
