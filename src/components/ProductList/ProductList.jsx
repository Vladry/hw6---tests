import React from 'react';
import Card from '../Card/Card.jsx';
import './productList.scss';
import PropTypes from "prop-types";
import {shallowEqual, useSelector} from "react-redux";
import * as sel from "../../redux/loading/selectors";

const ProductList = (props) => {

    const getCart = useSelector(sel.getCart, shallowEqual);
    const getWishList = useSelector(sel.getWishList, shallowEqual);
    const getServerData = useSelector(sel.getServerData, shallowEqual);

    const {listsHandler} = props;
    // const {products, cart, wishList, listsHandler} = props;
    let cardlist;
    if (getServerData) {
        cardlist = [...getServerData].map(productItem =>
            <Card key={productItem.id}
                  productItem={productItem}
                  cart={getCart}
                  wishList={getWishList}
                  listsHandler={listsHandler}
            />
        );
    }

    return (
        <div className="card-list">
            {cardlist}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string,
            price: PropTypes.string.isRequired,
            code: PropTypes.string,
            color: PropTypes.string
        })
    ),
    listsHandler: PropTypes.func,
};
ProductList.defaultProps = {
// задание дефолтных значений для данного типа пропсов не реализуемо!
};

export default ProductList;