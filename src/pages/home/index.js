import React from "react";
import { connect } from "react-redux";
import { getAccount } from '../../store/actionCreator';
import './home.css';

class Home extends React.Component {
  
  render() {
    return (
      <div>
        {
          this.props.account || localStorage.getItem('account') ? 
          <div>
            <h2>Welcome! {this.props.account || localStorage.getItem('account')} </h2> 
            <h2>Now you can click any link to start the game and win tokens!</h2> 
          </div>
          : <h2>Click the folk below to connect your account!</h2>
        }
        <div className="div">
          <img onClick={this.props.getAccount} alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMZGR-yRzNYLI5T9k91ozaQQ8jpeepSY9YkoW7AU0Vud3t9rgX&usqp=CAU"></img>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    async getAccount() {
      let accounts;
      if(localStorage.getItem('account')) {
        accounts = localStorage.getItem('account')
      } else {
        accounts = await window.ethereum.enable();
        localStorage.setItem('account', accounts);
      }
      dispatch(getAccount(accounts[0]));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);