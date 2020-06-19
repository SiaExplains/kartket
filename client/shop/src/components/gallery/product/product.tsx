import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './product.module.scss';
import { Link } from 'react-router-dom';
import ProductModel from '../../../models/product';

interface Props {
    product: ProductModel;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface State {
    isLoading: boolean;
}

class Product extends React.Component<Props, State> {
    render() {
        return (
            <Paper elevation={3} className={styles.product}>
                <div>
                    <Link to={`/product/${this.props.product.id}`}>
                        <img
                            alt='alternative text'
                            src={this.props.product.img}
                        />
                    </Link>
                </div>
                <div>
                    <h3>{this.props.product.title}</h3>
                </div>
                <div>
                    <p>
                        TThis is a mock summary that dupplicated for each
                        product...
                    </p>
                </div>
            </Paper>
        );
    }
}

export default Product;
