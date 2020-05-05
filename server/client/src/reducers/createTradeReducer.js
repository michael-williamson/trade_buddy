import {FETCH_TRADES,CREATE_TRADES} from '../actions/types';
import _ from 'lodash';

export default (state = [], action) => {
    switch(action.type){
        case CREATE_TRADES:
            return [...state,action.payload];
        case FETCH_TRADES:
            return [...state];
        default:
            return state
    }
}