import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
    'Carne Asada Tacos',
    'Delicious juicy and tender beef tacos!',
    'https://images.pexels.com/photos/8999152/pexels-photo-8999152.jpeg?auto=compress&cs=tinysrgb&w=1600',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Corn Tortillas', 2),
      new Ingredient('Salsa', 2),
      new Ingredient('Onion', 1),
      new Ingredient('Cilantro', 1),
      new Ingredient('Lime', 1)
    ]),
    new Recipe(
      'Ramen Bowl',
      'Yummy Ramen to satiate your hunger!',
      'https://images.pexels.com/photos/15085069/pexels-photo-15085069/free-photo-of-food-restaurant-dinner-lunch.jpeg?auto=compress&cs=tinysrgb&w=1600',
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Eggs', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Broth', 1),
        new Ingredient('Green Onion', 1),
        new Ingredient('Seaweed', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
