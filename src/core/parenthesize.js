import categorize from './categorize';
import List from './typesystem/List';

const parenthesize = (input, list = new List()) => {
  const token = input.shift();

  if (token === undefined) {
    return list.last();
  }

  else if (token === '(') {
    return parenthesize(input, list.push(parenthesize(input)));
  }
  else if (token === ')') {
    return list;
  }

  return parenthesize(input, list.conj(categorize(token)));
};

export default parenthesize;
