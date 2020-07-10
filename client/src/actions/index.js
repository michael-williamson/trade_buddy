import {CREATE_TRADES,FETCH_TRADES,FETCH_DAY_TRADES,SIGN_IN,SIGN_OUT,DELETE_TRADE,RESET_TRADES,FETCH_SWING_TRADES} from './types';

import axios from 'axios';
import history from '../history';


export const createTrade = (formValues,userId) => async dispatch =>   {
    const idAppended = {...formValues,"id":userId}
   const response = await axios.post('/api/createTrade',idAppended);
   dispatch({type:CREATE_TRADES,payload: response.data});

   history.push('/pages/trade_view');
}  

export const fetchTrades = (id) => async (dispatch) => {  

   const response = await axios.post('/api/fetchTrades',id)

    dispatch({type:FETCH_TRADES, payload: response.data});
}

export const fetchDayTrades = (id,date) => async (dispatch) => {

    const response = await axios.post('/api/fetchDayTrades',{id,date})

    dispatch({type:FETCH_DAY_TRADES, payload: response.data});
}

export const fetchSwingTrades = (id,date) => async (dispatch) => {

    const response = await axios.post('/api/fetchSwingTrades',{id,date})

    dispatch({type:FETCH_SWING_TRADES, payload: response.data});
}

export const resetTrades = () => {
    return {
        type: RESET_TRADES
    }
}

export const deleteTrade = (tradeId,googleId) => async dispatch =>   {
   const response = await axios.post('/api/deleteTrade',{"id":tradeId,"googleId":googleId});

   dispatch({type:DELETE_TRADE,payload: response.data});

    history.push('/pages/trade_view');

}  

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
} 

