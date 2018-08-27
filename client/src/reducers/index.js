import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import auth from './reducer_auth';
import disasters from './reducer_disasters';

export default combineReducers({
  auth: auth,
  form: reduxForm,
  disasters: disasters
});
