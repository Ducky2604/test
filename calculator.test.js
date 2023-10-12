const calculator = require("./calculator")



test("add", ()=>{
    const cal = new calculator();
    expect(cal.add(4,6)).toBe(10)
})

test("abstract", ()=>{
    const cal = new calculator();
    expect(cal.abstract(10,5)).toBe(5)
})

test("multiply", ()=>{
    const cal = new calculator();
    expect(cal.multiply(20,2)).toBe(40)
})

test("divide", ()=>{
    const cal = new calculator();
    expect(cal.divide(10,2)).toBe(5)
})

test("max number", ()=>{
    const cal = new calculator();
    expect(cal.maxNumber(4,8)).toBe(8)
})

test("sum of arrays", ()=>{
    const cal = new calculator();
    expect(cal.sumArrayElements([1,2,3])).toBe(6)
    expect(cal.sumArrayElements([10,20,30])).toBe(60)
    expect(cal.sumArrayElements([1,0,3])).toBe(4)
})
