Technology stack

* Languages: JavaScript, HTML, CSS
* IDE: Eclipse, Atom
* Frameworks: Express (runs on Node.js)
* Database: SQLite + Sequelize (sequelize-restful) (runs on Node.js)
* Testing Framework: Mocha

***
Run the application

1. `git pull`
2. `npm install`
3. `node app.js`
4. go to [localhost:3000](localhost:3000)

Before committing:
1. `mocha` should pass all tests
2. update the version number in `package.json`

***
Useful commands
* (`npm list --depth=0` (list all npm packages to verify correct install))

***
*mocha* Reporter Options
* `mocha --ui tdd --recursive`
* `--reporter nyan`
* `--reporter landing`

***
TODOs:
1. write some more tests
2. fix bugs (splitted line, etc.)
3. implement play button correctly
4. do some error handling
5. (add CraZY D1sc0 m0de!)
