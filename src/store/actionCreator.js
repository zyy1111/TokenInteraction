import axios from 'axios';

export const getAccount = (account) => {
  return {
    type: "get_account",
    value: account
  }
}

export const changeNum = (ticker) => {
  return {
    type: "add_token_number",
    ticker
  } 
}

export const getBalance = (contractaddress, account, tokenType) => {
  return (dispatch) =>{
    axios({
      method: 'get',
      url: "https://api.etherscan.io/api",
      params: {
        module: "account",
        action: "tokenbalance",
        contractaddress: contractaddress,
        address: account,
        tag: "latest",
        apikey: 'KTPYIZZ78MT38F9VK8TXVQSUP93VKHPXIV',
      }
    }).then((res) => {
      let balance = res.data.result.toString();
      let output = parseInt(balance.substring(0, balance.length - 18));
      dispatch(changeBalance(tokenType, output));
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const changeBalance = (tokenType, output) => {
  return {
    type: "CHANGE_BALANCE",
    output,
    tokenType
  }
}

export const getToken = (ticker, account) => {
  console.log(account);
  return (dispatch) => {
    axios.post("http://13.56.163.182:8000/transfer-token", {
      ticker: ticker,
      amount: 1,
      to: account,
      hookUrl: "test",
    }).then(() => {
      dispatch(changeNum(ticker));
    }).catch((err) => {
      console.log(err);
      alert("Please connect your account at home page first! You can click the ADVENTURE logo to homepage")
    })
  }
}