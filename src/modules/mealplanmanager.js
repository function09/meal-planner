import { MealPlan } from "./mealplans";

class MealPlanManager {
  mealPlanArray = [];

  pushToArray(date, breakfast, lunch, dinner) {
    this.mealPlanArray.push(new MealPlan(date, breakfast, lunch, dinner));
    console.log(this.mealPlanArray);
  }

  removeFromArray(index) {
    this.mealPlanArray.splice(index, 1);
  }

  editMealPlan(index, date) {
    this.mealPlanArray[index].date = date;
  }
}

export { MealPlanManager };
