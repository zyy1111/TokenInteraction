import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getBalance } from '../../store/actionCreator';
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
            <div>HELLO: { this.props.helloNum } </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getBalance(this.props.account, "HELLO");
    this.props.getBalance(this.props.account, "HOTPOTATO");
    this.props.getBalance(this.props.account, "PETCARE");
  }
}

const mapStateToProps = (state) => {
  return {
    helloNum: state.helloNum,
    petNum: state.petNum,
    potatoNum: state.potatoNum,
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBalance(account, tokenType) {
      let contractAdd = "";
      if(tokenType === "HELLO") {
        contractAdd = "0x1Fda96405DD8Ee22631aBCf4f61282eaE802012f";
      } else if (tokenType === "PETCARE") {
        contractAdd = "0x231fa9e257ac9ae058adf672e2d51809d8baff48";
      } else {
        contractAdd = "0xa4bb0c9c72ac57a8fcf2c28f0c1a3e6c75f70ca3";
      }
      dispatch(getBalance(contractAdd, account, tokenType));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
