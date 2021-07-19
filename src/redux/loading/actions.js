import {types} from './index';

const loadServerData = (url, subAction) => (dispatch) => {
    dispatch(isLoading());
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
            dispatch(loadSuccess());
            dispatch(subAction(res));
        });
};

const writeToStore = (res) => {
    return {
        type: types.WRITE_TO_STORE,
        payload: res
    }
};

const loadCart = () => {
    let cart = [];
    if (localStorage.getItem("cart").length > 0) {
        cart = (JSON.parse(localStorage.getItem("cart")));
    }
    return {
        type: types.LOAD_CART,
        payload: cart
    }
};

const loadWishlist = () => {
    let wishList = [];
    if (localStorage.getItem("wishList").length > 0) {
        wishList = JSON.parse(localStorage.getItem("wishList"));
    }
    return {
        type: types.LOAD_WISH_LIST,
        payload: wishList
    }
};

const isLoading = () => {
    return {
        type: types.IS_LOADING,
        payload: ""
    }
};
const loadError = () => {
    return {
        type: types.LOAD_ERROR,
        payload: ""
    }
};
const loadSuccess = () => {
    return {
        type: types.LOAD_SUCCESS,
        payload: null
    }
};

const writeCart = (items) => {
    return {
        type: types.WRITE_CART,
        payload: items
    };
};

const writeWishList = (items) => {
    return {
        type: types.WRITE_WISH_LIST,
        payload: items
    };
};

export default {
    loadServerData, writeToStore, loadCart,
    loadWishlist, isLoading, loadError, loadSuccess,
    writeCart, writeWishList
};
