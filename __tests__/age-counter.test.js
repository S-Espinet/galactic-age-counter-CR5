import { AgeInYears } from './../src/js/age-counter.js';

describe ('AgeInYears', () => {

  test('should correctly create an AgeInYears class with 4 properties', () => {
    let age = new AgeInYears ()
    expect(age.mercuryAge).toEqual("mercuryAge");
    expect(age.venusAge).toEqual("venusAge");
    expect(age.marsAge).toEqual("marsAge");
    expect(age.jupiterAge).toEqual("jupiterAge");
  });
});