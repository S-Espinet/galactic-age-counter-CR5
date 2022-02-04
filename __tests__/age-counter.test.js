import { AgeInYears } from './../src/js/age-counter.js';

describe ('AgeInYears', () => {

  test('should correctly create an AgeInYears class with 4 properties', () => {
    let age = new AgeInYears ();
    expect(age.mercuryAge).toEqual("mercuryAge");
    expect(age.venusAge).toEqual("venusAge");
    expect(age.marsAge).toEqual("marsAge");
    expect(age.jupiterAge).toEqual("jupiterAge");
  });
});

describe('mercuryYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.mercuryYears("lorem ipsum")).toEqual("Please enter a valid number.")
  });
  test('should return age in Mercury years', () => {
    let age = new AgeInYears();
    expect(age.mercuryYears("35")).toEqual(8.4);
  })
});

describe ('venusYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.venusYears("Etiam non")).toEqual("Please enter a valid number.");
  });
  test('should return age in Venus years', () => {
    let age = new AgeInYears();
    expect(age.venusYears("35")).toEqual(21.7);
  })
});