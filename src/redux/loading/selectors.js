const getCart = state => state.loadReducers.cart;
const getWishList = state => state.loadReducers.wishList;
const getServerData = state => state.loadReducers.serverData;
const getActiveModal = state => state.loadReducers.activeModal;

export default {
    getCart,
    getWishList,
    getServerData,
    getActiveModal
}
