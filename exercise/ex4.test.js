// const daily = require("./ex4")

// test("saturday or sunday ", ()=>{
//     const saturday = new Date(2023-10-14)
//     expect(daily(saturday)).toBe(true)
// })

// test("saturday or sunday ", ()=>{
//     const sunday = new Date(2023-10-15)
//     expect(daily(sunday)).toBe(true)
// })
// isWeekend.test.js




const isWeekend = require('./ex4');

test('should return true for Saturday', () => {
  const saturday = new Date('2023-10-10'); 
  expect(isWeekend(saturday)).toBeFalsy();
});

test('should return true for Sunday', () => {
  const sunday = new Date('2023-10-7'); 
  expect(isWeekend(sunday)).toBeTruthy();
});

test(' should return false for anyday expect weekend ', () => {
  const monday = new Date('2023-10-15'); 
  expect(isWeekend(monday)).toBeTruthy();
});
