import React, {useState} from 'react';
import './cartbasket.scss';
import Card from "../../components/Card/Card";

const CartBasket = () => {
    const [cartContent, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    // useEffect(()=> localStorage.setItem("cart", JSON.stringify(newCartContent)) );


    // const cartHandler = (id, {target}) => {
    const cartHandler = ({target}) => {
        console.log(target);
        // const newCartContent = [...cartContent].filter(productItem => productItem.id !== id);
        // setCart(newCartContent);
        // localStorage.setItem("cart", JSON.stringify(newCartContent));
    };



    const wishListHandler = (id, {target}) => {
    };


    const cartList = cartContent.map(productItem =>
        <Card key={productItem.id}
              productItem={productItem}
              cartHandler={cartHandler}
              wishListHandler={wishListHandler}
        />
    );
    return (
        <div className='cart'>
            <h1>Ваша Корзина</h1>
            <div className="card-list">
                {cartList}
            </div>
        </div>
    );
};

export default CartBasket;