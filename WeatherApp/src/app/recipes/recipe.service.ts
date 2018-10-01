import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected  = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcYEKGIgkO7wnX_k1tbsAaYEiA6BvcD3zPAoBo8csaW8EAopR',[
            new Ingredient('Meat',1),
            new Ingredient('French Fires',20)
        ]),
        new Recipe('Big Fat Burger', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcYEKGIgkO7wnX_k1tbsAaYEiA6BvcD3zPAoBo8csaW8EAopR',[
            new Ingredient('Buns',2),
            new Ingredient('Meat',1),
        ])
      ];

      constructor(private slService : ShoppingListService){}

      getRecipes() {
          return this.recipes.slice(); // returns new array which is exact copy of the recipe array
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}