const defaultState = {
  account: '',
  helloNum: 0,
  petNum: 0,
  potatoNum: 0
};

export default (state = defaultState, action) => {
  if(action.type === 'get_account') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.account = action.value;
    return newState;
  }
  if(action.type === 'add_token_number') {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.ticker === 'HELLO')  newState.helloNum++;
    if(action.ticker === 'PETCARE')  newState.petNum++;
    if(action.ticker === 'HOTPOTATO')  newState.potatoNum++;
    return newState;
  }
  return state;
}