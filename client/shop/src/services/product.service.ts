import ProductModel from '../models/product';

export default class ProductService {
    constructor() {}

    private mockData() {
        return [
            new ProductModel(10, 'https://unsplash.it/250/200', 'ASUS 203X'),
            new ProductModel(20, 'https://unsplash.it/250/200', 'iPhone S10'),
            new ProductModel(30, 'https://unsplash.it/250/200', 'HTC 10'),
            new ProductModel(40, 'https://unsplash.it/250/200', 'Pot'),
            new ProductModel(50, 'https://unsplash.it/250/200', 'Neckles'),
            new ProductModel(60, 'https://unsplash.it/250/200', 'Toilet Paper'),
            new ProductModel(70, 'https://unsplash.it/250/200', 'SAMSUNG TV'),
            new ProductModel(
                99,
                'https://unsplash.it/250/200',
                'Lenovo Laptop'
            ),
            new ProductModel(80, 'https://unsplash.it/250/200', 'Refregrator'),
            new ProductModel(90, 'https://unsplash.it/250/200', ' Logitech'),
            new ProductModel(
                100,
                'https://unsplash.it/250/200',
                'Google Pixel'
            ),
        ];
    }

    fetchAll(time: number, hasError: boolean): Promise<ProductModel[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (hasError) {
                    reject('A STUPID MOCK ERROR!');
                }
                resolve(this.mockData());
            }, time);
        });
    }

    getById(id: number): Promise<ProductModel> {
        return new Promise((resolve, reject) => {
            const data = this.mockData();
            resolve(data.find((p) => p.id === id));
        });
    }
}
