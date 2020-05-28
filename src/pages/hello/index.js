import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { getToken } from '../../store/actionCreator';
import './hello.css';
import hello from '../../static/hello.png';

class Hello extends PureComponent {
  render() {
    return (
      <Fragment>
        <div align="center">
          <img alt="" src={hello} width="600" height="400" />
        </div>
        <div className="bdiv">
          <button id="button" onClick={() => this.props.getToken(this.props.account)} >Say Hello!</button>
        </div>
      </Fragment>
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
      const ticker = "HELLO";
      dispatch(getToken(ticker, account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
