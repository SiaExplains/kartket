import React, { Component } from 'react';

import Header from './layout/header/header';
import Sidebar from './layout/sidebar/sidebar';
import Gallery from './gallery/gallery';
import classes from './App.module.scss';

function App() {
    return (
        <div>
            <Header />
            <div className={classes.main}>
                <Sidebar />
                <Gallery />
            </div>
        </div>
    );
}

export default App;
