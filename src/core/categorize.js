import _Boolean from './typesystem/Boolean';
import _Number from './typesystem/Number';
import _String from './typesystem/String';
import _Symbol from './typesystem/Symbol';
import _Nil from './typesystem/Nil';
import _Keyword from './typesystem/Keyword';

const isBoolean = expr => expr === 'true' || expr === 'false';

const isNumber = expr => !Number.isNaN(parseFloat(expr));

const isKeyword = expr => expr[0] === ':';

const isNil = expr => expr === 'nil';

const isString = (expr) => {
  const firstChar = expr[0];
  const lastChar = expr.slice(-1);

  return firstChar === '"' && lastChar === '"';
};

const categorize = (expr) => {
  if (isBoolean(expr)) {
    return new _Boolean(expr);
  }
  else if (isNumber(expr)) {
    return new _Number(expr);
  }
  else if (isString(expr)) {
    return new _String(expr);
  }
  else if (isNil(expr)) {
    return new _Nil(expr);
  }
  else if (isKeyword(expr)) {
    return new _Keyword(expr);
  }

  return new _Symbol(expr);
};

export default categorize;
