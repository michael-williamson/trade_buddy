import {CREATE_TRADES} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_TRADES:
            return {submitted:action.payload};
        default:
            return state
    }
}