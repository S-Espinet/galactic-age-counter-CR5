export class AgeInYears {
  constructor() {
    this.earthAge = "earthAge"
    this.mercuryAge = "mercuryAge";
    this.venusAge = "venusAge";
    this.marsAge = "marsAge";
    this.jupiterAge = "jupiterAge";
  }

  mercuryYears(age) {
    age = parseInt(age);
    if (isNaN(age) === true)
    return "Please enter a valid number."
  }
}
