import React from 'react';
import axios from 'axios'

//Fetch smurfs
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchVillage = () => dispatch => {
  dispatch({type:START_FETCHING});

  axios.get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
};


//Axios Call to localhost:3333