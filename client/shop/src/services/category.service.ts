import CategoryModel from '../models/category';

export default class CategoryService {
    constructor() {}

    private mockData() {
        return [
            new CategoryModel(10, 'Laptop & Notebooks'),
            new CategoryModel(10, 'Smart Phone'),
            new CategoryModel(10, 'Accessories'),
            new CategoryModel(10, 'Fashion & Clothes'),
            new CategoryModel(10, 'Health and Beauty'),
            new CategoryModel(10, 'Home & Kitchen'),
        ];
    }

    fetchAll(): Promise<CategoryModel[]> {
        return new Promise((resolve, reject) => {
            const data = this.mockData();
            resolve(data);
        });
    }
}
