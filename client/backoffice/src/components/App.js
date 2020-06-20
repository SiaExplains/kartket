import React from 'react';
import classes from './App.module.scss';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Sidebar from './layout/sidebar/sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import UserPageComponent from './pages/membership/users/users';

function App() {
    return (
        <Router>
            <div className={classes.main}>
                <Header />
                <div className={classes.container}>
                    <Sidebar className={classes.sidebar} />
                    <div className={classes.content}>
                        <Switch>
                            <Route path='/' exact component={Dashboard} />
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
