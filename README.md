Technology stack

* Languages: JavaScript, HTML, CSS
* IDE: Eclipse, Atom
* Frameworks: Express (runs on Node.js)
* Database: SQLite + Sequelize (sequelize-restful) (runs on Node.js)
* Testing Framework: Mocha

***
Run the application

* *do a git pull first*
* *switch to folder Pwny-Player*
* `npm install`
* (`npm list --depth=0` (list all npm packages to verify correct install))
* `node app.js` (go to **localhost:3000** to see the Pwny-Player start page)

***
Testing with *mocha*
* `npm install -g mocha` (-g installs mocha globally)
* `mocha --ui tdd --recursive`

Reporter Options
* `--reporter nyan`
* `--R landing`
