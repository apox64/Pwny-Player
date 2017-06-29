'use strict';

const React = require('react');

class Header extends React.Component {
  render () {
    return <header>
            <div>
                <div>
                    <h1>
                      <img src="../images/pinkie_pie.png" alt="here should be an image" width="70" height="70"></img>
                        Pwny Player
                      <img src="../images/apple_jack.png" alt="here should be an image" width="70" height="70"></img>
                    </h1>
                </div>
                <div>
                    <hr className="hrstyle"></hr>
                </div>
            </div>
		</header>;
  }
}

module.exports = Header;
