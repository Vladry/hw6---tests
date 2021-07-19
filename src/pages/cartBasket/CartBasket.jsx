import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './cartbasket.scss';
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import modalConfig from '../../components/Modal/modalConfig';
import modBtnCfg from '../../components/Button/modBtnCfg';
import {animateScroll as scroll} from "react-scroll";
import {sel, acts} from '../../redux/loading/';

const CartBasket = () => {
    const [remId, setRemId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(acts.loadCart())
    }, []);
    const activeModal = useSelector(sel.getActiveModal);

    const cartContent = useSelector(sel.getCart);

    const openModal = modalId => {
        dispatch(acts.setActiveModal(modalId));
        scroll.scrollToTop();
    };

    const closeModal = () => {
        dispatch(acts.setActiveModal("closed"));
    };
    const closeModAtSideClick = ({target}) => {
        if (target.classList.contains("btn")
            || target.classList.contains('modal')
            || target.classList.contains('svg-class')
        ) return;
        else {
            dispatch(acts.setActiveModal("closed"));
        }
    };


    const remove = () => {
        const newCartContent = cartContent.filter(productItem => productItem.id !== remId);
        dispatch (acts.writeCart(newCartContent) );
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
        <div className='cart' onClick={closeModAtSideClick}>
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