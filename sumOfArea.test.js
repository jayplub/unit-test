const sumOfArea = require('./sumOfArea')
const calFuction = require('./calculate')

jest.mock('./calculate')

test('w1 = 1 w2 = 2 will return 5 ', () => {
    calFuction.rectangleArea.mockReturnValue(4)
    calFuction.sum.mockReturnValue(5)
    // mockup
    expect(sumOfArea(1, 2)).toEqual(5);
})

test('Stub : w1 = 1 w2 = 2 will return 5 ', () => {
    calFuction.rectangleArea.mockImplementation((w1 = 1) => {
        if (w1 == 1) {
            return 1
        }
    })
    calFuction.rectangleArea.mockImplementation((w2 = 2) => {
        if (w2 == 2) {
            return 4
        }
    })

    calFuction.sum.mockImplementation((a1 = 1, a2 = 4) => {
        if (a1 == 1 && a2 == 4) {
            return 5
        }
    })

    expect(sumOfArea(1, 2)).toEqual(5);


})

test('Spyon : w1 = 1 w2 = 2 will return 5 ', () => {

    jest.spyOn(Math,'pow').mockImplementation((a) => a* a)
    expect(sumOfArea(1, 2)).toEqual(5);


})
