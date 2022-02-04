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
    expect(age.mercuryYears("35")).toBeLessThanOrEqual(146);
  })
});

describe ('venusYears', () => {

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.venusYears("Etiam non")).toEqual("Please enter a valid number.");
  });
  test('should return age in Venus years', () => {
    let age = new AgeInYears();
    expect(age.venusYears("35")).toBeLessThanOrEqual(57);
  })
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