import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanController";
import DisplayMeals from "../DOM/displayMeals";

const container = document.querySelector("#mealPlanFormContainer");
const sideBar = document.querySelector("#sideBar");
const displayMealPlan = DisplayMealPlanFactory();
const displayMeals = DisplayMeals();

sideBar.addEventListener("click", (event) => {
  const { target } = event;

  switch (target.id) {
    case "mealPlanTab": {
      delete container.dataset.type;

      displayMealPlan.displayCreateNewMealButton();
      displayMealPlan.removeMealPlanDisplay();
      displayMealPlan.removeMealParentContainer();
      displayMeals.removeMealDisplay();

      mealPlanManager.mealPlanArray.forEach((plan) => {
        displayMealPlan.createMealPlanDisplay(
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
      displayMealPlan.removeMealParentContainer();
      displayMeals.removeMealDisplay();

      favoriteMealPlanArray.forEach((plan) => {
        displayMealPlan.createMealPlanDisplay(
          plan.date,
          plan.title,
          plan.id,
          plan.favorite
        );
      });

      container.dataset.type = "favorites";
      displayMealPlan.displayCreateNewMealButton();

      break;
    }
    case "completedTab": {
      const completedMealPlans = mealPlanManager.storeCompletedMealPlan();

      displayMealPlan.removeMealPlanDisplay();
      displayMealPlan.removeMealParentContainer();
      displayMeals.removeMealDisplay();

      completedMealPlans.forEach((plan) => {
        displayMealPlan.createMealPlanDisplay(
          plan.date,
          plan.title,
          plan.id,
          plan.favorite,
          plan.complete
        );
      });

      container.dataset.type = "completed";
      displayMealPlan.displayCreateNewMealButton();

      break;
    }
    default:
      break;
  }
});
