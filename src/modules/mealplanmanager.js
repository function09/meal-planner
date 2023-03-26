import { MealPlan } from "./mealplans";

class MealPlanManager {
  mealPlanArray = [];

  pushToArray(date, breakfast, lunch, dinner) {
    this.mealPlanArray.push(new MealPlan(date, breakfast, lunch, dinner));
  }
}

export { MealPlanManager };
