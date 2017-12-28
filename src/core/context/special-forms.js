export default {
  if({
    _, predicate, trueExpr, falseExpr,
  }, context) {
    return interpret(predicate, context) ?
      interpret(trueExpr, context) :
      interpret(falseExpr, context);
  },
};
