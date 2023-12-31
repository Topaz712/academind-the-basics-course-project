import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //   'Carne Asada Tacos',
  //   'Delicious juicy and tender beef tacos!',
  //   'https://images.pexels.com/photos/8999152/pexels-photo-8999152.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //   [
  //     new Ingredient('Meat', 1),
  //     new Ingredient('Corn Tortillas', 2),
  //     new Ingredient('Salsa', 2),
  //     new Ingredient('Onion', 1),
  //     new Ingredient('Cilantro', 1),
  //     new Ingredient('Lime', 1)
  //   ]),
  //   new Recipe(
  //     'Ramen Bowl',
  //     'Yummy Ramen to satiate your hunger!',
  //     'https://images.pexels.com/photos/15085069/pexels-photo-15085069/free-photo-of-food-restaurant-dinner-lunch.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     [
  //       new Ingredient('Noodles', 1),
  //       new Ingredient('Eggs', 1),
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Broth', 1),
  //       new Ingredient('Green Onion', 1),
  //       new Ingredient('Seaweed', 1)
  //     ])
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {

  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
