"use strict";
let magicians = ['John', 'Tom', 'Winslet'];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
// 43 Started
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
const magicians3 = ['John', 'Tom', 'Winslet'];
const greatMagicians2 = make_great2(magicians);
show_magicians(magicians3);
show_magicians(greatMagicians2);
