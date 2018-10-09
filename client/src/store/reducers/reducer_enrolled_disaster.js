import { FETCH_CHAT, FETCH_MAP, FETCH_NOTIFICATIONS} from '../actions/types';

const INITIAL_STATE = {
  chatMessages: [],
  mapData: {},
  notifications: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CHAT:
      return { ...state, chatMessages: action.payload }
    case FETCH_MAP:
      return { ...state, mapData: action.payload }
    case FETCH_NOTIFICATIONS:
      return { ...state, notifications: action.payload }
    default:
      return state;
  }
}
