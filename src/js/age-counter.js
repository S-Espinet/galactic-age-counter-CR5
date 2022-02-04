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
      return age / this.mercuryAge
    }
  }

  venusYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      return age / this.venusAge
    }
  }

  marsYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      return age / this.marsAge
    }
  }

  jupiterYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      return age / this.jupiterAge
    }
  }
}

