import React from 'react';
import classes from './App.module.scss';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import Sidebar from './layout/sidebar/sidebar';

function App() {
    return (
        <div className={classes.main}>
            <Header />
            <div className={classes.container}>
                <Sidebar className={classes.sidebar} />
                <div className={classes.content}>Main Page</div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
