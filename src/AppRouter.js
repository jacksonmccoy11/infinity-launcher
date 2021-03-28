import React, { Component } from 'react';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import HomeLayout from './modules/home/home.layout';
import CommunityLayout from './modules/community/community.layout';
import StoreLayout from './modules/store/store.layout';
import RoadmapLayout from './modules/roadmap/roadmap.layout';
import ContactLayout from './modules/contact/contact.layout';
import Navigation from './modules/navigation/navigation';
import './App.css';

export class AppRouter extends Component {
    
    render() {
        return <div className='app'>
            <Navigation />
            <div className='content'>
                <Switch>
                    <Route path='/home' component={HomeLayout} />
                    <Route path='/community' component={CommunityLayout} />
                    <Route path='/store' component={StoreLayout} />
                    <Route path='/roadmap' component={RoadmapLayout} />
                    <Route path='/contact' component={ContactLayout} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        </div>;
    }
};

export default withRouter(AppRouter);