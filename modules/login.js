const inquirer = require('inquirer');
const getuser = require('../dbReader');
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
         let resp = getuser(name, password);
         console.log(resp);
    });


};


// let resp = getuser(name, password, dataa);
// console.log(resp);
login();
module.exports = login;

