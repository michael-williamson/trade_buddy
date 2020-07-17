import {CREATE_TRADES,DELETE_TRADE} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_TRADES:
            return {...action.payload};
        case DELETE_TRADE:
            return {...action.payload}
        default:
            return state
    }
}