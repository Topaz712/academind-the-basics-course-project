import { Recipe } from './recipe.model'

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
