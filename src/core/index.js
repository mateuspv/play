import tokenize from './tokenize';
import parenthesize from './parenthesize';
import evaluate from './evaluate';

export default x => evaluate(parenthesize(tokenize(x)));