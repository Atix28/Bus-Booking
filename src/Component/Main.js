import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Bus from './Bus';
import { db, auth } from '../services/firebase'



const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/'      component={Home}/>
            <Route exact path ='/bus'   component = {Bus}/>
           
        </Switch>
    </main>
)

export default Main;
