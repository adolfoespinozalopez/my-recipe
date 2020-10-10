interface Notify{
    dish: Dish;
    status: boolean;
}

export interface DishStructure{
    getIngredients(): string[];
    prepare(): boolean;
    notify(): Notify;
}

export interface Ingredient{
    name: string;
    quantity: string;
}

enum SpicyCategory {
    NO_PICA = 0,
    PICA_POCO = 1,
    PICA = 2,
    PICANTE = 3,
    MUY_PICANTE = 4
}
export class Dish {
    id: number;
    name: string;
    ingredients: Ingredient[];
    rating: number;
    category: string;
    price: number;
    spicy: SpicyCategory;
    inventoryStatus: string;
    stock: boolean;
    image: string;
}
/*
export class Dish implements DishStructure{
    name: string;
    ingredients: Ingredients[];

    constructor(){
        this.name = 'generico';
    }
    getIngredients(): string[]{
        return this.ingredients;
    }

    prepare(): boolean{
        return false;
    }
    notify(): Notify{
        return {
            dish: {} as DishStructure,
            status: true
        };
    }
}
*/