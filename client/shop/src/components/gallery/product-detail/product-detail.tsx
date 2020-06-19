import React, { FunctionComponent } from 'react';
import ProductModel from '../../../models/product';
import ProductService from '../../../services/product.service';

interface Props {
    product: ProductModel;
}
interface States {
    product: any;
}

class ProductDetail extends React.Component<Props, States> {
    productService: ProductService = new ProductService();
    constructor(props: Props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    componentDidMount() {
        this.productService.getById(20).then((prd) => {
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
