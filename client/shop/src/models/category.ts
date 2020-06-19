export default class CategoryModel {
    id?: number;
    title?: string;
    constructor(_id: number, _title: string) {
        this.id = _id;
        this.title = _title;
    }
}
