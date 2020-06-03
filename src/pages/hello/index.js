import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { getToken } from '../../store/actionCreator';
import './hello.css';
import hello from '../../static/hello.png';
import url from '../../static/hello.mp3';

class Hello extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      audio: false
    };
  }

  handleClick = () => {
    const audio = new Audio(url);
    this.setState({ audio }, () => {
      this.state.audio.play();
    });
  };

  render() {
    return (
      <Fragment>
        <div align="center">
          <img alt="" src={hello} width="600" height="400" />
        </div>
        <div className="bdiv">
          <button id="button" onClick={() => {this.handleClick(); this.props.getToken(this.props.account);}}>Say Hello!</button>
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
      console.log(account);
      let conf = window.confirm("Are you sure?");
      if(conf) {
        const ticker = "HELLO";
        dispatch(getToken(ticker, account));
        window.alert("Success!");
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
