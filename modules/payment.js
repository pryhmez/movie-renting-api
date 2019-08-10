const inquirer = require('inquirer');
const fs = require('fs')
var fileName = '../db.json';
var file = require('../db.json');
const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'))

var question = [
    {
        name :"pay",
        message : "please enter your name",
        type: 'input'
    }
]
function payment (ammountForMovie) {
    console.log(ammountForMovie)
    inquirer.prompt(question).then(answer => {
        let ans = answer.pay
        for(let i = 0; i < data.users.length; i++) {
            if (ans == data.users[i].name) {
                // console.log(file);
                // console.log(file.users)
                file.users[i].wallet=data.users[i].wallet - ammountForMovie;
                fs.writeFileSync(fileName, JSON.stringify(file));
                console.log('writing to ' + fileName);
                
                
            }
        }
    })
}
// payment(1000)

exports.payment = payment;


