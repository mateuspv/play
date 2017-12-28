const OPEN_PARENTHESES_SPACED = ' ( ';
const CLOSE_PARENTHESES_SPACED = ' ) ';

const OPEN_PARENTHESES_REGX = /\(/g;
const CLOSE_PARENTHESES_REGX = /\)/g;

const WHITESPACE_MARK = '!whitespace!';

const tokenize = expr =>
  expr.split('"')
    .map((x, i) => {
      const notInString = i % 2 === 0;

      if (notInString) {
        return x.replace(OPEN_PARENTHESES_REGX, OPEN_PARENTHESES_SPACED)
          .replace(CLOSE_PARENTHESES_REGX, CLOSE_PARENTHESES_SPACED);
      }

      return x.replace(/ /g, '!whitespace!');
    })
    .join('"')
    .trim()
    .split(/\s+/)
    .map(x => x.replace(new RegExp(WHITESPACE_MARK, 'g'), ' '));

export default tokenize;
