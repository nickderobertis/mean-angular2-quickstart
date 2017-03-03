# MEAN Stack Angular2 Starter

An Angular 2 quick start combined with Express and ready to be hooked up to a MongoDB database. Clone this and
set up your MongoDB separately (e.g. with [Mlab](https://mlab.com/)), then create a .env file specifying your
database details.

Clone from Github for a local version
Clone from Gomix for a live, hosted version

Uses Mongoose to hook up to MongoDB. Includes an example Schema and corresponding Angular component and model.

I can't take credit for the Express and Mongoose code. These parts were mostly copied from the wonderful tutorials by:
[Ganga Chris](https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli) and
[Chris Sevilleja](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications) 

The Angular 2 was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

## Development server
Run `node server.js` in root directory after build. Navigate to http://localhost:3000/ to view the app.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Configuration
Create a `.env` file in the root directory describing your MongoDB database. It should be in the format:
`
# Environment Config

# store your secrets and config variables in here
# only invited collaborators will be able to see your .env values
# reference these in your code with process.env.SECRET

# Standard URI format: mongodb://[user:pass@]host:db_port/db
# If using mlab - you can find these details at the top of the page for your database,
# see http://docs.mlab.com/connecting/#connect-string
USER=joe
PASS=thisisapassword
HOST=localhost
DB_PORT=5000
DB=mydb

# note: .env is a shell file so there can't be spaces around '=
`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
