export class AgeInYears {
  constructor() {
    this.mercuryAge = "mercuryAge";
    this.venusAge = "venusAge";
    this.marsAge = "marsAge";
    this.jupiterAge = "jupiterAge";
  }

  mercuryYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      return age * .24
    }
  }

  venusYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true) {
      return "Please enter a valid number."
    }
    else {
      return age * .62
    }
  }

  marsYears() {

  }
}

