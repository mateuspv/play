const readEval = require('../../dist/core/index').default;

const { assert } = require('chai');

describe('if', () => {
  it('invoke with true should return the first expr', () => {
    const result = readEval('(if true "work" "not work")');

    assert.equal(result.type, 'string');
    assert.equal('"work"', result.value);
  });

  it('invoke with false should return the second expr', () => {
    const result = readEval('(if false "not work" "work")');

    assert.equal(result.type, 'string');
    assert.equal('"work"', result.value);
  });
});
