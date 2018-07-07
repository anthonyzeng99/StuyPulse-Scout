import axios from 'axios';

export const addMatch = (match) => ({
  type: 'ADD_MATCH',
  match
});

export const startAddMatch = (match) => {
  return (dispatch, getState) => {
    return axios.post('/addMatch', match)
      .then((res) => {
        dispatch(addMatch(match));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export const editMatch = (match) => ({
  type: 'EDIT_MATCH',
  match
})

export const startEditMatch = (match) => {
  return (dispatch, getState) => {
    axios.patch(`/editMatch/${match.id}`, match)
      .then((res) => {
        dispatch(editMatch(match))
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export const removeMatch = (id) => ({
  type: 'REMOVE_MATCH',
  id
})

export const startRemoveMatch = (id) => {
  return (dispatch, getState) => {
    return axios.post('/removeMatch', {id})
      .then(() => {
        dispatch(removeMatch(id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

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
      });
  }
};
