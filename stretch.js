// ----------Stretch 1----------
// Write a function that would allow you to do this using a closure.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(a) {
  return function(b) {
    return a + b;
  }
}

const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));


// ----------Stretch 2----------
// Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

// Functional Programming: the key concept in functional programming is that functions are dependent only on their inputs. That is, they are independent of state. A function with input "a" will always return "b". Also important is that these functions do not alter the data that is passed to them. In other words, they use it to generate the output but they don't change it.
// 1) Given certain inputs, the function will always return the same
// 2) The function has no side-effect (i.e. no console logging!)
// 3) The function is self-contained (i.e. it doesn't depend on variables outside its scope)

// Object-Oriented Programming: at its most basic form, OOP is a paradigm focused on objects that encapsulate data (attributes) and functions (methods). The object's functions are designed to perform actions on its data; that is, these functions operate on the object in order to change its state. Objects can be visualized as real-world entities described by its features and its functions. For example, a dog that is large, beige and hungry. It can eat, sleep and bark. When it eats, its hungry state goes from true to false. Also of note, objects typically derive their characteristic from some template, prototype or generic class.

// Pros and Cons:
// One key difference is that functional programming adheres to immutability whereas OOP is dependent on mutability (i.e. changing states). The main benefits of OOP are encapsulation (allowing for more efficient creation of new data sets with less repetition) and the encapsulation of data and related functions in the object itself. The main benefits of functional programming are the separation of data sets and the functions to use them along with reduced potential for data integrity issues.
