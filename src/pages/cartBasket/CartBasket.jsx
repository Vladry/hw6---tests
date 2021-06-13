import React, {useState, useEffect} from 'react';
import './cartbasket.scss';
import Card from "../../components/Card/Card";

const CartBasket = () => {
    const [cartContent, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem("wishList")));

    useEffect(()=>console.log(cartContent));

    const cartHandler = (id, {target})=> {
        const newCartContent = cartContent.filter(productItem => productItem.id !== id);
        setCart(newCartContent);
        localStorage.setItem("cart", JSON.stringify(newCartContent));
    };



    const wishListHandler = (id, {target}) => {
        const newWishListContent = wishList.filter(productItem => productItem.id !== id);
        setWishList(newWishListContent);
        localStorage.setItem("wishList", JSON.stringify(newWishListContent));
    };


    const cartList = cartContent.map(productItem =>
        <Card key={productItem.id}
              productItem={productItem}
              cartHandler={cartHandler}
              wishListHandler={wishListHandler}
        />
    );
    let emptyNote;
    (cartContent.length === 0) ?  emptyNote = <h1 className = '--empty'>ПУСТА!</h1> : emptyNote = null;

    return (
        <div className='cart'>
            <h1>Ваша Корзина</h1>
            {emptyNote}
            <div className="card-list">
                {cartList}
            </div>
        </div>
    );
};

export default CartBasket;