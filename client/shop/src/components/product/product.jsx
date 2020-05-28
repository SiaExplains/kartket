import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Product extends Component {
    render() {
        return (
            <Paper elevation={3}>
                <img alt='alternative text' src={this.props.img} />
            </Paper>
        );
    }
}

export default Product;
