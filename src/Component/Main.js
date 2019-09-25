import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Bus from './Bus';
import Book from './Book';



const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/'      component = {Home}/>
            <Route exact path ='/bus'   component = {Bus}/>
            <Route exact path = '/book' component = {Book}/>
           
        </Switch>
    </main>
)

export default Main;
