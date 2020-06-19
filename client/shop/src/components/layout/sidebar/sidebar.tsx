import React, { Component } from 'react';
import styles from './sidebar.module.css';
import Categories from './categories/categories';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface State {
    isLoading: boolean;
}

class Sidebar extends Component<Props, State> {
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
