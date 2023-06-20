import MealPlan from "./mealPlans";

class MealPlanManager {
  mealPlanArray = [];

  // Uses mealPlanArray as local storage for all meal plans
  setStorage() {
    localStorage.setItem("mealPlanArray", JSON.stringify(this.mealPlanArray));
  }

  // Assigns a unique ID property to each MealPlan object
  assignID() {
    this.mealPlanArray.forEach((meal) => {
      if (typeof meal.id === "undefined") {
        const mealPlanObj = meal;
        mealPlanObj.id = (Math.random() + 1).toString(36).replace(".", "");
      }
    });
  }

  // Adds object to mealPlanArray
  pushToMealPlanArray(date, title, breakfast, lunch, dinner, id) {
    this.mealPlanArray.push(
      new MealPlan(date, title, breakfast, lunch, dinner, id)
    );
    this.assignID();
  }

  // Removes MealPlan objects from mealPlanArray
  removeFromMealPlanArray(ID) {
    const mealPlanIndex = this.mealPlanArray.findIndex((obj) => obj.id === ID);

    this.mealPlanArray.splice(mealPlanIndex, 1);
  }

  // Updates mealPlans after editing
  editMealPlan(selection, date, title, breakfast, lunch, dinner) {
    const selectedMealPlan = this.mealPlanArray.find(
      (obj) => obj.id === selection
    );
    selectedMealPlan.date = date;
    selectedMealPlan.title = title;
    selectedMealPlan.breakfast = breakfast;
    selectedMealPlan.lunch = lunch;
    selectedMealPlan.dinner = dinner;
  }

  // Returns selected MealPlan date
  selectMealPlanDate(ID) {
    const mealPlanDate = this.mealPlanArray.find((obj) => obj.id === ID).date;

    return mealPlanDate;
  }

  // Stores meals that have been selected
  selectMeals(ID) {
    const selectedMeals = [];

    const selectedMealPlan = this.mealPlanArray.find((obj) => obj.id === ID);

    const meals = Object.keys(selectedMealPlan).filter(
      (key) => selectedMealPlan[key] === true && key !== "favorite"
    );

    meals.forEach((meal) => {
      selectedMeals.push(meal.charAt(0).toUpperCase() + meal.slice(1));
    });
    return selectedMeals;
  }

  // Returns mealPlan values for breakfast, lunch, and dinner
  getMealValues(selection) {
    const selectedMealPlan = this.mealPlanArray.find(
      (obj) => obj.id === selection
    );

    const { breakfast, lunch, dinner } = selectedMealPlan;

    return [breakfast, lunch, dinner];
  }

  // Favorites MealPlans and pushes them to favoriteMealPlanArray
  favoriteMealPlan(selection) {
    const selectedMealPlan = this.mealPlanArray.find(
      (obj) => obj.id === selection
    );

    if (selectedMealPlan.favorite === false) {
      selectedMealPlan.favorite = true;
    }
  }

  // Removes mealPlan from favoriteMealPlanArray
  unfavoriteMealPlan(selection) {
    const selectedMealPlan = this.mealPlanArray.find(
      (obj) => obj.id === selection
    );

    if (selectedMealPlan.favorite === true) {
      selectedMealPlan.favorite = false;
    }
  }

  // Filters meal plans to include only meal plans that are favorites
  storeFavoriteMealPlans() {
    const storedMealPlans = this.mealPlanArray.filter(
      (mealPlan) => mealPlan.favorite === true
    );
    return storedMealPlans;
  }

  // Returns mealPlan array length
  getMealPlanArrayLength() {
    return this.mealPlanArray.length;
  }

  // Returns favoriteMealPlan array length
  getFavoriteMealPlanArrayLength() {
    return this.storeFavoriteMealPlans().length;
  }
}

const mealPlanManager = new MealPlanManager();

export default mealPlanManager;
