import {types, acts} from './index';

const initialState = {
    serverData: [],
    cart: [],
    wishList: [],
    isLoading: false,
    loadError: false,
    loadSuccess: false,
};

const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SERVER_DATA:
            return {isLoading: false};

        case types.IS_LOADING:
            console.log("-> IS_LOADING");
            state = {
                ...state,
                loadError: false,
                loadSuccess: false,
                isLoading: true
            };

            return state;
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
            console.log("-> WRITE_TO_STORE");
            return {
                ...state,
                serverData: action.payload
            };
        case types.LOAD_FROM_LOCALSTORE:
            console.log("-> LOAD_FROM_LOCALSTORE");
            return {
                ...state,
                cart: action.payload[0],
                wishList: action.payload[1]
            };

        default:
            return state;
    }
};

export default loadReducer;