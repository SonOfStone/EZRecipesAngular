export class Ingredient {
    ingredientId : Number
    category : String
    name : String

    constructor(ingredientId: Number, category: String, name: String) {
        this.ingredientId = ingredientId;
        this.category = category;
        this.name = name;
    }

    stringify(){
        return '{"ingredientId": ' + this.ingredientId + ', "category": "' + this.category + '", "name": "' + this.name + '"}';
    }
}
