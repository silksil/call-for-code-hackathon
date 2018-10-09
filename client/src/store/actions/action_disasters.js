import axios from 'axios';
import { FETCH_DISASTERS, FETCH_DISASTER, FETCH_NOTIFICATIONS, FETCH_CHAT, FETCH_MAP } from './types';

export const fetchDisasters  = () => async dispatch => {
  const response = await axios.get('/api/alldisasters');

  dispatch({ type: FETCH_DISASTERS, payload: response.data });
};


export const fetchDisaster  = (id) => async dispatch => {
  const response = await axios.post(`/api/disaster`, {id: id});

  dispatch({ type: FETCH_DISASTER, payload: response.data });
};

export const fetchNotifications = (userId, disasterId) => async dispatch => {
  const body = { userId: userId, disasterId: disasterId };
  const response = await axios.post(`/api/notifications`, body);

  dispatch({ type: FETCH_NOTIFICATIONS, payload: response.data });
};

export const fetchMap = (userId, disasterId) => async dispatch => {
  const body = { userId: userId, disasterId: disasterId };
  const response = await axios.post(`/api/map`, body);

  dispatch({ type: FETCH_MAP, payload: response.data });
};

export const fetchChat = (userId, disasterId) => async dispatch => {
  const body = { userId: userId, disasterId: disasterId };
  const response = await axios.post(`/api/chat`, body);

  dispatch({ type: FETCH_CHAT, payload: response.data });
};
