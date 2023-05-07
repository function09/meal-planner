import { id } from "date-fns/locale";
import { MealPlan } from "./mealplans";

class MealPlanManager {
  mealPlanArray = [];

  favoriteMealPlanArray = [];

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

  editMealPlan(index, date, breakfast, lunch, dinner) {
    this.mealPlanArray[index].date = date;
    this.mealPlanArray[index].breakfast = breakfast;
    this.mealPlanArray[index].lunch = lunch;
    this.mealPlanArray[index].dinner = dinner;
    console.log(this.mealPlanArray);
  }

  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }

  favoriteMealPlan(index) {
    this.mealPlanArray[index].favorite = true;
    if (this.mealPlanArray[index].favorite === true) {
      this.favoriteMealPlanArray.push(this.mealPlanArray[index]);
    }

    const uniqueIDs = [
      ...new Map(
        this.favoriteMealPlanArray.map((key) => [key.id, key])
      ).values(),
    ];
    this.favoriteMealPlanArray = uniqueIDs;
    console.log(this.favoriteMealPlanArray);
  }
}

export { MealPlanManager };
