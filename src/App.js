import './App.css';
import AppRouter from './AppRouter';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './modules/navigation/navigation';

const App = () => {
    return <div className='App'>
        <div className='content'>
            <Router>
                <Navigation />
                <AppRouter />
            </Router>
        </div>
    </div>;
};

export default App;