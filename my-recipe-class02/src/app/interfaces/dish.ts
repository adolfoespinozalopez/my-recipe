interface Notify{
    dish: Dish;
    status: boolean;
}

export interface DishStructure{
    getIngredients(): string[];
    prepare(): boolean;
    notify(): Notify;
}

export interface Ingredients{
    name: string;
    qty: number;
}

export class Dish {
    name: string;
    ingredients: Ingredients[];
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