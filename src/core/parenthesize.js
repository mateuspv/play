import categorize from './categorize';

const parenthesize = (input, list = []) => {
  const token = input.shift();

  if (token === undefined) {
    return list.pop();
  }
  else if (token === '(') {
    list.push(parenthesize(input));
    return parenthesize(input, list);
  }
  else if (token === ')') {
    return list;
  }

  return parenthesize(input, list.concat(categorize(token)));
};

export default parenthesize;
