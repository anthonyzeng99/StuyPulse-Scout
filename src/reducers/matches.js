const matchesReducerDefaultState = [];

export default (state =  matchesReducerDefaultState , action) => {
  switch(action.type) {
    case 'ADD_MATCH':
      console.log('ADD_MATCH');
    case 'EDIT_MATCH':
      console.log('EDIT_MATCH');
    case 'REMOVE_MATCH':
      console.log('REMOVE_MATCH');
    case 'SET_MATCHES':
      return action.matches;
    default:
      return state;
  }
};
