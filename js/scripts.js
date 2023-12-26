alert('Hello world');
let favoriteFood = 'pie';
document.write(favoriteFood);

let escapedText = "He said: \"Yes!\", that's for sure.";
let escapedText2 = 'He said: "Yes!", that\'s for sure.';

let name = 'John';
let age = 32;
let message = `Hello!
This is a longer message here.
My name is ${name},
and I'm ${age}.`;
console.log(message);

let Boolean1 = true;
let Boolean2 = false;
let notABoolean = 'true'; //* This is the string true. It's not a boolean *//

let annesAge = 27;
let anne = {
  name: 'Anne',
  age: annesAge,
  child: {
    name: 'Joe',
    age: 2
  }
};

console.log(anne.child.name);

delete anne.age;

console.log(anne.age);

let currentUserName = 'sam';

let userAges = {
  anne: 27,
  same: 112,
  megan: 97,
}

userAges [currentUserName] = 113;
console.log(userAges[currentUserName]);