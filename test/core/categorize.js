const categorize = require('../../dist/core/categorize').default;
const { assert } = require('chai');

describe('Categorize', () => {
  describe('Boolean', () => {
    it('true', () => {
      const result = categorize('true').type;

      assert.equal('boolean', result);
    });

    it('true', () => {
      const result = categorize('false').type;

      assert.equal('boolean', result);
    });
  });

  it('Keyword', () => {
    const result = categorize(':ok').type;

    assert.equal('keyword', result);
  });

  it('Nil', () => {
    const result = categorize('nil').type;

    assert.equal('nil', result);
  });

  it('Number', () => {
    const result = categorize('1234').type;

    assert.equal('number', result);
  });

  it('String', () => {
    const result = categorize('"abc"').type;

    assert.equal('string', result);
  });

  it('symbol', () => {
    const result = categorize('name').type;

    assert.equal('symbol', result);
  });
});
