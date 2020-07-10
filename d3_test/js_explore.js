'use strict'
let x = 5;
const y = 3;
const COLOR_RED = "#F00"; //good for alliases
//alert('hello');


let admin;
let name;
name = 'John';
admin = name;
alert( `Hello, ${admin}!` );
//undefined type is used for unassigned vals

//"6" / "2" prints 3
alert('2'/'1');


// +str turns it to num

//strict equality === looks at type
//prompt same as input() python
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

//is the same as
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }

//
let x;
if (condition== true) {
    x = 1
} 

//shorter way:
let x;
False || (x = 1);

//double note !! converts values to boolean

let i = 3;
while (i) {
    alert(i)
    i--; //when i becomes 0, terminates
}

//do while when you want body of loop to execute at least once
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


//use break to stop loop, continue to skip current iter
//use labels to break outer

//to exit function use a return

function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
  
    alert( "Showing you the movie" ); // (*)
    // ...
  }

  //you can pass in functions as parameters
  //or can pass anonymous functions like so:

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );