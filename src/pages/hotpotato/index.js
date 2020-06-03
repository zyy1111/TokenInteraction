import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getToken } from '../../store/actionCreator';
import hotpotato from '../../static/hotpotato.jpg';
import './potato.css';
import url from '../../static/potato.mp3';

class Hotpatato extends PureComponent {
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
      <div>
        <div align="center">
          <img alt="" src={hotpotato} ></img>
        </div>
        <button className="btn" onClick={() => {this.handleClick(); this.props.getToken(this.props.account);}}>Eat us!</button>
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
      let conf = window.confirm("Are you sure?");
      if(conf) {
        const ticker = "HOTPOTATO";
        dispatch(getToken(ticker, account));
        window.alert("Success!");
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotpatato);
