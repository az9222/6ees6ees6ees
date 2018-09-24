class Bee extends Grub {
    constructor() {
      super(); //we are overriding the properties from Grub that have been inherited by Bee 
      this.age = 5;
      this.color = 'yellow';
      this.job = "Keep on growing";
      //note that theres no food property bc it will be passed down from the parent class
    }

    //no need for eat method bc its in grub
};

// call the Grub superclass
// set the prototype
// set the constructor
// an age property that is set to 5
// a color property that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a job property that is set to keep on growing
