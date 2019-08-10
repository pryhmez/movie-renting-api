const inquirer = require('inquirer');
const login = require('./modules/login.js');
const signup = require('./modules/signup.js');

let questions = [
    {type: 'list', 
    message: "Welcome please login or signup if you do not have an account", 
    name: 'framework', 
    choices:["Login", "Signup",new inquirer.Separator(),new inquirer.Separator(), "Exit"]
    },
  
  ];
  
//   inquirer.prompt(questions).then(answers => {
//       let resp = JSON.stringify(answers.framework, null, '  ');
//     console.log(resp);
//   });

inquirer
  .prompt(
    /* Pass your questions in here */
   questions
  )
  .then(answers => {
    // Use user feedback for... whatever!!
    
       let resp = JSON.stringify(answers.framework, null, ' ')
        console.log(resp);
        if(resp = "Login"){
            login();
            console.log(resp)
        }
        if(resp = "Signup"){
            // login();
        }
        if(resp = "Exit"){
            // login();
        }
        
    
  });