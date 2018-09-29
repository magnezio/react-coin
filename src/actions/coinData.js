import axios from 'axios';
import Config from '../config/config';

export const GET_COIN_DATA_SUCCESS = 'GET_COIN_DATA_SUCCESS';
export const GET_COIN_DATA_FAIL = 'GET_COIN_DATA_FAIL';

// GET COINS
const getCoinDataSuccess = (coinData) => ({
    type: GET_COIN_DATA_SUCCESS,
    coinData
})

const getCoinDataFail = () => ({
    type: GET_COIN_DATA_FAIL
})

export const getCoinData = (coinName) => {
    return (dispatch) => {
        axios.get(`${Config.apiUrl}/page/${coinName}`)
        .then((res)=>{
            dispatch(getCoinDataSuccess(res.data));
        })
        .catch(function (error) {
            dispatch(getCoinDataFail());
        })
    }
}