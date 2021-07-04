import loadingReducer from './loading/reducers';
import {combineReducers} from "redux";

export default combineReducers({
    loading: loadingReducer,
});