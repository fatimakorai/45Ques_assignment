"use strict";
let guests = ['Zujaja', 'Dawood', 'Layal'];
for (let i = 0; i < guests.length; i++) {
    console.log(' Dear Guest, ' + guests[i] + '\n\nI would like to invite you to my special occasion. \n\n');
}
let absent_Guest = 'Layal';
let new_Guest = 'FatimaK';
guests[2] = new_Guest;
for (let i = 0; i < guests.length; i++) {
    console.log(' Dear Guest, ' + guests[i] + '\n\nI would like to invite you to my special occasion. \n\n');
}
console.log(` Miss ${absent_Guest} is not coming to this occassion.`);
