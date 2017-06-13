'use strict';

const React = require('react');

class Footer extends React.Component {
  render () {
    return <footer>
            <div>
                <div>
                    <hr className="hrstyle"></hr>
                </div>
                <div>
                    <p>
                        &copy; 2017 Hochschule Esslingen, Web Technologien, Dozent: <a href="https://github.com/goloroden">Golo Roden</a>,
                        Autoren: Daniel Mader, Tobias Horn, Patrick Solisch
                    </p>
                </div>
            </div>
        </footer>;
  }
}

module.exports = Footer;
