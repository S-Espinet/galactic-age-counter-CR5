export class AgeInYears {
  constructor() {
    this.mercuryAge = .24;
    this.venusAge = .62;
    this.marsAge = 1.88;
    this.jupiterAge = 11.86;
  }

  planetYears(age, ageFactor) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number.";
    }
    else {
      let ageOnPlanet = Math.round(age / ageFactor);
      return ageOnPlanet;
    }
  }

  planetLife(age, ageFactor, lifeExpectancy) {
    lifeExpectancy = parseInt(lifeExpectancy);
    if (isNaN(lifeExpectancy) === true) {
      return "Please enter a valid number."
    }
    if (isNaN(age) === true) {
      return "Please enter a valid number.";
    }
    let yearsOnPlanet = this.planetYears(age, ageFactor);
    const planetMax = Math.round(lifeExpectancy / ageFactor);
    if (yearsOnPlanet <= planetMax) {
    return planetMax - yearsOnPlanet;
    }
    else {
      return yearsOnPlanet - planetMax;
    }
  }

  mercuryYears(age) {
    return this.planetYears(age, this.mercuryAge);
  }

  mercuryLife(age, lifeExpectancy) {
    return this.planetLife(age, this.mercuryAge, lifeExpectancy)
  }

  venusYears(age) {
    return this.planetYears(age, this.venusAge);
  }

  venusLife(age, lifeExpectancy) {
    return this.planetLife(age, this.venusAge, lifeExpectancy)
  }

  marsYears(age) {
    return this.planetYears(age, this.marsAge);
  }

  marsLife(age, lifeExpectancy) {
    return this.planetLife(age, this.marsAge, lifeExpectancy)
  }

  jupiterYears(age) {
    return this.planetYears(age, this.jupiterAge);
  }

  jupiterLife(age, lifeExpectancy) {
    return this.planetLife(age, this.jupiterAge, lifeExpectancy)
  }
}