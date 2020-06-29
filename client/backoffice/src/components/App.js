import React from 'react';
import classes from './App.module.scss';
import Header from './layout/header/header.component';
import Footer from './layout/footer/footer';
import Sidebar from './layout/sidebar/sidebar.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardComponent from './pages/dashboard/dashboard.component';
import UserPageComponent from './pages/membership/users/users.component';
import CategoryCompoenent from './pages/product/category/category.component';

function App() {
    return (
        <Router>
            <div className={classes.main}>
                <Header />
                <div className={classes.container}>
                    <Sidebar className={classes.sidebar} />
                    <div className={classes.content}>
                        <Switch>
                            <Route
                                path='/'
                                exact
                                component={DashboardComponent}
                            />
                            <Route
                                path='/category'
                                component={CategoryCompoenent}
                            />
                            <Route
                                path='/membership/users'
                                component={UserPageComponent}
                            />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
