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

  removeFromArray(ID) {
    const getMealPlanIndex = this.mealPlanArray.findIndex(
      (obj) => obj.id === ID
    );
    // console.log(getMealPlanIndex);
    this.mealPlanArray.splice(getMealPlanIndex, 1);

    // this.mealPlanArray.splice(index, 1);
    console.log(this.mealPlanArray);
  }

  editMealPlan(selection, date, breakfast, lunch, dinner) {
    const getObjByID = this.mealPlanArray.find((obj) => obj.id === selection);
    getObjByID.date = date;
    getObjByID.breakfast = breakfast;
    getObjByID.lunch = lunch;
    getObjByID.dinner = dinner;
    console.log(this.mealPlanArray);
  }

  getMealData(selection) {
    const getObjByID = this.mealPlanArray.find((obj) => obj.id === selection);
    const getBreakfast = getObjByID.breakfast;
    const getLunch = getObjByID.lunch;
    const getDinner = getObjByID.dinner;
    return [getBreakfast, getLunch, getDinner];
  }

  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }

  favoriteMealPlan(index) {
    this.mealPlanArray[index].favorite = true;

    if (this.mealPlanArray[index].favorite === true) {
      this.favoriteMealPlanArray.push(this.mealPlanArray[index]);
    }
    // Does not allow duplicate entries
    const uniqueIDs = [
      ...new Map(
        this.favoriteMealPlanArray.map((key) => [key.id, key])
      ).values(),
    ];

    this.favoriteMealPlanArray = uniqueIDs;
    console.log(this.favoriteMealPlanArray);
    // console.log(this.mealPlanArray);
    // console.log(this.favoriteMealPlanArray);
  }

  unfavoriteMealPlan(index) {
    // Will set favorite property to false in remove object from favoriteMealPlanArray and change it's favorite property to false in mealPlan array
    // this.favoriteMealPlanArray.splice(index, 1);
    // console.log(this.favoriteMealPlanArray);
  }
}

export { MealPlanManager };
