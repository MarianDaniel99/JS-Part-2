// JS Part 2
//Prototypes

//Task 1:
let head = {
    glasses: 1
};
  
let table = {
    pen: 3
};
  
let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__=table;
table.__proto__=head;

//Answer: It is faster to get the glasses through head.glasses instead of pockets.glasses
//Solution:
let start = performance.now();
let glasses1 = pockets.glasses;
let end = performance.now();
console.log(`pocket.glasses = ${end-start} milliseconds`);

start = performance.now();
let glasses2 = head.glasses;
end = performance.now();
console.log(`head.glasses = ${end-start} milliseconds`);

//Task 2:
//Answer : Rabbit object receives the full property.
//In JS when we call a method on an object, like rabbit.eat() , "this" keyboard inside the method refers to the object that called the method

let animal = {
    eat() {
      this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};
rabbit.eat();

//Classes 
//Task: Check class Clock.js


//Objects
//Task 1:
let user = {
    name: 'John',
    age: 30
};

function count(obj){
    const propertyNames = Object.getOwnPropertyNames(obj);
    return propertyNames.length;
}

console.log(count(user));

//Task 2:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
function sumSalaries(salaries){
    let sum =0;
    for(let salary of Object.values(salaries)){
        sum += salary;
    }
    return sum;
}

console.log(sumSalaries(salaries));

// Destructuring assignment
// Task 1:
//The object is already declared up , named "user"

let {name, age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);

//Map and Set
//Task 1:
let values = [
    "Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr){
    let set = new Set(arr);
    let uniqueArray = [];
    for (let value of set){
    uniqueArray.push(value);
}
    return uniqueArray;
}
console.log(unique(values));

//Task 2:
//We can't use push method because we don't have an array. We need to convert the iterator to an array.
//Corected version :
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys()); //first method
// let keys = [...map.keys()]  // second method
keys.push("more");
console.log(keys);

