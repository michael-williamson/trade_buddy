import {CREATE_TRADES,FETCH_TRADES} from '../actions/types';


export const createTrade =  formValues =>  {
   return {type:CREATE_TRADES,payload: formValues}
}

export const fetchTrades = () => {
    return {type:FETCH_TRADES}
}