import { MealPlan } from "./mealplans";

class MealPlanManager {
  mealPlanArray = [];

  pushToArray(date) {
    this.mealPlanArray.push(new MealPlan(date));
  }
}

export { MealPlanManager };
