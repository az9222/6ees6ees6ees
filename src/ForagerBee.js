class ForagerBee extends Bee {
  constructor(age, job, color, canFly, treasureChest) {
    super(food);
    this.age = 10;
    this.job = 'pollen'
    this.color = yellow;
    this.canFly = true;
    this.treasureChest = [];
  }

  eat() {
    return "I want to eat my food";
  }

  forageMethod () {
    // allows the bee to add a treasure to the treasureChest;
  }
};

// call the Bee superclass
// set the prototype
// set the constructor
// an age property that is set to 10
// a job property that is set to find pollen
// a color property inherited from bee that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a canFly property that is set true
// a treasureChest property that is set to an empty array []
// a forage method that allows the bee to add a treasure to the treasureChest