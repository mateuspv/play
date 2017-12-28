const tokenize = require('../../dist/core/tokenize').default;
const { assert } = require('chai');

describe('Tokenize', () => {
  it('should return a empty array', () => {
    const result = tokenize('');

    assert.deepEqual([''], result);
  });

  describe('Number', () => {
    it('should return an array with number as string', () => {
      const result = tokenize('123');

      assert.deepEqual(['123'], result, 'Number should be represented as string');
    });
  });

  describe('String', () => {
    it('should return string', () => {
      const result = tokenize('"a"');

      assert.deepEqual(['"a"'], result);
    });


    it('should preserve spaces', () => {
      const result = tokenize('"a b"');

      assert.deepEqual(['"a b"'], result);
    });

    it('should return string with parens', () => {
      const result = tokenize('("a b")');

      assert.deepEqual(['(', '"a b"', ')'], result);
    });

    it('should return string with closing paren', () => {
      const result = tokenize('")a"');

      assert.deepEqual(['")a"'], result);
    });

    it('should return string with parens', () => {
      const result = tokenize('"(a)"');

      assert.deepEqual(['"(a)"'], result);
    });
  });

  describe('Keyword', () => {
    it('should return an array with keyword as string', () => {
      const result = tokenize(':ab12');

      assert.deepEqual([':ab12'], result, 'Keyword should be represented as string');
    });
  });

  describe('Symbol', () => {
    it('should return an array with keyword as string', () => {
      const result = tokenize('ab12');

      assert.deepEqual(['ab12'], result, 'Symbol should be represented as string');
    });
  });
});
