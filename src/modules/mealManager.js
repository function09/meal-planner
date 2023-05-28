import { Meals } from "./meals";

class MealManager {
  mealArray = [];

  addMeal(mainDish, sideDish, drink) {
    this.mealArray.push(new Meals(mainDish, sideDish, drink));
  }
}

export { MealManager };
