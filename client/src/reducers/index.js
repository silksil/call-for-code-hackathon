import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import auth from './reducer_auth';
import disasters from './reducer_disasters';
import notifications from './reducer_notifications';
import chatMessages from './reducer_chat_messages';
import mapData from './reducer_map';

export default combineReducers({
  auth,
  form: reduxForm,
  disasters,
  notifications,
  chatMessages,
  mapData,
});
