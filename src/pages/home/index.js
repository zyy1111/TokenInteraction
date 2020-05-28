import React from "react";
import { connect } from "react-redux";
import { getAccount } from '../../store/actionCreator';
import './home.css';

class Home extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Click the folk below to connect your account!</h2>
        <div className="div">
          <img onClick={this.props.getAccount} alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMZGR-yRzNYLI5T9k91ozaQQ8jpeepSY9YkoW7AU0Vud3t9rgX&usqp=CAU"></img>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    async getAccount() {
      let accounts = await window.ethereum.enable();
      dispatch(getAccount(accounts[0]));
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);