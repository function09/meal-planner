import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanController";
import DisplayMeals from "../DOM/displayMeals";

const container = document.querySelector("#mealPlanFormContainer");
const navBar = document.querySelector("#navBar");
const displayMealPlan = DisplayMealPlanFactory();
const displayMeals = DisplayMeals();

navBar.addEventListener("click", (event) => {
  const { target } = event;

  switch (target.id) {
    case "mealPlanTab": {
      delete container.dataset.type;

      displayMealPlan.displayCreateNewMealButton();
      displayMealPlan.removeMealPlanDisplay();
      displayMeals.removeMealDisplay();

      mealPlanManager.mealPlanArray.forEach((plan) => {
        displayMealPlan.display(
          plan.date,
          plan.title,
          plan.id,
          plan.favorite,
          plan.complete
        );
      });

      break;
    }
    case "favoriteTab": {
      const favoriteMealPlanArray = mealPlanManager.storeFavoriteMealPlans();

      displayMealPlan.removeMealPlanDisplay();
      displayMeals.removeMealDisplay();

      favoriteMealPlanArray.forEach((plan) => {
        displayMealPlan.display(plan.date, plan.title, plan.id, plan.favorite);
      });

      container.dataset.type = "favorites";
      displayMealPlan.displayCreateNewMealButton();

      break;
    }
    case "completedTab": {
      const completedMealPlans = mealPlanManager.storeCompletedMealPlan();

      displayMealPlan.removeMealPlanDisplay();
      displayMeals.removeMealDisplay();

      completedMealPlans.forEach((plan) => {
        displayMealPlan.display(
          plan.date,
          plan.title,
          plan.id,
          plan.favorite,
          plan.complete
        );
      });
      break;
    }
    default:
      break;
  }
});
