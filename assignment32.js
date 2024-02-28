"use strict";
let current_Users = ['Admin', 'Eric', 'Daniyal', 'Maryam'];
let new_Users = ['Admin', 'Eric', 'Daniyal', 'Noor'];
let current_Users_lower = current_Users.map(user => user.toLowerCase());
for (let new_User of new_Users) {
    if (current_Users_lower.includes(new_User.toLowerCase())) {
        console.log(`You ${new_User} need to enter a new username.`);
    }
    else {
        console.log(`This ${new_User} username is available.`);
    }
}
