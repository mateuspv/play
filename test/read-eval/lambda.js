const readEval = require('../../dist/core/index').default;

const { assert } = require('chai');

describe('lambda', () => {
  it('lambda should be a symbol', () => {
    const result = readEval('lambda');

    assert.equal('symbol', result.type);
    assert.exists(result.invoke);
    assert.typeOf(result.invoke, 'function');
  });

  it('define a lambda should return a function', () => {
    const result = readEval('(lambda (a) a)');

    assert.equal('function', result.type);
    assert.exists(result.invoke);
    assert.typeOf(result.invoke, 'function');
  });

  describe('invoke a lambda definition should return it argument', () => {
    describe('Boolean', () => {
      it('true', () => {
        const result = readEval('((lambda (a) a) true');

        assert.equal('boolean', result.type);
        assert.equal(true, result.value);
      });

      it('false', () => {
        const result = readEval('((lambda (a) a) false');

        assert.equal('boolean', result.type);
        assert.equal(false, result.value);
      });
    });

    it('Keyword', () => {
      const result = readEval('((lambda (a) a) :ok');

      assert.equal('keyword', result.type);
      assert.equal(':ok', result.value);
    });

    it('List', () => {
      const result = readEval('((lambda (a) a) (1 2 3)');

      assert.equal('list', result.type);
      assert.deepEqual(readEval('(1 2 3)'), result);
    });

    it('Nil', () => {
      const result = readEval('((lambda (a) a) nil');

      assert.equal('nil', result.type);
      assert.equal('nil', result.value);
    });

    it('Number', () => {
      const result = readEval('((lambda (a) a) 12345');

      assert.equal('number', result.type);
      assert.equal(12345, result.value);
    });

    it('String', () => {
      const result = readEval('((lambda (a) a) "ok"');

      assert.equal('string', result.type);
      assert.equal('"ok"', result.value);
    });

    describe('Symbol', () => {
      it('should return the symbol', () => {
        const result = readEval('if');

        assert.equal('symbol', result.type);
      });

      it('should throw an error for non existent symbol', () => {
        const fn = () => readEval('play');

        assert.throws(fn, Error, /Could not resolve symbol play/);
      });
    });
  });
});
