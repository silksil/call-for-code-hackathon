import { FETCH_DISASTERS, FETCH_DISASTER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DISASTER:
    console.log({ ...state, [action.payload.id]: action.payload })
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_DISASTERS:
      const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
          obj[item[keyField]] = item
          return obj
        }, {})
      return arrayToObject(action.payload, 'id')
    default:
      return state;
  }
}
