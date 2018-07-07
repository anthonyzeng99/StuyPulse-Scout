const matchesReducerDefaultState = [];

export default (state =  matchesReducerDefaultState , action) => {
  switch(action.type) {
    case 'ADD_MATCH':
      return [...state, action.match];
    case 'EDIT_MATCH':
      console.log('EDIT_MATCH');
    case 'REMOVE_MATCH':
      const idToRemove = parseInt(action.id);
      return state.filter(({id}) => id != idToRemove);
    case 'SET_MATCHES':
      return action.matches;
    default:
      return state;
  }
};
