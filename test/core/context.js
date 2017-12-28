const Context = require('../../dist/core/context/context').default;

const { assert } = require('chai');

describe('Context', () => {
  describe('#get', () => {
    it('retrieve the symbol', () => {
      const result = new Context({ play: 'play' }).get('play');

      assert.equal('play', result);
    });

    it('retrieve the symbol on the parentContext', () => {
      const parentContext = new Context({ play: 'play' });
      const result = new Context({}, parentContext).get('play');

      assert.equal('play', result);
    });

    it('retrieve the symbol on the closest Context', () => {
      const parentContext = new Context({ play: 'play2' });
      const result = new Context({ play: 'play' }, parentContext).get('play');

      assert.equal('play', result);
    });

    it('throws exception when not found', () => {
      const parentContext = new Context({});
      const myContext = new Context({}, parentContext);

      const fn = () => myContext.get('play');

      assert.throws(fn, Error, /Could not resolve symbol play/);
    });
  });
});
