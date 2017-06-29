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
                        &copy; 2017
                    </p>
                </div>
            </div>
        </footer>;
  }
}

module.exports = Footer;
