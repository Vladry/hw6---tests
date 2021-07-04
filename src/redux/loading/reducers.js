import {types} from './index';
import * as loadActions from './actions';


export const getData = () => (dispatch) => {
    // if (!localStorage.getItem("cart")) {
    //     getState().cart = (JSON.parse(localStorage.getItem("cart")));
    // }
    //
    // if (!localStorage.getItem("wishList")) {
    //     getState().wishList = JSON.parse(localStorage.getItem("wishList"));
    // }
    dispatch(loadActions.isLoading);

    console.log("-> in getData()");

    // fetch('products.json', {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then(r => {
    //     if (!r.ok) dispatch(loadActions.loadError);
    //     else
    //         r.json()
    // })
    //     .then(res => {
    //         console.log('-> .then(res => dispatch(loadActions.loadSuccess)');
    //         dispatch(loadActions.loadSuccess(res));
    //     });


    const initialState = {
        serverData: [],
        cart: {},
        wishList: {},
        isLoading: false,
        loadError: false,
        loadSuccess: false,
    };
    const loadReducer = (state = initialState, action) => {
        switch (action.type) {
            case types.LOAD_SERVER_DATA:
                const products = getData();
                console.log('reading data from server');
                console.log(products);
                return {...state, serverData: products};

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

    export default loadReducer;