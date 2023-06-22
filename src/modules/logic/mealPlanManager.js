import MealPlan from "./mealPlans";

class MealPlanManager {
  mealPlanArray = [];

  // Uses mealPlanArray as local storage for all meal plans
  setStorage() {
    localStorage.setItem("mealPlanArray", JSON.stringify(this.mealPlanArray));
  }

  // Adds object to mealPlanArray
  pushToMealPlanArray(date, title, breakfast, lunch, dinner, id) {
    this.mealPlanArray.push(
      new MealPlan(date, title, breakfast, lunch, dinner, id)
    );
  }

  // Removes MealPlan objects from mealPlanArray
  removeFromMealPlanArray(ID) {
    const mealPlanIndex = this.mealPlanArray.findIndex((obj) => obj.id === ID);

    this.mealPlanArray.splice(mealPlanIndex, 1);
  }

  // Selects mealPlans by ID
  selectMealPlan(ID) {
    const selectedMealPlan = this.mealPlanArray.find((obj) => obj.id === ID);

    return selectedMealPlan;
  }

  // Updates mealPlans after editing
  editMealPlan(ID, date, title, breakfast, lunch, dinner) {
    const mealPlan = this.selectMealPlan(ID);
    mealPlan.date = date;
    mealPlan.title = title;
    mealPlan.breakfast = breakfast;
    mealPlan.lunch = lunch;
    mealPlan.dinner = dinner;
  }

  // Stores meals that have been selected
  selectMeals(ID) {
    const selectedMeals = [];

    // const selectedMealPlan = this.mealPlanArray.find((obj) => obj.id === ID);

    const meals = Object.keys(this.selectMealPlan(ID)).filter(
      (key) =>
        this.selectMealPlan(ID)[key] === true &&
        key !== "favorite" &&
        key !== "complete"
    );

    meals.forEach((meal) => {
      selectedMeals.push(meal.charAt(0).toUpperCase() + meal.slice(1));
    });
    return selectedMeals;
  }

  // Returns mealPlan values for breakfast, lunch, and dinner
  getMealValues(ID) {
    const selectedMealPlan = this.selectMealPlan(ID);

    const { breakfast, lunch, dinner } = selectedMealPlan;
    return [breakfast, lunch, dinner];
  }

  // Changes "favorite" property to "true"
  favoriteMealPlan(ID) {
    if (this.selectMealPlan(ID).favorite === false) {
      this.selectMealPlan(ID).favorite = true;
    }
  }

  // Changes "favorite" property to "false"
  unfavoriteMealPlan(ID) {
    if (this.selectMealPlan(ID).favorite === true) {
      this.selectMealPlan(ID).favorite = false;
    }
  }

  // Filter mealPlanArray to include only mealPlan whose "favorite" property is true
  storeFavoriteMealPlans() {
    const storedMealPlans = this.mealPlanArray.filter(
      (mealPlan) => mealPlan.favorite === true
    );
    return storedMealPlans;
  }

  // Changes complete property in mealPlan to "true"
  completeMealPlan(ID) {
    if (this.selectMealPlan(ID).complete === false) {
      this.selectMealPlan(ID).complete = true;
    }
  }

  // Changes complete property in mealPlan to "false"
  uncompleteMealPlan(ID) {
    if (this.selectMealPlan(ID).complete === true) {
      this.selectMealPlan(ID).complete = false;
    }
  }

  // Filter mealPlanArray to include only mealPlan whose "complete" property is true
  storeCompletedMealPlan() {
    const storedMealPlans = this.mealPlanArray.filter(
      (mealplan) => mealplan.complete === true
    );
    return storedMealPlans;
  }

  // Returns mealPlan array length
  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }

  // Returns length of filtered array containing "favorite" properties set to true
  getFavoriteMealPlanArrayLength() {
    return this.storeFavoriteMealPlans().length;
  }

  // Returns length of filtered array containing "completed" properties set to true
  getCompletedMealPlanArrayLength() {
    return this.storeCompletedMealPlan().length;
  }
}

const mealPlanManager = new MealPlanManager();

export default mealPlanManager;
