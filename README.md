Technology stack proposal

* Languages: JavaScript, HTML, CSS
* IDE: Eclipse, Atom
* Frameworks: Express (runs on Node.js)
* Database: SQLite + Sequelize (sequelize-restful) (runs on Node.js)
* Testing Framework: Mocha

***

Install and init the *Express Framework*

*(PLEASE DO NOT SIMPLY COPY & PASTE THESE COMMANDS. FILES WILL BE OVERWRITTEN AND F&ast;&ast;&ast; UP THE REPOSITORY.)*

* `npm install express-generator -g` (`-g` or `--global` installs the package globally)
* `npm list -g --depth=0` (list all npm packages to verify correct install)
* `express --view=pug Pwny-Player` (**pug** builds the folder structure)
* `cd Pwny-Player && npm install` (modules are installed)
* `npm start` (go to **localhost:3000** to see the Express welcome page)

Add *Mocha Testing Framework*
* `npm install mocha -g`
* `mkdir test`
* `mocha --recursive`
