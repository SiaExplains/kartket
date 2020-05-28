import React, { Component } from 'react';

import styles from './gallery.module.css';
import Product from '../product/product';

export default class Gallery extends Component {
    render() {
        const data = [
            { img: 'https://unsplash.it/550/400', title: 'ASUS 203X' },
            { img: 'https://unsplash.it/550/400', title: 'iPhone S10' },
            { img: 'https://unsplash.it/550/400', title: 'HTC 10' },
            { img: 'https://unsplash.it/550/400', title: 'Google Pixel' },
            { img: 'https://unsplash.it/550/400', title: 'Pot' },
            { img: 'https://unsplash.it/550/400', title: 'Neckles' },
            { img: 'https://unsplash.it/550/400', title: 'Toilet Paper' },
            { img: 'https://unsplash.it/550/400', title: 'SAMSUNG TV' },
            { img: 'https://unsplash.it/550/400', title: 'Lenovo Laptop' },
            { img: 'https://unsplash.it/550/400', title: 'Refregrator' },
            { img: 'https://unsplash.it/550/400', title: 'Keyboard Logitech' },
        ];
        return (
            <div className={styles.gallery}>
                {data.map((d) => {
                    return <Product img={d.img} />;
                })}
            </div>
        );
    }
}
