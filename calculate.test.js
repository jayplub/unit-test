const calFuction = require('./calculate')

test('rectangleArea w = 5 will reuturn 25', () => {
    expect(calFuction.rectangleArea(5)).toEqual(25);
  });

  test('Sum of Area a1 = 10 a2 = 20 will reuturn 30', () => {
    expect(calFuction.sum(10,20)).toEqual(30);
  });

  