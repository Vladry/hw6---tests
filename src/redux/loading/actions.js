// import * as types from './types';
import {types} from './index';
export const loadServerData = ()=> ({
    type: types.LOAD_SERVER_DATA,
    payload: null
});

const writeToStore = (res) => {
    return {
        type: types.WRITE_TO_STORE,
        payload: res
    }
};

export const getData = ()=> {
// export const getData = () => (dispatch) => {
    // if (!localStorage.getItem("cart")) {
    //     getState().cart = (JSON.parse(localStorage.getItem("cart")));
    // }
    //
    // if (!localStorage.getItem("wishList")) {
    //     getState().wishList = JSON.parse(localStorage.getItem("wishList"));
    // }



    debugger
    // dispatch(isLoading);

    console.log("-> in getData()");

    fetch('products.json', {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => {
        // if (!r.ok) dispatch(loadError);
        // else
            return r.json()
    })
        .then(res => {
            console.log('-> in fetch...then(res=> )');
            // dispatch(loadSuccess);
            // dispatch(writeToStore(res));
        });
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