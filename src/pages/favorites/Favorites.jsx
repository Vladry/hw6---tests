import React, {useState, useEffect} from 'react';
import './favorites.scss';
import Card from "../../components/Card/Card";

const Favorites = () => {
    const [wishListContent, setWishList] = useState([]);
    useEffect(() => setWishList(  JSON.parse(localStorage.getItem("wishList"))  ),[] );


    const wishListHandler = (id, {target}) => {
        const newWishListContent = wishListContent.filter(productItem => productItem.id !== id);
        setWishList(newWishListContent);
        localStorage.setItem("wishList", JSON.stringify(newWishListContent));
    };


    const wishList = wishListContent.map(productItem =>
        <Card key={productItem.id}
              productItem={productItem}
              wishListHandler={wishListHandler}
        />
    );
    let emptyNote;
    (wishListContent.length === 0) ?  emptyNote = <h1 className = '--empty'>ПУСТ!</h1> : emptyNote = null;


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