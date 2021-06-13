import React, {PureComponent} from 'react';
import Button from "../Button/Button";
import appBtnCfg from "../Button/appBtnCfg";
import PropTypes from 'prop-types';
import {ShoppingCart} from '../../icons/ShoppingCart';
import {ShoppingWishList} from '../../icons/ShoppingWishList';
import './card.scss';
import RemoveFromCart from "../../icons/RemoveShoppingCart";

class Card extends PureComponent {
    state = {alreadyInCart: false};

    render() {
        const {productItem, cart, wishList, listsHandler} = this.props; //получаем пропсы из APP.jsx
        const {cartHandler, wishListHandler} = this.props; // получаем пропсы из корзины или
        // избранного.
        let prodIsInCart;
        let productIsInFavorites;
        let buttons;
        if (cart) prodIsInCart = cart.some((cartItem) => cartItem.id === productItem.id);
        if (wishList) productIsInFavorites = wishList.some((cartItem) => cartItem.id === productItem.id);
        //далее: если прилетает listsHandler, значит Card вызван из App и рендерим нужный для
        // App блок кнопок:
        if (listsHandler) buttons =
            <div className="card-btn">
                <ShoppingCart color={prodIsInCart ? "red" : "green"} width="22"
                              className='svg-class --activate-cart-modal'
                              handler={listsHandler.bind(null, productItem.id)}/>
                <Button btnCfg={appBtnCfg.get('cart')}
                        handler={listsHandler.bind(null, productItem.id)}/>
                <ShoppingWishList color={productIsInFavorites ? "red" : "blue"} width="22"
                                  className='svg-class --activate-wish-list-modal'
                                  handler={listsHandler.bind(null, productItem.id)}/>
            </div>;
        else if (cartHandler) { // иначе рендер Card произошел из корзины - тогда рендерим кнопки для корзины
            buttons =
                <div  className="card-svg-section">
                    <RemoveFromCart color={prodIsInCart ? "green" : "red"} width="22"
                                    className='svg-class --activate-cart-modal'
                                    handler={cartHandler.bind(null, productItem.id)}/>
                </div>;
        } else if (wishListHandler) { // иначе рендер Card произошел из избранного- тогда рендерим кнопки для избранного
            buttons =
                <div className="card-svg-section">
                    <ShoppingWishList color={productIsInFavorites ? "red" : "blue"} width="22"
                                      className='svg-class --activate-wish-list-modal'
                                      handler={wishListHandler.bind(null, productItem.id)}/>
                </div>;
        }

        return (
            <div className="card-item" data-name={productItem.name}>
                <img className="card-image" src={productItem.url} alt='product-image'/>
                <div className="card-description">
                    <h3 className="card-header">{productItem.name}</h3>
                    <p className="card-price">{productItem.price}</p>
                    <p className="card-art">{productItem.code}</p>
                    <p className="card-color">{productItem.color}</p>

                </div>
                {buttons}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Card.js-----> componentDidUpdate()");
    }

}

Card.propTypes = {
    productItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string,
        code: PropTypes.string,
        color: PropTypes.string
    }),
    listsHandler: PropTypes.func
};

export default Card;