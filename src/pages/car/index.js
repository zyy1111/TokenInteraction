import React, { PureComponent } from "react";

class Detail extends PureComponent {
  render() {
    return (
      <button>get token</button>
    )
  }

  componentDidMount() {
    this.getAccount();
  }

  async getAccount() {

  }


}

export default Detail;