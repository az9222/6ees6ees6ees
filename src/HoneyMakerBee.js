class HoneyMakerBee extends Bee {
  constructor(age, color, food, job, honeyPot) {
    super(age, color, food, job);
    this.age = 10;
    this.job = //set to make honey
    this.honeyPot = 0;
    this.color = yellow;
  }
  
  eat() {

  }

  makeHoney () {
    return this.honeyPot++;
  }

  giveHoney () {
    return this.honeyPott--;
  }
};

// call the Bee superclass
// set the prototype
// set the constructor
// an age property that is set to 10
// a job property that is set to make honey
// a color property inherited from bee that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a honeyPot property that is set to 0
// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot