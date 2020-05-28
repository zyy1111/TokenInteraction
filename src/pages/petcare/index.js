import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getToken } from '../../store/actionCreator';
import './pet.css';
import pet1 from '../../static/pet1.jpg';
import pet2 from '../../static/pet2.jpg';
import pet3 from '../../static/pet3.jpg';
import pet4 from '../../static/pet4.jpg';

class Petcare extends PureComponent {
  render() {
    return (
      <div>
        <img alt="" src={pet1}></img>
        <img alt="" src={pet2}></img>
        <img alt="" src={pet3}></img>
        <img alt="" src={pet4}></img>
        <button className="button" onClick={() => this.props.getToken(this.props.account)}>Feed them!</button>
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
    getToken(account) {
      const ticker = "PETCARE";
      dispatch(getToken(ticker, account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Petcare);
