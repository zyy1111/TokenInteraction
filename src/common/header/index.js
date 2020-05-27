import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <Link to="/"><img src="http://13.57.47.139/adventure-logo.png" alt="logo" /></Link>
        <div className="flex-container">
          <Link to="/hotpotato" className="link"> HOTPOTATO </Link>
          <Link to="/petcare" className="link"> PETCARE </Link>
          <Link to="/car" className="link"> CAR </Link>
        </div>
      </div>
    )
  }
}

export default Header;