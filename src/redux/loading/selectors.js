const getCart = state => state.loadReducers.cart;
const getWishList = state => state.loadReducers.wishList;
const getServerData = state => state.loadReducers.serverData;

export default {
    getCart,
    getWishList,
    getServerData,
}
