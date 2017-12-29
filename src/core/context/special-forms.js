import _Symbol_ from '../typesystem/Symbol';
import _Function_ from '../typesystem/Function';
import Context from './context';

export default {
  let: (() => {
    const sym = new _Symbol_('let');
    const invoke = (input, context, evaluate) => {
      const expr = input.tail();
      const body = expr[0];
      const result = expr[1];
      const letContext = body.value.reduce((acc, x) => {
        const [key, val] = x.value;

        acc.scope[key.expr] = evaluate(val, context);

        return acc;
      }, new Context({}, context));

      return evaluate(result, letContext);
    };

    sym.invoke = invoke;

    return sym;
  })(),

  if: (() => {
    const sym = new _Symbol_('if');
    const invoke = (form, context, evaluate) => {
      const [_, predicate, trueExpr, falseExpr] = form.value;

      return evaluate(predicate, context).value ?
        evaluate(trueExpr, context) :
        evaluate(falseExpr, context);
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

    const fn = new _Function_('lambda');
    fn.invoke = invoke;

    sym.invoke = () => fn;

    return sym;
  })()
  ,
};
