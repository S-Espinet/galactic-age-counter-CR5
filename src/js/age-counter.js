export class AgeInYears {
  constructor() {
    this.mercuryAge = .24;
    this.venusAge = .62;
    this.marsAge = 1.88;
    this.jupiterAge = 11.86;
  }

  mercuryYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      let ageOnMercury = Math.round(age / this.mercuryAge)
      return ageOnMercury
    }
  }

  venusYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      let ageOnVenus = Math.round(age / this.venusAge);
      return ageOnVenus
    }
  }

  marsYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      let ageOnMars = Math.round(age / this.marsAge);
      return ageOnMars
    }
  }

  jupiterYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      let ageOnJupiter = Math.round(age / this.jupiterAge);
      return ageOnJupiter
    }
  }
}