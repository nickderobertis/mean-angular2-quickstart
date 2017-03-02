/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Collect variables to conect to db. These should be defined in a
//.env file in the root project directory, e.g.
//USER=joe
//PASS=thisisapassword
//HOST=localhost
//DB_PORT=5000
//DB=mydb
var getMongoUri = function() {
    var USER = process.env.USER || '';
    var PASS = process.env.PASS || '';
    var HOST = process.env.HOST || 'localhost';
    var DB_PORT = process.env.DB_PORT || '';
    var DB = process.env.DB || 'test';

    if (USER && PASS) {
        var userPass = USER + ':' + PASS + '@';
    }
    else {
        var userPass = '';
    }

    if (DB_PORT) {
        var dbPortStr = ':' + DB_PORT;
    }
    else {
        var dbPortStr = '';
    }

    return 'mongodb://' + userPass + HOST + dbPortStr + '/' + DB;
}

exports.getMongoUri = getMongoUri;
