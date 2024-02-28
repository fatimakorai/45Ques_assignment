"use strict";
let humanName = "Mariyam";

humanName = prompt("What is your name?") || '';

if (humanName !== null && humanName !== '') {
    alert(`Hello ${humanName}, would you like to learn some Python today?`);
}
