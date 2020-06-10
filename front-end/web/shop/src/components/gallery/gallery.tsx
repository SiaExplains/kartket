import React, { Component } from 'react';
import styles from './gallery.module.css';
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
        this.productService.fetchProducts(3000, false).then((product) => {
            this.setState({ data: product });
        });
    }

    render() {
        return (
            <div className={styles.gallery}>
                {this.state.data ? (
                    this.state.data.map((d) => {
                        return (
                            <Product
                                className={styles.product}
                                title={d.title}
                                img={d.img}
                            />
                        );
                    })
                ) : (
                    <div>There is no prodcut added yet.</div>
                )}
            </div>
        );
    }
}
