
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'))
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


function getUser(name, password) {

    const user = data.users;
    const x = user.length;
    var z = " gggg";

    for (let i = 0; i < x; i++) {
        let v = user[i];
        // console.log(name)
        // console.log(v.name)
        
        if (name === v.name.toString() && password === v.password.toString()) {
            z = 'login successful';
            console.log("welcome" + v.name)
            
            return z
        } 
        if (v.name !== name || v.password !== password){
            z = 'wrong details'
            
            
        }
    }
    return z

}


function getMovie() {

}

function createUser() {

}

function addMovie() {

}

// setTimeout(function (){console.log(z)},1000)
// console.log(getUser("prince", "prince"))
// getUser();
// return z;
// }


exports.getUser = getUser;
// module.exports = Data;