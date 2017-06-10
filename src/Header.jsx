'use strict';

const React = require('react');

class Header extends React.Component {
  render () {
    return <header>
            <div>           
                <div>
                    <h1>Pwny Player</h1>                    
                </div>
                <div>
                    <hr className="hrstyle"></hr>
                </div>
            </div>
		</header>;
  }
}

module.exports = Header;
