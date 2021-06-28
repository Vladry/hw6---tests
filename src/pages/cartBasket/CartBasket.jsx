import React, {useState, useEffect} from 'react';
import './cartbasket.scss';
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import modalConfig from '../../components/Modal/modalConfig';
import modBtnCfg from '../../components/Button/modBtnCfg';
import {animateScroll as scroll} from "react-scroll";

const CartBasket = () => {
    const [cartContent, setCart] = useState([]);
    const [activeModal, setActiveModal] = useState("closed");
    const [remId, setRemId] = useState(null);
    useEffect(()=> setCart(  JSON.parse(localStorage.getItem("cart"))),[]  );

    const openModal = modalId => {
        setActiveModal(modalId);
        scroll.scrollToTop();
    };

    const closeModal = () => {
        setActiveModal("closed");
    };
    const closeModAtSideClick = ({target}) => {
        if (target.classList.contains("btn")
            || target.classList.contains('modal')
            || target.classList.contains('svg-class')
        ) return;
        else {
            setActiveModal("closed");
        }
    };

    const remove = () => {
        const newCartContent = cartContent.filter(productItem => productItem.id !== remId);
        setCart(newCartContent);
        localStorage.setItem("cart", JSON.stringify(newCartContent));
        closeModal();
    };

     const cartHandler = (id, {target}) => {
        setRemId(id);
        openModal("remFromCart");
    };


    const cartList = cartContent.map(productItem =>
        <Card key={productItem.id}
              productItem={productItem}
              cartHandler={cartHandler}
        />
    );
    let emptyNote;
    (cartContent.length === 0) ? emptyNote = <h1 className='--empty'>ПУСТА!</h1> : emptyNote = null;


    const invokeHeader = modalConfig.get(activeModal).header;
    const invokeText = modalConfig.get(activeModal).text;


    return (
        <div className= 'cart'  onClick={closeModAtSideClick}>
            <h1>Ваша Корзина</h1>
            {emptyNote}

            <div className={'modals-container'}>
                <Modal id='modal' className='modal' header={invokeHeader} text={invokeText}
                       modalState={activeModal} closeModal={closeModal}
                       closeButton={true} actions={modBtnCfg}
                       close={closeModal} handleRemoveFromCart={remove}/>
            </div>
            <div className='card-list'

            >
                {cartList}
            </div>

        </div>
    );
};

export default CartBasket;