import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import createTradeReducer from '../reducers/createTradeReducer';
import googleAuthReducer from './googleAuthReducer';
import submissionSuccess from './submissionSuccess';

export default combineReducers({
    trades: createTradeReducer,
    form:formReducer,
    Auth:googleAuthReducer,
    submissionSuccess
});