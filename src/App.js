import './App.css';
import AppRouter from './AppRouter';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './modules/redux/history';
import store from './modules/redux/store';

const App = () => {
    return <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRouter />
        </ConnectedRouter>
    </Provider>;
};

export default App;