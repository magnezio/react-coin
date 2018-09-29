import {GET_COIN_DATA_SUCCESS} from '../actions/coinData';

// Expenses Reducer
const reducerDefaultState = {};

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case GET_COIN_DATA_SUCCESS:
            return action.coinData;
        default:
            return state;
    }
}