var fs = require('fs');
var fileName = './db.json';
var file = require('./db.json');

file.users[0].name = "new value";

fs.writeFile(fileName, JSON.stringify(file), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});