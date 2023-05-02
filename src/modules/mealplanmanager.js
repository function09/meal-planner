import { MealPlan } from "./mealplans";

class MealPlanManager {
  mealPlanArray = [];

  assignID() {
    let id = 0;
    this.mealPlanArray.forEach((index) => {
      index.id = id;
      id += 1;
    });
  }

  pushToArray(date, breakfast, lunch, dinner) {
    this.mealPlanArray.push(new MealPlan(date, breakfast, lunch, dinner));
    // console.log(this.mealPlanArray);
  }

  removeFromArray(index) {
    this.mealPlanArray.splice(index, 1);
    // console.log(this.mealPlanArray);
  }

  editMealPlan(index, date) {
    this.mealPlanArray[index].date = date;
  }

  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }
}

export { MealPlanManager };
