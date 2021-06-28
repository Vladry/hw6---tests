import {default as types} from './index';
import {createStore} from 'redux';
import {useSelector} from "react-redux";

// let cart, wishList, products;
//
// const getData = () => {
//     if (!localStorage.getItem("cart")) {
//         cart = (JSON.parse(localStorage.getItem("cart")));
//     }
//
//     if (!localStorage.getItem("wishList")) {
//         wishList = JSON.parse(localStorage.getItem("wishList"));
//     }
//
//     fetch('products.json', {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(r => r.json()).then(res => {
//         products = res
//     });
// };

const initialState = {
    serverData: [],
    Cart: {},
    WishList: {},
    isLoading: false,
    loadError: false,
    loadSuccess: false,
};
const dataLoad = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SERVER_DATA:
            // getData();
            return state.data;

        case types.IS_LOADING:
            state = {...state, isLoading: true};

            return state;
        case types.LOAD_ERROR:
            return {
                ...state,
                loadError: true,
                loadSuccess: false,
                isLoading: false
            };
        case types.LOAD_SUCCESS:
            return {
                ...state,
                loadError: false,
                loadSuccess: true,
                isLoading: false
            };

        default:
            return state;
    }
};

export default dataLoad;