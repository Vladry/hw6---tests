import {combineReducers} from "redux";
import loadReducer from './reducers';

export {default as types} from './types';
export * as acts from './actions';

export default combineReducers({
    loadReducer,

});