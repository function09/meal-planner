import { MealPlan } from "./mealplans";

class MealPlanManager {
  mealPlanArray = [];

  pushToArray(date, breakfast, lunch, dinner) {
    this.mealPlanArray.push(new MealPlan(date, breakfast, lunch, dinner));
  }

  removeFromArray(index) {
    this.mealPlanArray.splice(index, 1);
  }

  editMealPlan(index, date) {
    this.mealPlanArray[index].date = date;
  }

  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }
}

export { MealPlanManager };
