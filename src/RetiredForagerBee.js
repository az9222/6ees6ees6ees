class RetiredForagerBee extends ForageerBee {
  constructor(age, job, canFly, color, food, treasureChest) {
    super(age, job, color, canFly, treasureChest);
    this.age = 40;
    this.job = //set to gamble
    this.food = food;
    this.canFly = false;
    this.color = "grey";
  }

  forage() {
    return "I am too old, let me play cards instead"
  }

  eat() {
    return "I want to eat food";
  }

  gamble () {
    // allows the bee to add a treasure to the treasureChest
  }
};
// call the ForagerBee superclass
// set the prototype
// set the constructor
// an age property that is set to 40
// a job property that is set to gamble
// a canFly property that is set to false
// a color property that is set to grey
// a forage method that returns "I am too old, let me play cards instead"
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a treasureChest property inherited from ForagerBee that is set to an empty array []
// an always winning gamble method that allows the bee to add a treasure to the treasureChest