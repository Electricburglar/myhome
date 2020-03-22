import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { home, about } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
    </Switch>
);


export default Router;