const readEval = require('../../dist/core/index').default;

const { assert } = require('chai');


describe('let', () => {
  it('should eval inner expression with names bound', () => {
    const expected = readEval('(1 2)');
    const result = readEval('(let ((x 1) (y 2)) (x y))');

    assert.deepEqual(expected, result);
  });

  it('should not expose parallel bindings to each other', () => {
    const fn = () => readEval('(let ((x 1) (y x)) (x y))');

    assert.throws(fn, Error, /Could not resolve symbol x/);
  });

  it('should accept empty binding list', () => {
    const expected = readEval('42');
    const result = readEval('(let () 42)');

    assert.deepEqual(expected, result);
  });
});
