import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const AppRouter = () => {
    return <Router>
        <div>
            Infinity Launcher
        </div>
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/payment'>Payment</Link> {/* move to after product purchase */}
        </div>
        <Switch>
            <Route path='/home'>
                <div>Home</div>
            </Route>
            <Route path='/contact'>
                <div>Contact</div>
            </Route>
            <Route path='/payment'>
                <div>Payment</div>
            </Route>
            <Redirect to='/home' />
        </Switch>
    </Router>;
};

export default AppRouter;