import loadingReducer from './loading/index';
import {combineReducers} from "redux";

export default combineReducers({
    loading: loadingReducer,
});