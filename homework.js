class Hamster {

    constructor(owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }

    wheelRun(){
        console.log("squeak squeak");
    }

    eatFoor(){
        console.log("nibble nibble");
    }

    getPrice(){
        return this.price;
    }

}

class Person {

    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankAccount = 0;

    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;

    }


    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }

    eat(){
        this.weight += 1;
        this.mood +=1;
    }

    exercise(){
        this.weight -=1;
    }

    ageUp(){
        this.age +=1;
        this.height+=1;
        this.weight+1;
        this.mood-=1;
        this.bankAccount=+10;
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount-=hamster.getPrice();
    }

}


//make a new person timmy
let timmy = new Person("Timmy", 10, 4, 40, 5,[],10);


// age timmy 5 years
timmy.age = timmy.age + 5;

console.log(timmy.age, "age");


//before eating 5 times
console.log(timmy.weight, timmy.mood, "before eating");

//eat 5 times
for (let i = 0; i< 5;i++){
    timmy.eat();
}

//after eating
console.log(timmy.weight, timmy.mood, "after eating");

//before exercising 5 times
console.log(timmy.weight, "before exercising");

//exercise 5 times
for (let i = 0; i< 5;i++){
    timmy.exercise();
}

//after exercising
console.log(timmy.weight, "after exercising");

//before aging
console.log(timmy.age, "age before");

// age timmy 9 years
timmy.age = timmy.age + 9;

//after aging
console.log(timmy.age, "age after");

//create hamster
let gus = new Hamster("", "Gus", 5);

//set gus's owner to timmy
gus.owner = "Timmy";

// check gus's owner
console.log("Gus's owner is", gus.owner);

//have timmy buy gus
timmy.buyHamster(gus);

//verify timmy bought gus
console.log(timmy);

//before aging
console.log(timmy.age, "age before");

// age timmy 15 years
timmy.age = timmy.age + 15;

//after aging
console.log(timmy.age, "age after");

//before eating 5 times
console.log(timmy.weight, timmy.mood, "before eating");

//eat 5 times
for (let i = 0; i< 2;i++){
    timmy.eat();
}

//after eating
console.log(timmy.weight, timmy.mood, "after eating");

//before exercising
console.log(timmy.weight, "before exercising");

//exercise 2 times
for (let i = 0; i< 2;i++){
    timmy.exercise();
}

//after exercising
console.log(timmy.weight, "after exercising");


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CHEF MAKES DINNER - below
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Dinner {

    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {

    order(app, ent, des){

        let dinner = new Dinner(app, ent, des);

        console.log(`Dinner will be ${dinner.appetizer} then ${dinner.entree} for the main course and ${dinner.dessert} for dessert`);
    }

}

let chefBob = new Chef();
chefBob.order("onion rings", "steak", "ice cream");

chefBob.order("loaded fries", "salad", "pie");

chefBob.order("fried cheese sticks", "cheesburger", "cake");
