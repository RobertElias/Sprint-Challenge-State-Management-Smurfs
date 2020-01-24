import React from 'react';
import axios from 'axios'

//Fetch smurfs
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

//Axios Call to localhost:3333
export const fetchVillage = () => dispatch => {
  dispatch({type:START_FETCHING});

  axios.get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
};


//Import Smurfs

export const ADD_SMURF_FETCH_REQUEST = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const add_smurf = (smurf) => (dispatch) => {
  dispatch({type: ADD_SMURF_FETCH_REQUEST});

  return axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => dispatch({type: ADD_SMURF_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: ADD_SMURF_FAILURE, payload: error}));
};