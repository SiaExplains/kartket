import React, { FunctionComponent } from 'react';
import ProductModel from '../../../models/product';
import ProductService from '../../../services/product.service';
import { RouteComponentProps } from 'react-router';
import { match } from 'react-router-dom';
import classes from './product-detail.module.scss';

interface Props {
    id: string;
}

interface States {
    product: any;
}

class ProductDetail extends React.Component<
    RouteComponentProps<Props>,
    States
> {
    productService: ProductService = new ProductService();
    constructor(props: any) {
        super(props);
        this.state = {
            product: null,
        };
    }
    componentDidMount() {
        this.productService
            .getById(parseInt(this.props.match.params.id))
            .then((prd) => {
                this.setState({
                    product: prd,
                });
            });
    }

    render() {
        const { product } = this.state;

        let productDetails = <span>Not found - Loading...</span>;

        if (product) {
            productDetails = (
                <div>
                    <img src={product.img} />
                    <h3>{product.title}</h3>
                    <p>this is a mock summary</p>
                </div>
            );
        }

        return <div>{productDetails}</div>;
    }
}

export default ProductDetail;
