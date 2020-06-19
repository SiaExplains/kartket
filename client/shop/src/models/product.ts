export default class ProductModel {
    id: number;
    img!: string;
    title!: string;

    constructor(id: number, img: string, title: string) {
        this.id = id;
        this.img = img;
        this.title = title;
    }
}
