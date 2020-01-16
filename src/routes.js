import React from 'react';
import { Route, Switch  } from 'react-router-dom';

import  Home from './Pages/home';
import  About from './Pages/about';
import  Cause from './Pages/cause';
import  Event from './Pages/event';
import  Information from './Pages/information';
import  Contact from './Pages/contact';


export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/causes' exact component={Cause} />
            <Route path='/events'exact component={Event} />
            <Route path='/blog' exact component={Information} />
            <Route path='/contacts'exact component={Contact} />
        </Switch>
    );
}