import Context from './context/context';
import library from './context/library';
import special from './context/special-forms';

const evaluateList = (input, context, evaluate) => {
  const isSpecialKeyword = special[input.head().expr.toString()];

  if (isSpecialKeyword) {
    return isSpecialKeyword;
  }

  const list = input.map(x => evaluate(x, context));
  const head = list.head();

  if (head.invoke) {
    return head.invoke(input, context, evaluate);
  }

  return list;
};

const defaultContext = new Context(special, new Context(library));

const evaluate = (input, context = defaultContext) => {
  if (input.type === 'function') {
    return input;
  }

  if (input.type === 'list') {
    return evaluateList(input, context, evaluate);
  }

  if (input.type === 'symbol') {
    return context.get(input.value);
  }

  return input;
};

export default evaluate;
