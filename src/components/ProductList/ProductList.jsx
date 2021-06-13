import React from 'react';
import Card from '../Card/Card.jsx';
import './productList.scss';
import PropTypes from "prop-types";

const ProductList =(props)=> {
        const {products, cart, wishList, listsHandler} = props;
        const cardlist = products.map(productItem =>
            <Card key={productItem.id}
                  productItem={productItem}
                  cart = {cart}
                  wishList={wishList}
                  listsHandler = {listsHandler}
            />
        );

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