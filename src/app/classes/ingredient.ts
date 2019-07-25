export class Ingredient {
    ingredientId : number
    category : String
    name : String

    constructor(ingredientId: number, category: String, name: String) {
        this.ingredientId = ingredientId;
        this.category = category;
        this.name = name;
    }

    stringify(){
        return '{"ingredientId": ' + this.ingredientId + ', "category": "' + this.category + '", "name": "' + this.name + '"}';
    }
}
