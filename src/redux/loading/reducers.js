import {types} from './index';
import * as acts from './actions';


const initialState = {
    serverData: [],
    cart: {},
    wishList: {},
    isLoading: false,
    loadError: false,
    loadSuccess: false,
};

const loadReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case types.LOAD_SERVER_DATA:
            acts.getData();
            return {isLoading: false};

        case types.IS_LOADING:
            console.log("-> IS_LOADING");
            state = {
                loadError: false,
                loadSuccess: false,
                isLoading: true
            };

            return state;
        case types.LOAD_ERROR:
            console.log("-> LOAD_ERROR");
            return {
                loadError: true,
                loadSuccess: false,
                isLoading: false
            };
        case types.LOAD_SUCCESS:
            console.log("-> LOAD_SUCCESS");
            return {
                loadError: false,
                loadSuccess: true,
                isLoading: false
            };
        case types.WRITE_TO_STORE:
            console.log("-> WRITE_TO_STORE");
            return {
                serverData: action.payload
            };

        default:
            return state;
    }
};

export default loadReducer;