import { FETCH_MAP } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MAP:
      return action.payload;
    default:
      return state;
  }
}
