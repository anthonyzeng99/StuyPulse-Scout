import axios from 'axios';

export const addMatch = (match) => ({
  type: 'ADD_MATCH',
  match
})

export const editMatch = ({id} = {}) => ({
  type: 'EDIT_MATCH',
  id
})

export const removeMatch = ({id} = {}) => ({
  type: 'REMOVE_MATCH',
  id
})

export const setMatches = (matches) => ({
  type: "SET_MATCHES",
  matches
});

export const startSetMatches = () => {
  return (dispatch, getState) => {
    return axios.get('/getMatches')
      .then((res) => {
        const matches = res.data;
        dispatch(setMatches(matches));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};
