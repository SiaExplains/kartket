export default class ProductModel {
    img!: string;
    title!: string;

    constructor(img: string, title: string) {
        this.img = img;
        this.title = title;
    }
}
