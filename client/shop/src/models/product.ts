export default class ProductModel {
    id: number;
    img!: string;
    title!: string;

    constructor(_id: number, _img: string, _title: string) {
        this.id = _id;
        this.img = _img;
        this.title = _title;
    }
}
