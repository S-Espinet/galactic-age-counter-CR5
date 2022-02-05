import { LifeExpectancy } from './../src/js/life-expectancy.js';

describe ('LifeExpectancy', () => {
  
  test('should correctly create a LifeExpectancy class with one property', () => {
    let myLifetime = new LifeExpectancy(70);
    expect(myLifetime.lifetime).toEqual(70);
  });
});