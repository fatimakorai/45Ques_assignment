"use strict";
let guests = ['Zujaja', 'Dawood', 'Layal'];
// for (let i=0; i<guests.length; i++) {
//     console.log(' Dear Guest, ' + guests[i] + '\n\nI would like to invite you to my special occasion. \n\n')
// }
let absent_Guest = 'Layal';
let new_Guest = 'FatimaK';
guests[2] = new_Guest;
// for (let i=0; i<guests.length; i++) {
//     console.log(' Dear Guest, ' + guests[i] + '\n\nI would like to invite you to my special occasion. \n\n')
// }
console.log(` Miss ${absent_Guest} is not coming to this occassion.`);
console.log('Good news, I found a bigger dinner table, so now I am inviting 3 more guests.');
guests.unshift('Maimana ');
guests.splice(2, 0, 'Ikrima');
guests.push('Mariyamk');
for (let i = 0; i < guests.length; i++) {
    console.log(' Dear Guest, ' + guests[i] + '\n\nI would like to invite you to my special occasion. \n\n');
}
console.log('\n Sorry we can not arrange big table, only two people are invited atm. ');
while (guests.length > 2) {
    let remove_people = guests.pop();
    console.log(`Sorry Dear Guest, ${remove_people}, you are not invited for dinner.`);
}
for (let i = 0; i < guests.length; i++) {
    console.log(' Dear Guest, ' + guests[i] + '\n\nYou are still invited to this ocassion. \n\n');
}
guests.splice(0, 2);
console.log(guests);
