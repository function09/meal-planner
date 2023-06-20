import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanManager";
import mealManager from "./mealManager";

// Meal plan local storage
const displayMealPlan = DisplayMealPlanFactory();

mealPlanManager.mealPlanArray = JSON.parse(
  localStorage.getItem("mealPlanArray")
);

// If meal plan local storage is present, display all contents upon page load
if (localStorage.getItem("mealPlanArray")) {
  mealPlanManager.mealPlanArray.forEach((mealPlan) => {
    displayMealPlan.display(
      mealPlan.date,
      mealPlan.title,
      mealPlan.id,
      mealPlan.favorite
    );
  });

  const mealPlanArrayLength = mealPlanManager.getMealPlanArrayLength();
  displayMealPlan.displayMealPlanAmount(mealPlanArrayLength);

  const favoriteMealPlanArrayLength =
    mealPlanManager.getFavoriteMealPlanArrayLength();

  displayMealPlan.displayFavoriteMealPlanAmount(favoriteMealPlanArrayLength);
}

// Meal local storage
if (localStorage.getItem("mealArray")) {
  mealManager.mealArray = JSON.parse(localStorage.getItem("mealArray"));
}
