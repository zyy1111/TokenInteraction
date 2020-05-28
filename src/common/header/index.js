import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <Link to="/"><img src="http://13.57.47.139/adventure-logo.png" alt="logo" /></Link>
        <div className="flex-container">
          <Link to="/hotpotato" className="link"> HOTPOTATO </Link>
          <Link to="/petcare" className="link"> PETCARE </Link>
          <Link to="/hello" className="link"> HELLO </Link>
          <div className="score">
            <p className="bold">Amount of tokens you have got:</p>
            <div>HOTPOTATO: {this.props.potatoNum} </div>
            <div>PETCARE: {this.props.petNum} </div>
            <div>HELLO: {this.props.helloNum} </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    helloNum: state.helloNum,
    petNum: state.petNum,
    potatoNum: state.potatoNum
  }
}

export default connect(mapStateToProps, null)(Header);
