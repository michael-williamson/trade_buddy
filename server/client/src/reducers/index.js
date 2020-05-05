import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import createTradeReducer from '../reducers/createTradeReducer';

export default combineReducers({
    trades: createTradeReducer,
    form:formReducer
});