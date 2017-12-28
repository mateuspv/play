import Context from './context/context';
import library from './context/library';
import special from './context/special-forms';

const evaluateList = (input, context, evaluate) => {
  const hasLength = input.length > 0;
  const head = input.head();

  if (hasLength && head.value in special) {
    return special[head.value](input, context);
  }

  const list = input.map(x => evaluate(x, context));

  if (list.head().value === 'function') {
    return list.head()(...list.tail());
  }

  return list;
};

const evaluate = (input, context = new Context(library)) => {
  if (input.type === 'list') {
    return evaluateList(input, context, evaluate);
  }

  if (input.type === 'symbol') {
      return context.get(input.value);
  }

  return input.value;
};

export default evaluate;
