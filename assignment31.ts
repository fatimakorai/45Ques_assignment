let users :string[] = ["Eric", "Daniyal", "FatimaK", "Maryam"];

if (users.length === 0) {
    console.log('We need to find some users!')

}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?")
        }
        // else {
        //     console.log(`Hello, ${users} thank you for logging in again.`)
        // }
    }
}

users = [] 
if (users.length === 0) {
    console.log('We need to find some users!')
}
