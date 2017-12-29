import _Function_ from '../typesystem/Function';

export default {
  if({
    _, predicate, trueExpr, falseExpr,
  }, context, interpret) {
    return interpret(predicate, context) ?
      interpret(trueExpr, context) :
      interpret(falseExpr, context);
  },

  lambda() {
    return new _Function_('lambda');
  },
};
