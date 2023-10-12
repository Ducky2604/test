const exercise = require("./ex1")

test("sum of arrays ", ()=>{
    const cal = new exercise()
    expect(cal.sumArray([3,6,9,-10])).toBe(8)
    // remember when is array, i have to use the [] operator to do the math, otherwise, its not working
})