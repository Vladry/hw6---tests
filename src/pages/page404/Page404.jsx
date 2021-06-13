import React from 'react';
import {NavLink} from "react-router-dom";
import './page404.scss';

const Page404 = () => {
    return (
        <div className='error-404'>
            <h1>Error 404</h1>
            <p>Жми ссылки выше</p>
            <NavLink to={'/'}>Вернись, я всё прощу!</NavLink>
        </div>
    );
};

export default Page404;