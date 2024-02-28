"use strict";
let alien_color = 'green';
// Create a variable called alien_color and assign it a value of 'green'
if (alien_color === 'green') {
    console.log('Player just earned 5 Points.');
}
// The version that fails will have no output.
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log('Player just earned 5 Points.');
}
