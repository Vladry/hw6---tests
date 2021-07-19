import React, {useEffect} from 'react';
import './favorites.scss';
import Card from "../../components/Card/Card";
import {sel, acts} from '../../redux/loading/';
import {useDispatch, useSelector} from "react-redux";


const Favorites = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(acts.loadWishlist())
    }, []);

    const wishListContent = useSelector(sel.getWishList);


    const wishListHandler = (id, {target}) => {
        const newWishListContent = wishListContent.filter(productItem => productItem.id !== id);
        dispatch(acts.writeWishList(newWishListContent));
        localStorage.setItem("wishList", JSON.stringify(newWishListContent));
    };


    const wishList = wishListContent.map(productItem =>
        <Card key={productItem.id}
              productItem={productItem}
              wishListHandler={wishListHandler}
        />
    );
    let emptyNote;
    (wishListContent.length === 0) ? emptyNote = <h1 className='--empty'>ПУСТ!</h1> : emptyNote = null;


    return (
        <div className='favorites'>
            <h1>Список Избранных Товаров</h1>
            {emptyNote}
            <div className="card-list">
                {wishList}
            </div>
        </div>
    );
};

export default Favorites;