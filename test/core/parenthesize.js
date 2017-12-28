const parenthesize = require('../../dist/core/parenthesize').default;
const tokenize = require('../../dist/core/tokenize').default;
const categorize = require('../../dist/core/categorize').default;

const List = require('../../dist/core/typesystem/List').default;

const { assert } = require('chai');

describe('Parenthesize', () => {
  describe('Boolean', () => {
    it('true', () => {
      const result = parenthesize(tokenize('true'));
      const expected = categorize('true');

      assert.deepEqual(expected, result);
    });

    it('false', () => {
      const result = parenthesize(tokenize('false'));
      const expected = categorize('false');

      assert.deepEqual(expected, result);
    });
  });

  it('Keyword', () => {
    const result = parenthesize(tokenize(':hello'));
    const expected = categorize(':hello');

    assert.deepEqual(expected, result);
  });

  it('Nil', () => {
    const result = parenthesize(tokenize('nil'));
    const expected = categorize('nil');

    assert.deepEqual(expected, result);
  });

  it('Number', () => {
    const result = parenthesize(tokenize('1'));
    const expected = categorize('1');

    assert.deepEqual(expected, result);
  });

  it('String', () => {
    const result = parenthesize(tokenize('"hello world"'));
    const expected = categorize('"hello world"');

    assert.deepEqual(expected, result);
  });

  it('String', () => {
    const result = parenthesize(tokenize('something'));
    const expected = categorize('something');

    assert.deepEqual(expected, result);
  });

  describe('List', () => {
    it('Numbers', () => {
      const result = parenthesize(tokenize('(1)'));
      const expected = new List(categorize('1'));

      assert.deepEqual(expected, result);
    });
  });
});
