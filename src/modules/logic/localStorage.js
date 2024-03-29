import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanManager";
import mealManager from "./mealManager";

// Meal plan local storage

// If meal plan local storage is present, display all contents upon page load
if (localStorage.getItem("mealPlanArray")) {
  const displayMealPlan = DisplayMealPlanFactory();

  mealPlanManager.mealPlanArray = JSON.parse(
    localStorage.getItem("mealPlanArray")
  );

  mealPlanManager.mealPlanArray.forEach((mealPlan) => {
    displayMealPlan.createMealPlanDisplay(
      mealPlan.date,
      mealPlan.title,
      mealPlan.id,
      mealPlan.favorite,
      mealPlan.complete
    );
  });

  const mealPlanArrayLength = mealPlanManager.getMealPlanArrayLength();
  displayMealPlan.displayMealPlanAmount(mealPlanArrayLength);

  const favoriteMealPlanArrayLength =
    mealPlanManager.getFavoriteMealPlanArrayLength();
  displayMealPlan.displayFavoriteMealPlanAmount(favoriteMealPlanArrayLength);

  const completedArray = mealPlanManager.getCompletedMealPlanArrayLength();
  displayMealPlan.displayCompletedMealPlanAmount(completedArray);
}

// Meal local storage
if (localStorage.getItem("mealArray")) {
  mealManager.mealArray = JSON.parse(localStorage.getItem("mealArray"));
}
