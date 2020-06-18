import React from 'react';
import './App.css';
import Header from './layout/header/header';
import Sidebar from './layout/sidebar/sidebar';
import Gallery from './gallery/gallery';

function App() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <Gallery />
            </div>
        </div>
    );
}

export default App;
