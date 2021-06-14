import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/home';
import Newuser from '../pages/newuser';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/newuser" component={Newuser}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

