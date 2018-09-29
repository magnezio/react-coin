import {GET_COINS_SUCCESS} from '../actions/coins';

// Expenses Reducer
const reducerDefaultState = [];

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case GET_COINS_SUCCESS:
            return action.coins;
        default:
            return state;
    }
}