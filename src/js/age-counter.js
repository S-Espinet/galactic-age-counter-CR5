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

  mercuryLife(age, lifeExpectancy) {
    lifeExpectancy = parseInt(lifeExpectancy);
    if (isNaN(lifeExpectancy) === true) {
      return "Please enter a valid number."
    }
    let yearsOnMercury = this.mercuryYears(age);
    const mercuryMax = Math.round(lifeExpectancy / .24);
    if (yearsOnMercury <= mercuryMax) {
    return mercuryMax - yearsOnMercury;
    }
    else {
      return yearsOnMercury - mercuryMax;
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

  venusLife(age, lifeExpectancy) {
    lifeExpectancy = parseInt(lifeExpectancy);
    if (isNaN(lifeExpectancy) === true) {
      return "Please enter a valid number."
    }
    let yearsOnVenus = this.venusYears(age);
    const venusMax = Math.round(lifeExpectancy / .62);
    if (yearsOnVenus <= venusMax) {
    return venusMax - yearsOnVenus;
    }
    else {
      return yearsOnVenus - venusMax;
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

  marsLife(age, lifeExpectancy) {
    lifeExpectancy = parseInt(lifeExpectancy);
    if (isNaN(lifeExpectancy) === true) {
      return "Please enter a valid number."
    }
    let yearsOnMars = this.marsYears(age);
    const marsMax = Math.round(lifeExpectancy / 1.88);
    if (yearsOnMars <= marsMax) {
    return marsMax - yearsOnMars;
    }
    else {
      return yearsOnMars - marsMax;
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

  jupiterLife() {
    
  }
}