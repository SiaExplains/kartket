import ProductModel from '../models/product';

export default class ProductService {
    constructor() {}
    fetchProducts(time: number, hasError: boolean): Promise<ProductModel[]> {
        return new Promise((resolve, reject) => {
            const data = [
                new ProductModel('https://unsplash.it/250/200', 'ASUS 203X'),
                new ProductModel('https://unsplash.it/250/200', 'iPhone S10'),
                new ProductModel('https://unsplash.it/250/200', 'HTC 10'),
                new ProductModel('https://unsplash.it/250/200', 'Pot'),
                new ProductModel('https://unsplash.it/250/200', 'Neckles'),
                new ProductModel('https://unsplash.it/250/200', 'Toilet Paper'),
                new ProductModel('https://unsplash.it/250/200', 'SAMSUNG TV'),
                new ProductModel(
                    'https://unsplash.it/250/200',
                    'Lenovo Laptop'
                ),
                new ProductModel('https://unsplash.it/250/200', 'Refregrator'),
                new ProductModel('https://unsplash.it/250/200', ' Logitech'),
                new ProductModel('https://unsplash.it/250/200', 'Google Pixel'),
            ];

            setTimeout(() => {
                if (hasError) {
                    reject('A STUPID MOCK ERROR!');
                }
                resolve(data);
            }, time);
        });
    }
}
