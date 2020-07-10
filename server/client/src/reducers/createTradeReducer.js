import {FETCH_TRADES,CREATE_TRADES, DELETE_TRADE, FETCH_DAY_TRADES, RESET_TRADES, FETCH_SWING_TRADES} from '../actions/types';
import _ from 'lodash';

export default (state = [], action) => {
    switch(action.type){
        case FETCH_TRADES:
            return [...action.payload];
        case FETCH_DAY_TRADES:
            return [...action.payload];
        case FETCH_SWING_TRADES:
            return [...action.payload]
        case DELETE_TRADE:
            return [state.filter((trade) => trade._id !== action.payload._id)];
        case RESET_TRADES:
            return [];
        default:
            return state
    }
}