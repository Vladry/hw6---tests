//создадим ассоциативный массив свойств модальных окон:
//https://itchief.ru/javascript/associative-arrays
const modalConfig = new Map([
    ["cart", {
        header: "Confirm",
        text: "Подтвердите добавление\n  товара в Корзину!"
    }],
    ["remFromCart", {
        header: "Товарная позиция будет удалена!",
        text: "Удалить из корзины?"
    }],
    ["wishList", {
        header: "Confirm",
        text: "Подтвердите добавление\n  товара в Избранное!"
    }],
    ["closed", {
        header: "",
        text: ""
    }]
]);

export default modalConfig;