import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Favorites from "../pages/favorites/Favorites";
import CartBasket from "../pages/cartBasket/CartBasket";
import Page404 from "../pages/page404/Page404";
import App from "../components/app/App";

const AppRouts = () => {
    return (
        <div>
            <Switch>
                {/*<Route exact path = {'/'} render={()=> <Redirect to={'main'}/> } />*/}
                <Route exact path = {'/'} component = {App} />
                <Route path = {'/favorites'} component = {Favorites} />
                <Route path = {'/cart'} component = {CartBasket} />
                <Route path = {'*'} component = {Page404} />
            </Switch>
        </div>
    );
};

export default AppRouts;