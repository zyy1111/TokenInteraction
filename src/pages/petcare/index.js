import React, { PureComponent } from "react";
import ReactDom from 'react-dom';
import { connect } from "react-redux";
import { getToken } from '../../store/actionCreator';
import './pet.css';
import pet1 from '../../static/pet1.jpg';
import pet2 from '../../static/pet2.jpg';
import pet3 from '../../static/pet3.jpg';
import pet4 from '../../static/pet4.jpg';
import pet6 from '../../static/pet6.gif';
import url from '../../static/pet.mp3';

class Petcare extends PureComponent {

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
        <img alt="" src={pet1} className="img"></img>
        <img alt="" src={pet2} className="img"></img>
        <img alt="" src={pet3} className="img"></img>
        <img alt="" src={pet4} className="img"></img>
        <img alt="" src={pet6} id="pet6"></img>
        <button className="button" onClick={() => {this.handleClick(); this.props.getToken(this.props.account);}}>Feed them!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account,
    petNum: state.petNum
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToken(account) {
      let conf = window.confirm("Are you sure?");
      if(conf) {
        const ticker = "PETCARE";
        dispatch(getToken(ticker, account));
        
        let res = document.getElementById('pet6');
        ReactDom.findDOMNode(res).style.display='block';
        window.alert("Success!");
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Petcare);
