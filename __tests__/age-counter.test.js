import { AgeInYears } from './../src/js/age-counter.js';

describe ('AgeInYears', () => {

  test('should correctly create an AgeInYears class with 4 properties', () => {
    let age = new AgeInYears ();
    expect(age.mercuryAge).toEqual(.24);
    expect(age.venusAge).toEqual(.62);
    expect(age.marsAge).toEqual(1.88);
    expect(age.jupiterAge).toEqual(11.86);
  });
});

describe('mercuryYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.mercuryYears("lorem ipsum")).toEqual("Please enter a valid number.")
  });
  test('should return age in Mercury years', () => {
    let age = new AgeInYears();
    expect(age.mercuryYears("35")).toEqual(146);
  })
});

describe('mercuryLife', () => {

  test('should return error message if inputted life expectancy is not a number', () => {
    let age = new AgeInYears();
    expect(age.mercuryLife("35", "lorem ipsum")).toEqual("Please enter a valid number.")
  });
  test('should return number of Mercury years left to live if age in Mercury years is less than life expectancy in Mercury years', () => {
    let age = new AgeInYears();
    expect(age.mercuryLife("35", "70")).toEqual(146)
  });
  test('should return number of Mercury years past Mercury life expectancy one has lived if age in Mercury years is greater than life expectancy in Mercury years', () => {
    let age = new AgeInYears();
    expect(age.mercuryLife("75", "72")).toEqual(13);
  });
});

describe ('venusYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.venusYears("Etiam non")).toEqual("Please enter a valid number.");
  });
  test('should return age in Venus years', () => {
    let age = new AgeInYears();
    expect(age.venusYears("35")).toEqual(56);
  })
});

describe('venusLife', () => {

  test('should return error message if inputted life expectancy is not a number', () => {
    let age = new AgeInYears();
    expect(age.venusLife("35", "lorem ipsum")).toEqual("Please enter a valid number.")
  });
});

describe ('marsYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.marsYears("Vestibulum risus")).toEqual("Please enter a valid number.");
  });
  test('should return age in Mars years', () => {
    let age = new AgeInYears();
    expect(age.marsYears("35")).toBeLessThanOrEqual(19);
  })
});

describe ('jupiterYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.jupiterYears("Donec et")).toEqual("Please enter a valid number.");
  });
  test('should return age in Jupiter years', () => {
    let age = new AgeInYears();
    expect(age.jupiterYears("35")).toBeLessThanOrEqual(3);
  })
});