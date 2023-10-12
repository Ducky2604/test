const getObject = require('.//ex2');

  test('returns an array of keys for an object', () => {
    const obj = { a: "John", b: 30, c: "New York" };
    const cal =  getObject(obj);
    expect(cal).toEqual(["a" ,"b" ,"c"])
  });
// use function since i use class i have to instance and it's kinda more hard to do it