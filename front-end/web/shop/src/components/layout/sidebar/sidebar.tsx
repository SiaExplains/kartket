import React, { Component } from 'react';
import styles from './sidebar.module.css';
import Categories from './categories/categories';

class Sidebar extends Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <h3>Categories</h3>
                <Categories />
            </div>
        );
    }
}

export default Sidebar;
