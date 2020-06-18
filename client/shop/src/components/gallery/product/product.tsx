import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './product.module.scss';

interface Props {
    title: string;
    img: string;
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
                    <img alt='alternative text' src={this.props.img} />
                </div>
                <div>
                    <h3>{this.props.title}</h3>
                </div>
                <div>
                    <p>
                        The Tessier-Ashpool ice shattered, peeling away from the
                        Chinese program’s thrust, a worrying impression of solid
                        fluidity, as though the shards of a broken mirror bent
                        and elongated as they rotated.
                    </p>
                </div>
            </Paper>
        );
    }
}

export default Product;
