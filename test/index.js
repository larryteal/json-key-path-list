const expect = require('chai').expect;

const jsonKeyPath = require('../index');


describe('json key path', function () {
  it('should be able to get json key path list', function () {
    const obj = {
      foo: 'foov',
      bar: {
        b: 'b',
        a: 'a',
        r: 'r'
      },
      ward: [{
        w: 'w1',
        d: 'd1'
      }, {
        w: 'w2',
        d: 'd2'
      }]
    };
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([
      'foo',
      'bar.b',
      'bar.a',
      'bar.r',
      'ward.0.w',
      'ward.0.d',
      'ward.1.w',
      'ward.1.d',
    ])
  });

  it('should be no error when params is null', function () {
    const obj = null;
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([]);
  });

  it('should be no error when params is undefined', function () {
    const obj = undefined;
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([]);
  });

  it('should be no error when params is string', function () {
    const obj = 'string';
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([]);
  });

  it('should be no error when params is number', function () {
    const obj = 1;
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([]);
  });

  it('should be no error when params is function', function () {
    const obj = function () {};
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([]);
  });

  it('should be no error when params is boolean', function () {
    const obj = true;
    const keyPath = jsonKeyPath(obj);
    expect(keyPath).to.deep.equal([]);
  });
});