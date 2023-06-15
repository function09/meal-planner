import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanManager";

const displayMealPlan = DisplayMealPlanFactory();

mealPlanManager.mealPlanArray = JSON.parse(
  localStorage.getItem("mealPlanArray")
);

if (localStorage.getItem("mealPlanArray")) {
  mealPlanManager.mealPlanArray.forEach((mealPlan) => {
    displayMealPlan.display(mealPlan.date, mealPlan.id, mealPlan.favorite);
  });

  const mealPlanArrayLength = mealPlanManager.getMealPlanArrayLength();
  displayMealPlan.displayMealPlanAmount(mealPlanArrayLength);

  const favoriteMealPlanArrayLength =
    mealPlanManager.getFavoriteMealPlanArrayLength();

  displayMealPlan.displayFavoriteMealPlanAmount(favoriteMealPlanArrayLength);
}
