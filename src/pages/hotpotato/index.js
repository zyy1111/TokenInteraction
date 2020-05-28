import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getToken } from '../../store/actionCreator';
import hotpotato from '../../static/hotpotato.jpg';
import './potato.css';

class Hotpatato extends PureComponent {
  render() {
    return (
      <div>
        <div align="center">
          <img alt="" src={hotpotato} ></img>
        </div>
        <button className="btn" onClick={() => this.props.getToken(this.props.account)}>Eat us!</button>
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
      const ticker = "HOTPOTATO";
      dispatch(getToken(ticker, account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotpatato);
