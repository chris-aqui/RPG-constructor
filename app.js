function Character(name, profession, gender, age, strength, hitpoints) {
  this.name = name.toString();
  this.profession = profession.toString();
  this.gender = gender.toString();
  this.age = parseInt(age);
  this.strength = parseInt(strength) || 40;
  this.hitpoints = parseInt(hitpoints) || 50;
  this.printStats = function () {
    console.log("\n-------------\n");
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
      "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
      this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
  }
  this.isAlive = function() {
    this.hitpoints > 0 ? console.log(`${this.name} is Alive`) : console.log(`You dead ${this.name}`);
  }
  this.attack = function(player) {
    player.hitpoints -= this.strength;
  }
  this.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  }
}
const person1 = new Character('Chris', 'Software Engineer', 'Fluid', 27, 9999, 9999);
const person2 = new Character('Mike', 'banker', 'male', 34, 100, 100);
//
person1.isAlive();
person1.attack(person2);
person1.levelUp();
person1.printStats();
//
person2.isAlive();
person2.attack(person1);
person2.levelUp();
person2.printStats();
//