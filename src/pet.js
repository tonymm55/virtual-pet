const MAX_FITNESS = 10
const MIN_HUNGER = 0

const GROWUP_HUNGER_FACTOR = 5
const GROWUP_FITNESS_FACTOR = 3
const GROWUP_AGE_FACTOR = 1
const WALK_FITNESS_FACTOR = 4
const FEED_HUNGER_INCREMENT = 3

class Pet {
    constructor(name) {
        //Introducing the 'this' function
        this.name = name; 
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.children = [];
    }
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    } 
}
    // This was the error below - This is not compatible with CLASS Constructor Function. 
    // Pet.prototype = {
    //     get isAlive() {
    //         return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    //     } 
    // }
    //"The GETTER METHOD should go after the CONSTRUCTOR FUNCTION DEFINITION but before the first METHOD DEFINITION" 
   
    Pet.prototype.adoptChild = function (child) {
        if (!this.isAlive) {
            throw new Error('Your child pet is no longer alive!!');
        }
        this.children.push(child);
    }
    Pet.prototype.haveBaby = function (baby) {
        if (!this.isAlive) {
            throw new Error('Your baby pet is no longer alive!!');
        }
        this.children.push(baby);
    }
    Pet.prototype.growUp = function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive!!');
        }
        this.age += GROWUP_AGE_FACTOR;
        this.hunger += GROWUP_HUNGER_FACTOR;
        this.fitness -= GROWUP_FITNESS_FACTOR;
    }
    Pet.prototype.walk = function () {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive!!');
        }
        if ((this.fitness + WALK_FITNESS_FACTOR) <= MAX_FITNESS) {
            this.fitness += WALK_FITNESS_FACTOR;
        }
            else {
            this.fitness = MAX_FITNESS;
        }
    }
    Pet.prototype.feed = function () {
       console.log(this.age < 30 && this.hunger < 10 && this.fitness > 0)
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive!!');
        }
        if (this.hunger >= FEED_HUNGER_INCREMENT) {
            this.hunger -= FEED_HUNGER_INCREMENT;
        }
        else {
        this.hunger = MIN_HUNGER;
        }
    }
    //If above 5, the pet is hungry. The hunger score goes down when fed.
    Pet.prototype.checkUp = function () { 
        if (this.fitness <= 3 && this.hunger <=5 ) {
            console.log('I need a walk!');
            }
            else if (this.hunger >= 5 && this.fitness >= 3) {
            console.log('I am hungry!');
            }
            else if (this.fitness <= 3 && this.hunger >=5) {
            console.log('I am hungry and I need a walk!');
            }
            else if(this.fitness >= 3 && this.hunger <=5) {
            console.log('I feel great!');
            }
        }                      
const pet = new Pet('Fido');      //1st instance. //note capital P in Pet which references the class 'Pet'
const parent = new Pet('Dave');   //2nd instance. //passing the Rex argument into the name variable on line 2
const child = new Pet('Amelia');
const baby = new Pet('Billy');
parent.adoptChild(child);
parent.haveBaby(baby);

// Call a method on the parent pet, which you pass the child into as an argument e.g. adoptChild.
//Output: Dave has adopted Amelia

module.exports = Pet;

// Constructor function was replaced by Class at the recommend of ESLint?
// This is constructor function
// function Pet(name) {
//     this.name = name
// }
// const pet = new Pet('Fido');
// module.exports = Pet;