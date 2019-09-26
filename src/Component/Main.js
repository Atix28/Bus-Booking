import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Bus from './Bus';
import BookForm from './BookForm';
import BookList from './BookList';



const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/'      component = {Home}/>
            <Route exact path ='/bus'   component = {Bus}/>
            <Route exact path = '/booklist' component = {BookList}/>
            <Route exact path = '/bookform/:bno' component = {BookForm}/>
        </Switch>
    </main>
)

export default Main;
