const inquirer = require('inquirer');
const getuser = require('../dbReader');

// getuser('nmaa','hyeyy')
function login () {

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
        validate: function(value) {
            if (value.length < 0){
              return 'password must be greater than seven digits';
            }else{
                return true;
            }
        }
      }
]

inquirer
  .prompt(
    /* Pass your questions in here */
   questions
  )
  .then(answers => {
    // Use user feedback for... whatever!!
   
    let name = JSON.stringify(answers.name, null, ' ');
    let password = JSON.stringify(answers.password, null, ' ');
//    let resp = getuser(name, password);
//    console.log(resp);
  });


};

login();
module.exports = login;

