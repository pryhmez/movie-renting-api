const inquirer = require('inquirer');
const {getUser} = require('../dbReader');
const {services} = require('./services')
const fs = require('fs')
// const dataa = JSON.parse(fs.readFileSync('../d.json', 'utf8'))

// getuser('nmaa','hyeyy')
function login() {

  var questions = [
    {
      type: 'input',
      name: 'name',
      message: "Please Input Your Name"
    },
    {
      type: 'password',
      name: 'password',
      message: "What's your password",
      mask: '*',
      validate: function (value) {
        if (value.length < 0) {
          return 'password must be greater than seven digits';
        } else {
          return true;
        }
      }
    }
  ]

  // let name = " ";
  // let password = " ";

  inquirer
    .prompt(
      /* Pass your questions in here */
      questions
     
    )
    .then(answers => {
      // Use user feedback for... whatever!!
      
      let name = answers.name
      let password = answers.password
         let resp = getUser(name, password);
         console.log(resp);
         if (resp == 'login successful') {
           services();
         }
    });


};


// let resp = getuser(name, password, dataa);
// console.log(resp);

module.exports = login;

