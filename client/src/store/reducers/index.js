import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import auth from './reducer_auth';
import disasters from './reducer_disasters';
import enrolledDisaster from './reducer_enrolled_disaster';

export default combineReducers({
  auth,
  form: reduxForm,
  disasters,
  enrolledDisaster,
});
