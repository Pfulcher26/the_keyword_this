//this is in console 

//this in the event handler 

//this when called inside of a function declaration or expression that is not an arrow function
function logThis(){
    console.log(this)
}

//this inside of a function that is within an object 

const dog = {
    name: "Sinead", 
    sound: "woof!",
    //will work 
    bark: function(){
        console.log(this.sound);
    },
    delayedBark: function(){
        setTimeout(()=> console.log(this.sound), 1000);
    },
}

// dog.delayedBark();
// dog.delayedBarkArrow();
// dog.barkArrow();


class Animal{
    //constructor function is called whenever a new instance of a class is created
    constructor(name, sound){
        //this refers to the newly created instance
        this.name = name;
        this.sound = sound;
    }

    //this approach will work 
    introduce(){
        console.log(`I am ${this.name} and the sound I make is ${this.sound}`);
        // return `I am ${this.name} and the sound I make is ${this.sound}`
    }

    //this approach will also work 
    //the scope of the arrow function in a class is always bound to the instance of the class
    introduceArrow = () => console.log(`I am ${this.name} and the sound I make is ${this.sound}`);

    //this approach will still not work 
    delayedIntroduction() {
        setTimeout(function() {
            console.log(`I am ${this.name} and the sound I make is ${this.sound}`);
        }, 1000);
    }

    //this approach will work  
    delayedIntroductionArrow() {
        setTimeout(() => console.log(`I am ${this.name} and the sound I make is ${this.sound}`), 1000);
    }

    //always want to be safe?  Write everything as an arrow function
    delayedIntroductionDoubleArrow = () => setTimeout(() => console.log(`I am ${this.name} and the sound I make is ${this.sound}`), 1000);
}

let classyDog = new Animal("Jeeves", "bowwow!");
classyDog.delayedIntroductionDoubleArrow();





//arrow functions can only be called after they are defined
globallyAvailable = () => console.log("call me only after I have been defined")

globallyAvailable()

//arow vs function expression 
array.map(x => x * x)

array.map(function(x){
    return x * x; 
})