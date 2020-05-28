import React, { Component } from 'react';
import Gallery from './components/gallery/gallery';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';

class App extends Component {
    render() {
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
}

export default App;
