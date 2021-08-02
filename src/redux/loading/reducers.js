import {types} from './index';

export const initialState = {
    serverData: [],
    cart: [],
    wishList: [],
    isLoading: false,
    loadError: false,
    loadSuccess: false,
    activeModal: "closed",
};

const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SERVER_DATA:
            return {...state, isLoading: false};

        case types.IS_LOADING:
            console.log("-> IS_LOADING");
            return {
                ...state,
                loadError: false,
                loadSuccess: false,
                isLoading: true
            };
        case types.LOAD_ERROR:
            console.log("-> LOAD_ERROR");
            return {
                ...state,
                loadError: true,
                loadSuccess: false,
                isLoading: false
            };
        case types.LOAD_SUCCESS:
            console.log("-> LOAD_SUCCESS");
            return {
                ...state,
                loadError: false,
                loadSuccess: true,
                isLoading: false
            };
        case types.WRITE_TO_STORE:
            return {
                ...state,
                serverData: action.payload
            };
        case types.LOAD_CART:
            return {
                ...state,
                cart: action.payload
            };
        case types.LOAD_WISH_LIST:
            return {
                ...state,
                wishList: action.payload
            };
        case types.WRITE_CART:
            return {...state, cart: action.payload};
        case types.WRITE_WISH_LIST:
            return {...state, wishList: action.payload};
        case types.SET_ACTIVE_MODAL:
            return {...state, activeModal: action.payload};
        case types.SUBMIT_FORM:
            return{...state, cart: []};
        default:
            return state;
    }
};

export default loadReducer;