import { expect } from 'chai';

describe('chai test', () => {
  it('.not test', () => {
    expect(() => {}).to.not.throw();
    expect({ a: 1 }).to.not.have.property('b');
    expect([1, 2])
      .to.be.an('array')
      .that.does.not.include(3);
  });

  it('.deep test', () => {
    expect({ a: 1 }).to.deep.equal({ a: 1 });
    expect([{ a: 1 }, { b: 2 }]).to.deep.include({ a: 1 });
    expect({ x: { a: 1 } }).to.deep.include({ x: { a: 1 } });
    expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
    expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
    expect({ x: { a: 1 } }).to.have.deep.property('x', { a: 1 });
    expect({ x: { a: 1 } }).to.have.deep.property('x', { a: 1 });
  });

  it('.nest test', () => {
    expect({ a: { b: ['x', 'y'] } }).to.have.nested.property('a.b[1]');
  });

  it('.own test', () => {
    Object.prototype.b = 2;
    expect({ a: 1 }).to.have.own.property('a');
    expect({ a: 1 })
      .to.have.property('b')
      .but.not.own.property('b');
  });

  it('.ordered test', () => {
    expect([1, 2])
      .to.have.ordered.members([1, 2])
      .but.not.include.ordered.members([2, 1]);
    expect([1, 2, 3])
      .to.include.ordered.members([1, 2, 3])
      .but.not.include.ordered.members([2, 3]);
  });

  it('.ant test', () => {
    expect({ a: 1, b: 2 }).to.not.have.any.keys('c', 'd');
    expect({ a: 1, b: 2 }).to.have.any.keys('c', 'a');
  });

  it('test the all', () => {
    expect({ a: 1, b: 2 }).to.have.all.keys('a', 'b');
    expect({ a: 1, b: 2 }).to.have.all.include({ a: 1 });
  });

  it('.a test', () => {
    //Asserts that the target’s type is equal to the given string type.Types are case insensitive.
    expect('foo').to.be.a('string');
    expect({ a: 1 }).to.be.an('object');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');
    expect(new Error()).to.be.an('error');
    expect(Promise.resolve()).to.be.a('promise');
    expect(Symbol()).to.be.a('symbol');

    var myObj = {
      [Symbol.toStringTag]: 'myCustomType'
    };

    expect(myObj)
      .to.be.a('myCustomType')
      .but.not.an('object');

    expect([1, 2, 3])
      .to.be.an('array')
      .that.includes(2);

    expect({ a: 1 }).to.be.an('object');
    // expect(1).to.be.a('string', 'nooo why fail');
  });

  it('.include test', () => {
    expect('foobar').to.include('foo');
    expect([1, 2, 3]).to.include(2);
    expect({ a: 1, b: 2, c: 3 }).to.include({ c: 3, a: 1 });
    expect(new Set([1, 2])).to.include(1);
    expect(new Map([['a', 1], ['b', 2]])).to.include(1);
    expect([1, 2, 3]).to.not.include(4);

    expect({ a: 3, b: 4 }).to.include({ a: 3, b: 4 }); // Recommended
    expect({ a: 3, b: 4 }).to.not.include({ a: 1, b: 2 });
  });

  it('.true test', () => {
    expect(1 + 3 == 5).to.be.false;
  });

  it('.undefined test', () => {
    expect(undefined).to.be.undefined;
  });

  it('.empty test', () => {
    expect([]).to.be.empty;
    expect('').to.be.empty;
  });

  it('.above test', () => {
    expect(3).to.be.above(1);
    expect('foo').to.have.lengthOf.above(2);
    expect(1).to.not.be.above(2);
  });

  it('.least test', () => {
    expect(3).to.be.at.least(2);
  });

  it('.within test', () => {
    expect(2).to.be.within(1, 7);
  });

  it('.instanceof test', () => {
    const Cat = () => {};
    expect(new Cat()).to.be.an.instanceof(Cat);
    expect([1, 2]).to.be.an.instanceof(Array);
    expect({ a: 1 }).to.not.be.an.instanceof(Array);
  });

  it('.property test', () => {
    expect({ a: 1, b: 2 }).to.have.property('a', 1);
    expect({ a: 1, b: 2 }).to.have.property('b', 2);
    expect({ a: 1, b: 2 }).to.have.ownPropertyDescriptor('a');
    expect({ b: 2 }).to.not.have.ownPropertyDescriptor('a', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 1
    });
  });

  it('.lengthOf test', () => {
    expect('footest').to.have.lengthOf(7);
    expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(3);
  });

  it('.match test', () => {
    expect('foobar').to.match(/^foo/);
  });

  it('.string test', () => {
    //Asserts that the target string contains the given substring str.
    expect('foobar').to.have.string('foobar');
    expect({ a: 1, b: 2 }).to.include.all.keys('a', 'b');
  });

  it('.throw test', () => {
    var err = new TypeError('Illegal salmon!');
    err.code = 42;
    var badFn = function() {
      throw err;
    };

    expect(badFn).to.throw(TypeError);
    expect(badFn).to.throw(/salmon/);
    expect(badFn)
      .to.throw(TypeError)
      .with.property('code', 42);
  });

  it('.respondTo test', () => {
    function Cat() {}
    Cat.prototype.meow = function() {};
    Cat.hiss = function() {};

    expect(Cat)
      .itself.to.respondTo('hiss')
      .but.not.respondTo('meow');
  });

  it('.satisfy test', () => {
    expect(1).to.satisfy(num => {
      return num > 0;
    });
    expect(3).to.satisfy((num, check) => {
      return num > 2;
    });
  });

  it('.closeTo test', () => {
    expect(1.5).to.be.closeTo(1, 0.5999999999999);
  });

  it('.members test', () => {
    expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
    expect([1, 2, 3]).to.have.deep.members([1, 2, 3]);
    expect([{ a: 1 }, { b: 2 }, { c: 3 }])
      .to.include.deep.ordered.members([{ a: 1 }, { b: 2 }])
      .but.not.include.deep.ordered.members([{ b: 2 }, { c: 3 }]);
  });

  it('.oneOf test', () => {
    expect(1).to.equal(1);
    expect(1).to.be.oneOf([1, 2, 3]);
  });

  it('change test', () => {
    var myObj = { val: 1 },
      addTwo = function() {
        myObj.val += 2;
      },
      subtractTwo = function() {
        myObj.val -= 2;
      };
    expect(addTwo)
      .to.increase(myObj, 'val')
      .by(2);
    expect(subtractTwo)
      .to.decrease(myObj, 'val')
      .by(2);
    expect(addTwo).to.change(myObj, 'val');
  });

  it('.extensible test', () => {
    expect({ a: 1 }).to.be.extensible;
    expect([1, 2, 3]).to.be.extensible;
    var nonExtensibleObject = Object.preventExtensions({}),
      sealedObject = Object.seal({}),
      frozenObject = Object.freeze({});

    expect(nonExtensibleObject).to.not.be.extensible;
    expect(sealedObject).to.not.be.extensible;
    expect(frozenObject).to.not.be.extensible;
    expect(1).to.not.be.extensible;
  });

  it('.sealed .frozen test', () => {
    var sealedObject = Object.seal({});
    var frozenObject = Object.freeze({});

    expect(sealedObject).to.be.sealed;
    expect(frozenObject).to.be.frozen;
    expect(1).to.be.sealed;
    expect({ a: 1 }).to.not.be.sealed;
    expect({ a: 1 }).to.not.be.frozen;
  });

  it('.finite test', () => {
    //finite number
    expect(1).to.be.finite;
    expect('foo').to.be.a('string'); // Recommended
    expect('foo').to.not.be.finite; // Not recommended
    expect(111111111111111111111111111111111111).to.be.finite;
  });
});
