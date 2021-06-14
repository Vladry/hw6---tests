import React, {useState, useEffect} from 'react';
import './App.scss';
import Modal from "../Modal/Modal";
import modalConfig from '../Modal/modalConfig';
import modBtnCfg from '../Button/modBtnCfg';
import ProductList from "../ProductList/ProductList";
import * as cartFunc from "../../utils/cartHandleUtils.js";
import * as wishListFunc from "../../utils/wishListHandleUtils.js";
import {animateScroll as scroll} from "react-scroll";

const App = () => {
    const [activeModal, setActiveModal] = useState("closed");
    const [products, setProducts] = useState("closed");
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [addingIdtoCart, setAddingIdtoCart] = useState("");
    const [addingIdtoWishList, setAddingIdtoWishList] = useState("");


    useEffect(() => {
            localStorage.getItem("cart")
            && setCart( JSON.parse(localStorage.getItem("cart")));
            localStorage.getItem("wishList")
            && setWishList( JSON.parse(localStorage.getItem("wishList")));

            fetch('products.json', {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r.json()).then(res => {
                setProducts(res)
            });
        }
    );

    const openModal = (modalId) => {
        setActiveModal(modalId);
    };
    scroll.scrollToTop();  //альтернативный скроллинг при открытии Модалки

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
    const confirmAddingAction = (id, {target}) => { //сюда зщ по клику "Add to Cart" с карточки товара и получили id добавляемого товара и
        // ивент с нажатой карточки
        if (target.classList.contains('--activate-cart-modal')
            || target.classList.contains('btn')) {
            openModal("cart"); // запустили модалку, запросили Ок для добавления товара в корзину
            setAddingIdtoCart(id);
        } else if (target.classList.contains('--activate-wish-list-modal')) {
            openModal("wishList"); // запустили модалку, запросили Ок для добавления товара в wishList
            setAddingIdtoWishList(id);
        }
    };
    const addingPermitted = ({target}) => {  // получили из модалки ок на добавление товара в cart или wishList
        closeModal();
        if (activeModal === "cart") {
            addProduct(addingIdtoCart); // запустили на добавление в Cart товара с id = addingIdtoCart
        } else if (activeModal === "wishList") {
            addProduct(addingIdtoWishList); // запустили на добавление в Cart товара с id = addingIdtoCart
        }

    };

    const addProduct = (id) => { //сюда получить id товара к добавлению в тележку или в wishList
        const getProduct = products.find(productItem => productItem.id === id);
        if (activeModal === "cart") {
            let currentCart = cartFunc.checkCartInLocalStorage();
            if (currentCart.length === 0) {
                saveCart([getProduct]);
                return;
            } else if (!cartFunc.alreadyExists(currentCart, getProduct)) {
                currentCart.push(getProduct);
                saveCart(currentCart)
            }
        } else if (activeModal === "wishList") {
            let currentWishList = wishListFunc.checkWishListInLocalStorage();
            if (currentWishList.length === 0) {
                saveWishList([getProduct]);
                return;
            } else if (!wishListFunc.alreadyExists(currentWishList, getProduct)) {
                currentWishList.push(getProduct);
                saveWishList(currentWishList)
            }
        }
    };
    const saveCart = (currentCart) => {
        localStorage.setItem("cart", JSON.stringify(currentCart));
        setCart(currentCart);
    };
    const saveWishList = (currentWishList) => {
        localStorage.setItem("wishList", JSON.stringify(currentWishList));
        setWishList(currentWishList);
    };

    const invokeHeader = modalConfig.get(activeModal).header;
    const invokeText = modalConfig.get(activeModal).text;


    return (
        <div className={(activeModal === "closed") ? 'wrapper' : 'wrapper  --darkened'}
             onClick={closeModAtSideClick}
        >
            <h3>Страница Заказов</h3>
            <div className={'modals-container'}>
                <Modal id='modal' className='modal' header={invokeHeader} text={invokeText}
                       modalState={activeModal} closeModal={closeModal}
                       closeButton={true} actions={modBtnCfg}
                       addingPermitted={addingPermitted}
                       close={closeModal}/>

                <div className={(activeModal === "closed") ? 'btn-section btn-inactive' : 'btn-section '}>
                    <ProductList products={products}
                                 cart={cart}
                                 wishList={wishList}
                                 listsHandler={confirmAddingAction}
                    />
                </div>

            </div>
        </div>
    );

};

export default App;
