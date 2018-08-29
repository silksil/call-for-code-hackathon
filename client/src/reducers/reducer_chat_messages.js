import { FETCH_CHAT_MESSAGES } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CHAT_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
