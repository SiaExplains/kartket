import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/header/header';
import Sidebar from './layout/sidebar/sidebar';
import Gallery from './gallery/gallery';
import classes from './App.module.scss';
import Footer from './layout/footer/footer';
import Test from './test/test';
import ProductDetail from './gallery/product-detail/product-detail';

function App() {
    return (
        <Router>
            <Header />
            <div className={classes.main}>
                <Sidebar />
                <Switch>
                    <Route path='/' exact component={Gallery} />
                    <Route path='/test' component={Test} />
                    <Route path='/product/:id' component={ProductDetail} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
