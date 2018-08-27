import axios from 'axios';
import { FETCH_DISASTERS, FETCH_DISASTER } from './types';

export const fetchDisasters  = () => async dispatch => {
  const response = await axios.get('/api/alldisasters');

  dispatch({ type: FETCH_DISASTERS, payload: response.data })
};


export const fetchDisaster  = (id) => async dispatch => {
  const response = await axios.post(`/api/disaster`, {id: id});

  dispatch({ type: FETCH_DISASTER, payload: response.data })
};
