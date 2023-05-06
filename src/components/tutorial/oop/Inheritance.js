// Parent class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

// USAGE
const myDog = new Dog("Dogi", 5, "Labrador");
myDog.eat(); //"Dogi is eating"
myDog.bark(); //"Dogi is barking"
