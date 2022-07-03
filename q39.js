// Explain Prototype Inheritance in JavaScript? 

// In a language implementing classical inheritance like Java, C# or C++ you start by creating a class--a blueprint for your objects - and then you can create new objects from that class or you can extend the class, defining a new class that augments the original class.

// In JavaScript you first create an object (there is no concept of class), then you can augment your own object or create new objects from it.

// Every object in Javascript has a prototype. JavaScript's inheritance system is prototypical, and not class-based. When a message reaches an object, JavaScript will attempt to find a property in that object first, if it cannot find it then the message will be sent to the object’s prototype, and so on. That behavior called prototype chain of prototype inheritance.

// Constructor functions are the most used way in JavaScript to construct prototype chains. When we use new, JavaScript injects an implicit reference to the new object being created in the form of the this keyword. It also returns this reference implicitly at the end of the function.


// object person
let person = {
    talk: true,
    Canfly() {
        return "Sorry, Can't fly";
    },
};
// Object GFGuser
let GFGuser = {
    CanCode: true,
    CanCook() {
        return "Can't say";
    },
    
  //  Inheriting the properties and methods of person
    __proto__: person, 
};

// Printing on console
// Property of person
console.log("Can a GFG User talk: " + GFGuser.talk); 

// Method of person
console.log("Can a GFG User fly: " + GFGuser.Canfly()); 

// Property of GFGuser
console.log("Can a GFG User code: " + GFGuser.CanCode); 

// Method of GFGuser
console.log("Can a GFG User cook: " + GFGuser.CanCook()); 
