import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null
    }
  }

  render() {
    return (
      <button onClick={this.getAccount}>Click me to connect your metamask</button>
    )
  }

  async getAccount() {
    this.setState({account: await window.ethereum.enable()}, () => {
      console.log(this.state.account[0]);
    });
  }
}

export default Home;