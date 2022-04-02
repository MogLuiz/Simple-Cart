const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Luiz',
      profession: 'developer',
    };
    expect(queryString(obj)).toBe('name=Luiz&profession=developer');
  });

  it('should create a valid query string event when an array is passed as value', () => {
    const obj = {
      name: 'Luiz',
      abilities: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=Luiz&abilities=JS,TDD');
  });

  it('should throw an error when a object is passed as value', () => {
    const obj = {
      name: 'Luiz',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should a query string to object', () => {
    const qs = 'name=Luiz&profession=developer';
    parse(qs);
    expect(parse(qs)).toEqual({
      name: 'Luiz',
      profession: 'developer',
    });
  });
});
