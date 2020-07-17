import {FETCH_TRADES, FETCH_DAY_TRADES, RESET_TRADES, FETCH_SWING_TRADES} from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case FETCH_TRADES:
            return [...action.payload];
        case FETCH_DAY_TRADES:
            return [...action.payload];
        case FETCH_SWING_TRADES:
            return [...action.payload]
        case RESET_TRADES:
            return [];
        default:
            return state
    }
}