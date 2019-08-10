const inquirer = require('inquirer');

function signup() {
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
                if (value.length < 7){
                  return 'password must be greater than seven digits';
                }else{
                    return true;
                }
            }
          },
          {
            type: 'input',
            name: 'phone',
            message: "What's your phone number",
            validate: function(value) {
              var pass = value.match(
                /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
              );
              if (pass) {
                return true;
              }
        
              return 'Please enter a valid phone number';
            }
          }
    ]


};

module.exports = signup;