import { AUTH_USER, AUTH_ERROR_SIGNUP, AUTH_ERROR_SIGNIN } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessageSignUp: '',
  errorMessageSignIn: '',
};

/*
If a jsonWebtoken is assigned, it is assumed someone is signed in.
If jsonWebtoken is empty, not signed in.
Error displays that the user failed to login.
*/
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR_SIGNUP:
      return { ...state, errorMessageSignUp: action.payload };
    case AUTH_ERROR_SIGNIN:
      return { ...state, errorMessageSignIn: action.payload };
    default:
      return state;
  }
}
