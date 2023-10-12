const reverse = require("./ex3")

test("reverse this letter", ()=>{
    const original = "aoi"
    const string = reverse(original)
    expect(string).toBe("ioa")
})