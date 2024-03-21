export class Category {
    id: number;
    name: string;
    description: string;
    imageUrl: string;

    public constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = 'assets/category-image.jpg';
    }
}
