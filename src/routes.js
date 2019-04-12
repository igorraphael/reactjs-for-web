import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import NotFound from './components/NotFound/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;