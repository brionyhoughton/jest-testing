const myFunc= require("../app.js")

myFunc.sum(1, 2)


test('should equal 3 when passed 1, 2', () => {
    expect(myFunc.sum(1, 2)).toBe(3);
}
)




test('check array is alphabetical', () => {
    expect(myFunc.names()[0]).toBe("Ashley")
})


test('check the string is split into an array of letters', () => {
    expect(myFunc.name()[0]).toBe("B")
})

test('check the string is an array in alphabetical order', () => {
    expect(myFunc.sortName()[0]).toBe("a")

})

test('check the string has been sliced at the third letter', () => {
    expect(myFunc.sliceName()).toBe("Ben")

})

test('check that kiwi has been pushed to the end of the array', () => {
    expect(myFunc.myFunction()[3]).toBe("kiwi")
})

test('check that i will be 38', () => {
    expect(myFunc.age(1988,2026)).toBe(38)
})

test('check that it returns the longest word', () => {
    expect(myFunc.myFunc2()).toBe("briony")
})

test('check that the area of the circle is 254', () => {
    expect(myFunc.circle(9)).toBe(254)
})

test('check that the area of the circle is 254', () => {
    expect(myFunc.degrees(32)).toBe(89.6)
})

test('check that the sum of the numbers is 15', () => {
    expect(myFunc.add(1, 5)).toBe(15)
})
