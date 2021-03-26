import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HomeLayout from './modules/home/home.layout';

const AppRouter = () => {
    return <Switch>
        <Route path='/home'>
            <HomeLayout />
        </Route>
        <Route path='/contact'>
            <div>Contact</div>
        </Route>
        <Route path='/store'>
            <div>Store</div>
        </Route>
        <Redirect to='/home' />
    </Switch>;
};

export default AppRouter;