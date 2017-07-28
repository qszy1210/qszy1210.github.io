#!/usr/bin/env node

// var shelljs = require('shelljs');
// var addCheckMark = require('./helpers/checkmark');
// var path = require('path');

// var cpy = path.join(__dirname, '../node_modules/cpy-cli/cli.js');

// shelljs.exec(cpy + ' ./_gitbook/_book/* ./ --parents', addCheckMark.bind(null, callback));

// function callback() {
//   process.stdout.write(' Copied /_gitbook/_book/* to the / directory\n\n');
// }

var ncp = require('ncp').ncp;
 
ncp.limit = 16;
 
ncp('./_gitbook/_book/', './', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});
