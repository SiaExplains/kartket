import React, { Component } from 'react';

import styles from './gallery.module.css';
import Product from '../product/product';

export default class Gallery extends Component {
    render() {
        const data = [
            { img: 'https://unsplash.it/250/200', title: 'ASUS 203X' },
            { img: 'https://unsplash.it/250/200', title: 'iPhone S10' },
            { img: 'https://unsplash.it/250/200', title: 'HTC 10' },
            { img: 'https://unsplash.it/250/200', title: 'Google Pixel' },
            { img: 'https://unsplash.it/250/200', title: 'Pot' },
            { img: 'https://unsplash.it/250/200', title: 'Neckles' },
            { img: 'https://unsplash.it/250/200', title: 'Toilet Paper' },
            { img: 'https://unsplash.it/250/200', title: 'SAMSUNG TV' },
            { img: 'https://unsplash.it/250/200', title: 'Lenovo Laptop' },
            { img: 'https://unsplash.it/250/200', title: 'Refregrator' },
            { img: 'https://unsplash.it/250/200', title: 'Keyboard Logitech' },
        ];
        return (
            <div className={styles.gallery}>
                {data.map((d) => {
                    return (
                        <Product
                            className={styles.product}
                            title={d.title}
                            img={d.img}
                        />
                    );
                })}
            </div>
        );
    }
}
