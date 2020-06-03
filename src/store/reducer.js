const defaultState = {
  account: localStorage.getItem('account'),
  helloNum: '*',
  petNum: '*',
  potatoNum: '*'
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
  if(action.type === 'CHANGE_BALANCE') {
    const newState = JSON.parse(JSON.stringify(state));
    if(action.tokenType === 'HELLO')  newState.helloNum = action.output;
    if(action.tokenType === 'PETCARE')  newState.petNum = action.output;
    if(action.tokenType === 'HOTPOTATO')  newState.potatoNum = action.output;
    return newState;
  }
  return state;
}