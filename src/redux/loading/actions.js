// import * as types from './types';
import {types} from './index';

export const loadServerData = (url, subAction) => (dispatch) => {
    dispatch(isLoading() );
    fetch(url, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => {
        if (!r.ok) dispatch(loadError);
        else
            return r.json()
    })
        .then(res => {
            dispatch(loadSuccess() );
            dispatch(subAction(res));
        });
};

export const writeToStore = (res) => {
    return {
        type: types.WRITE_TO_STORE,
        payload: res
    }
};


export const loadCartAndWishlist = () => {
    let cart, wishList;
    if (localStorage.getItem("cart")) {
        cart = (JSON.parse(localStorage.getItem("cart")));
    }

    if (localStorage.getItem("wishList")) {
        wishList = JSON.parse(localStorage.getItem("wishList"));
    }
    return {
        type: types.LOAD_FROM_LOCALSTORE,
        payload: [cart, wishList]
    }
};


export const isLoading = () => {
    return {
        type: types.IS_LOADING,
        payload: ""
    }
};
export const loadError = () => {
    return {
        type: types.LOAD_ERROR,
        payload: ""
    }
};
export const loadSuccess = () => {
    return {
        type: types.LOAD_SUCCESS,
        payload: null
    }
};