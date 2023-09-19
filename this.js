
/*
   While this is used in various contexts, it's particularly important in classes and object-oriented programming
   because it allows you to work with instances of objects and their properties and methods.
   However, understanding this is crucial for all JavaScript developers,
   as it plays a fundamental role in determining the context in which code is executed.
*/

// Example 1: Global Context
// When used in the global scope, "this" refers to the global object (window in a web browser).
console.log(this === window); // true

// Example 2: Function Context
// Inside a regular function, "this" depends on how the function is called.
// In non-strict mode, it defaults to the global object (window in a browser).
// In strict mode, it defaults to "undefined."
function myFunction() {
  console.log(this);
}
myFunction(); // In a browser, "this" is the "window" object

// Example 3: Object Method Context
// Inside a method of an object, "this" refers to the object itself.
const person = {
  name: 'Alice',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.sayHello(); // "this" refers to the "person" object

// Example 4: Event Handlers
// Inside event handler functions, like those used with addEventListener,
// "this" often refers to the DOM element that triggered the event.
// const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // "this" refers to the button element
});

// Example 5: Constructor Functions
// Inside a constructor function, "this" refers to the newly created instance of the object.
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    about(){
        console.log(`This car is a ${this.make} ${this.model}`);
    }
}
const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make); // "Toyota"
myCar.about();

// Example 6: Arrow Functions
// Arrow functions do not have their own "this" context.
// They inherit "this" from the surrounding code.
const obj = {
  value: 42,
  getValue: () => {
    console.log(this.value); // "this" refers to the outer context, not "obj"
  }
};
obj.getValue(); // undefined (because "this" isn't from "obj")




//Arrow binding within regular functions vs arrow functions 

class MyClass {
    constructor(name) {
        this.name = name;
    }

    arrowMethod = () => {
        console.log("Arrow Method:", this.name); // Captures 'this' from MyClass instance
    }

    regularMethod() {
        console.log("Regular Method:", this.name); // 'this' is set to the MyClass instance when called
    }
}

const myObject = {
    name: "My Object",
    arrowMethod: () => {
        console.log("Arrow Method:", this.name); // Captures 'this' from the global context
    },
    regularMethod() {
        console.log("Regular Method:", this.name); // 'this' is set to myObject when called
    }
}

const myInstance = new MyClass("Instance");

myObject.arrowMethod();   // Arrow Method: Global
myObject.regularMethod(); // Regular Method: My Object

myInstance.arrowMethod();   // Arrow Method: Instance
myInstance.regularMethod(); // Regular Method: Instance

//Rover example class
class Dog {
    constructor(name){
        this.name = name;
    }

    sound = "woof";

    introduce = () => console.log(`Hello, my name is ${this.name}`);

    bark = () => console.log(this.sound);

    delayBarkArrow(){
        setTimeout(()=> console.log(this.sound), 1000);
    }

    delayBark(){
        setTimeout(function(){
            console.log(this.sound)
        }, 1000);

    }
}

let rover = new Dog("Rover");
rover.bark();
rover.introduce();
rover.delayBarkArrow();
rover.delayBark();

//Rover example object

let roverObj = {
    name: "Rover",
    sound: "woof",
    introduce: function(){
        console.log(this.name);
    },
    bark: function(){
        console.log(this.sound)
    }
}

roverObj.introduce();
roverObj.bark();
























