import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, ALL_DISASTERS } from './types';

export const signUp = (formProps, callback ) => async dispatch => {
  try {
  const response = await axios.post('/api/signup', formProps);

  dispatch({ type: AUTH_USER, payload: response.data.token })
  localStorage.setItem('token', response.data.token);
  callback();
  } catch (error) {
  dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
  }
};

export const signIn = (formProps, callback ) => async dispatch => {
  try {
  const response = await axios.post('/api/signin', formProps);

  dispatch({ type: AUTH_USER, payload: response.data.token })
  localStorage.setItem('token', response.data.token);
  callback();
  } catch (error) {
  dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' })
  }
};

export const signOut = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '' // sign out be returning a empty user
  }
};

export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/skills', values);

  history.push('/');

  dispatch({ type: AUTH_USER, payload: res.data });
};
