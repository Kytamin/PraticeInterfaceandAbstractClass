import {Tiger} from "./Animal/Tiger";
import {Chicken} from "./Animal/Chicken";
import {Apple} from "./Fruit/Apple";
import {Orange} from "./Fruit/Orange";

console.log('---Animals-----')
let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})

console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.log(item.howToEat())
})

