import Context from './context/context';
import library from './context/library';
import special from './context/special-forms';
import _Nil_ from './typesystem/Nil';

const evaluateList = (input, context, evaluate) => {
  const inputHead = input.head();

  if (!inputHead) {
    return new _Nil_();
  }

  const isSpecialKeyword = special[inputHead.expr.toString()];

  if (isSpecialKeyword) {
    return isSpecialKeyword.invoke(input, context, evaluate);
  }

  const list = input.map(x => evaluate(x, context));
  const head = list.head();

  if (head.type === 'function') {
    return head.invoke(input, context, evaluate);
  }

  return list;
};

const defaultContext = new Context(special, new Context(library));

const evaluate = (input, context = defaultContext) => {
  if (input.type === 'list') {
    return evaluateList(input, context, evaluate);
  }

  if (input.type === 'symbol') {
    return context.get(input.value);
  }

  return input;
};

export default evaluate;
