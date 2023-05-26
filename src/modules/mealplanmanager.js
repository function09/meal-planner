import { MealPlan } from "./mealplans";

// Try to create a static method that can return obj ID as opposed to just repeating the same code over
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

  pushToMealPlanArray(date, breakfast, lunch, dinner) {
    this.mealPlanArray.push(new MealPlan(date, breakfast, lunch, dinner));
    console.log(this.mealPlanArray);
  }

  removeFromMealPlanArray(ID) {
    const getObjIndexMealPlans = this.mealPlanArray.findIndex(
      (obj) => obj.id === ID
    );
    const getObjIndexFavoriteMealPlans = this.favoriteMealPlanArray.findIndex(
      (obj) => obj.id === ID
    );

    // console.log(getMealPlanIndex);
    this.mealPlanArray.splice(getObjIndexMealPlans, 1);
    this.favoriteMealPlanArray.splice(getObjIndexFavoriteMealPlans, 1);
    // this.mealPlanArray.splice(index, 1);
    // console.log(this.mealPlanArray);
    // console.log(this.favoriteMealPlanArray);
  }

  editMealPlan(selection, date, breakfast, lunch, dinner) {
    const getObjByID = this.mealPlanArray.find((obj) => obj.id === selection);
    getObjByID.date = date;
    getObjByID.breakfast = breakfast;
    getObjByID.lunch = lunch;
    getObjByID.dinner = dinner;
    // console.log(this.mealPlanArray);
  }

  selectDate(ID) {
    const getObjMeal = this.mealPlanArray.find((obj) => obj.id === ID).date;

    return getObjMeal;
  }

  selectMeals(ID) {
    const mealArray = [];

    const getObjByID = this.mealPlanArray.find((obj) => obj.id === ID);
    // console.log(getObjByID);

    const getTruthyMeals = Object.keys(getObjByID).filter(
      (key) => getObjByID[key] === true && key !== "favorite"
    );

    getTruthyMeals.forEach((meal) => {
      mealArray.push(meal.charAt(0).toUpperCase() + meal.slice(1));
    });
    return mealArray;
  }

  getMealValues(selection) {
    const getObjByID = this.mealPlanArray.find((obj) => obj.id === selection);
    const getBreakfast = getObjByID.breakfast;
    const getLunch = getObjByID.lunch;
    const getDinner = getObjByID.dinner;
    return [getBreakfast, getLunch, getDinner];
  }

  favoriteMealPlan(selection) {
    const getObjByID = this.mealPlanArray.find((obj) => obj.id === selection);

    if (getObjByID.favorite === false) {
      getObjByID.favorite = true;
      this.favoriteMealPlanArray.push(getObjByID);
    }
    console.log(this.favoriteMealPlanArray);
  }

  unfavoriteMealPlan(selection) {
    const getObjByID = this.mealPlanArray.find((obj) => obj.id === selection);

    if (getObjByID.favorite === true) {
      getObjByID.favorite = false;

      const getObjIndex = this.favoriteMealPlanArray.findIndex(
        (obj) => obj.id === getObjByID.id
      );

      this.favoriteMealPlanArray.splice(getObjIndex, 1);
      console.log(this.favoriteMealPlanArray);
    }
  }

  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }

  getFavoriteMealPlanArrayLength() {
    return this.favoriteMealPlanArray.length;
  }
}

export { MealPlanManager };
