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