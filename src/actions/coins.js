import axios from 'axios';
import Config from '../config/config';

export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS';
export const GET_COINS_FAIL = 'GET_COINS_FAIL';

// GET COINS
const getCoinsSuccess = (coins) => ({
    type: GET_COINS_SUCCESS,
    coins
})

const getCoinsFail = () => ({
    type: GET_COINS_FAIL
})

export const getCoins = () => {
    return (dispatch) => {
        axios.get(`${Config.apiUrl}/coins`)
        .then((res)=>{
            dispatch(getCoinsSuccess(res.data))
        })
        .catch(function (error) {
            dispatch(getCoinsFail())
        })
    }
}