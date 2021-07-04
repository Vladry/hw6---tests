// import * as types from './types';
import {types} from './index';

export const loadServerData = {
    type: types.LOAD_SERVER_DATA,
    payload: ""
};
export const isLoading = {
    type: types.IS_LOADING,
    payload: ""
};
export const loadError = {
    type: types.LOAD_ERROR,
    payload: ""
};
export const loadSuccess = (res) => ({
    type: types.LOAD_SUCCESS,
    payload: res
});