import React, { Component } from 'react';
import styles from './gallery.module.scss';
import Product from './product/product';
import ProductService from '../../services/product.service';
import ProductModel from '../../models/product';

interface GalleryProps {}

interface GalleryState {
    data: ProductModel[];
}

export default class Gallery extends React.Component<
    GalleryProps,
    GalleryState
> {
    productService: ProductService = new ProductService();

    //    state: GalleryState;

    constructor(props: GalleryProps /*, _productService: ProductService*/) {
        super(props);
        //this.productService = _productService;
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.productService.fetchProducts(100, false).then((product) => {
            this.setState({ data: product });
        });
    }

    /*

    REACT LOADABLE >> react-loadable

    */
    render() {
        return (
            <div className={styles.gallery}>
                {this.state.data ? (
                    this.state.data.map((d) => {
                        return (
                            <Product className={styles.product} product={d} />
                        );
                    })
                ) : (
                    <div>There is no prodcut added yet.</div>
                )}
            </div>
        );
    }
}
