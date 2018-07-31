import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {  // whenever fetchUser is called it will instantly return a function
    const res = await axios.get('/api/current_user'); // if ReduxThunk sees we return a function, instead of a normal function, it will automaticall call this function and pass the dispatch function as an argument

    dispatch({ type: FETCH_USER, payload: res.data });
};
