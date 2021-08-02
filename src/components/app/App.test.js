import React from 'react';
import {render, screen} from '@testing-library/react';
// import {screen} from '@testing-library/dom';
// import 'testing-library/jest-dom';

import App from './App';

describe("testing App", () => {
    test("overall", () => {
        const {/*getByText, getByTestId*/} = render(<App/>);
// const {getByTestId, getByText} = screen;

        // const orderSection = getByTestId('order-page');
        // const modalSection = getByTestId('modal');
        // const productSection = getByTestId('productlist');

        // expect(orderSection).toContainElement( getByText('Страница Заказов') );
        // expect(modalSection).toBeInTheDocument();
        // expect(productSection).toContainElement( getByText(''));
        // screen.debug();
    });

});