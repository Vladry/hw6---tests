import {combineReducers} from "redux";
import loadReducer from './reducers';

export {default as types} from './types';
export * as acts from './actions';
export * as sel from './selectors';

export default combineReducers({
    loadReducer,

});