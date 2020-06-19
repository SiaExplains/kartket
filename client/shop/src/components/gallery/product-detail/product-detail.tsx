import React, { FunctionComponent } from 'react';
import ProductModel from '../../../models/product';

interface Props {
    product: ProductModel;
}

const ProductDetail: FunctionComponent<Props> = (props) => {
    return (
        <div>
            <img src={props.product.img} />
            <h3>{props.product.title}</h3>
            <p>this is a mock summary</p>
        </div>
    );
};

export default ProductDetail;
