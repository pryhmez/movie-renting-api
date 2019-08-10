
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('db.json', 'utf8'))
let db;

// function Data (namee, passwordd) {
const getData = function () {
    // try {
        // return data
    // }

    // catch (e) {
    //     return e
    // }

    return data
}


function getUser(namee, passwordd) {

    const user = data.users;
    const x = user.length;
    var z = " gggg";

    for (let i = 0; i < x; i++) {
        let v = user[i];
        if (v.name == namee && v.password == passwordd) {
            z = 'login successful';
            return z
        } else {
            z = 'wrong details'
        }
    }

}


function getMovie() {

}

function createUser() {

}

function addMovie() {

}

// setTimeout(function (){console.log(z)},1000)
console.log(getUser("prince", "prince"))
// getUser();
// return z;
// }


module.exports = getUser;
// module.exports = Data;