const inquirer = require('inquirer');
const fs = require('fs')
const { payment } = require('./payment')
const data = JSON.parse(fs.readFileSync('./db.json', 'utf8'))

function services() {

    let movielist = []
    for (let i = 0; i < data.movies.length; i++) {
        movielist.push(data.movies[i].title)
    }



    var questions = [
        {
            type: 'list',
            message: "What Would You Have Us Do For You Today",
            name: 'framework',
            choices: ["RentMovie", "See Movie List", "Top Up Wallet", "Check Wallet", new inquirer.Separator(), new inquirer.Separator(), "Exit"]
        },

        {
            type: 'list',
            name: 'movielist',
            message: "Please Select Movie",
            choices: movielist,
            validate: function (value) {
                if (value.length < 0) {
                    return 'password must be greater than seven digits';
                } else {
                    return true;
                }
            }
        }
    ]


    inquirer
        .prompt(
            /* Pass your questions in here */
            questions[0]
        )
        .then(answers => {
            // Use user feedback for... whatever!!
            let resp = answers.framework
            if (answers.framework == "RentMovie") {
                console.log("see movie list")
            }
            if (answers.framework == "See Movie List") {
                inquirer.prompt(questions[1]).then(answers => {
                    let movie = answers.movielist
                    for (let i = 0; i < data.movies.length; i++) {

                        if (data.movies[i].title == movie) {
                            // console.log(data.movies[i].cost)
                            payment(data.movies[i].cost)

                            break
                        }
                    }

                })
            }
            if (answers.framework == "Top Up Wallet") {
                console.log("fkwnfo")
            }
            if (answers.framework == "Check Wallet") {

            }
            if (answers.framework == "Exit") {

            }


        });


    // inquirer
    //     .prompt(
    //         /* Pass your questions in here */
    //         questions[0]
    //     )
    //     .then(answers => {
    //         // Use user feedback for... whatever!!

    //     });

}

exports.services = services;