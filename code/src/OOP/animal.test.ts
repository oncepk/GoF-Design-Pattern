import { Animal, Cat, Dog, Owner, Pet } from "./animal";



describe('Dog', () => {
    it('shuld be able to eat like animal', () => {
        let animal: Animal = new Dog('Pooldle');
        expect(animal.eat()).toBe('I am eating like dog');
        // (animal as Dog).bark();
    })
})

describe('Owner', () => {
    it('should be able to play with dog', () => {
        const owner = new Owner();
        let pet: Pet = new Dog('Pooldle');
        owner.have(pet);
        expect(owner.play()).toBe('Whoof! Whoof! ');

        pet = new Cat('Thai');
        owner.have(pet);
        expect(owner.play()).toBe('Meow!');
    })

    it('should be able to play with cat', () => {
        const owner = new Owner();
        let pet: Pet = new Cat('Thai');
        owner.have(pet);
        expect(owner.play()).toBe('Meow!');
    })
})