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

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.mercuryLife("lorem ipsum", "70")).toEqual("Please enter a valid number.")
  });

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

  test('should return error message if inputted age is not a number', () => {
    let age = new AgeInYears();
    expect(age.venusLife("lorem ipsum", "70")).toEqual("Please enter a valid number.")
  });

  test('should return error message if inputted life expectancy is not a number', () => {
    let age = new AgeInYears();
    expect(age.venusLife("35", "Etiam non")).toEqual("Please enter a valid number.")
  });
  test('should return number of Venus years left to live if age in Venus years is less than life expectancy in Venus years', () => {
    let age = new AgeInYears();
    expect(age.venusLife("35", "70")).toEqual(57)
  });
  test('should return number of Venus years past Venus life expectancy one has lived if age in Venus years is greater than life expectancy in Venus years', () => {
    let age = new AgeInYears();
    expect(age.venusLife("75", "72")).toEqual(5);
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

describe('marsLife', () => {

  test('should return error message if inputted life expectancy is not a number', () => {
    let age = new AgeInYears();
    expect(age.marsLife("35", "Vestibulum risus")).toEqual("Please enter a valid number.")
  });
  test('should return number of Mars years left to live if age in Mars years is less than life expectancy in Mars years', () => {
    let age = new AgeInYears();
    expect(age.marsLife("35", "70")).toEqual(18)
  });
  test('should return number of Mars years past Mars life expectancy one has lived if age in Mars years is greater than life expectancy in Mars years', () => {
    let age = new AgeInYears();
    expect(age.marsLife("75", "72")).toEqual(2);
  });
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

describe('jupiterLife', () => {

  test('should return error message if inputted life expectancy is not a number', () => {
    let age = new AgeInYears();
    expect(age.jupiterLife("35", "Donec et")).toEqual("Please enter a valid number.")
  });
  test('should return number of Jupiter years left to live if age in Jupiter years is less than life expectancy in Jupiter years', () => {
    let age = new AgeInYears();
    expect(age.jupiterLife("35", "70")).toEqual(3)
  });
  test('should return number of Jupiter years past Jupiter life expectancy one has lived if age in Jupiter years is greater than life expectancy in Jupiter years', () => {
    let age = new AgeInYears();
    expect(age.jupiterLife("80", "72")).toEqual(1);
  });
});