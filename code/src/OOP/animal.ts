
// TODO : Class Animal

export abstract class Animal {

    // TODO : Abstaction 
    // is the process of hiding the implementation details and showing only functionality to the user.
    // abstraction is like a simurate of the real world

    // TODO: Encapsulation 
    // is the process of binding together the data and functions that manipulate them.

    // TODO: Inheritance
    // is the process where one class acquires the properties (methods and fields) of another.

    // TODO: Polymorphism
    // is the ability of an object to take on many forms. 
    // The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object. 

    // TODO : Interface
    // is a completely "abstract class" that is used to group related methods with empty bodies.

    // TODO: Class
    // is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes),


    private breed: string = 'unknown';

    constructor(breed: string) {
        this.breed = breed;
    }

    abstract eat(): string; // abstract method


}

// TODO : Class Dog

export class Dog extends Animal implements Pet {
    eat() {
        return 'I am eating like dog';
    }

    bark() {
        return 'Whoof! Whoof! ';
    }

    play(): string {
        return this.bark();
    }
}

// TODO : Class Cat

export class Cat extends Animal implements Pet {
    cry() {
        return 'Meow!';
    }

    eat(): string {
        return 'I am eating like cat';
    }

    play(): string {
        return this.cry();
    }
}

// TODO : Interface Pet

export interface Pet {
    play(): string;
}


// TODO : Class Owner

export class Owner {
    private pet: Pet | undefined;

    have(pet: Pet) {
        this.pet = pet;
    }

    play() {
        if (this.pet) {
            return this.pet.play();
        }
        return 'I do not have a dog';
    }

}