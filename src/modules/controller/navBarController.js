import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanController";

const container = document.querySelector("#mealPlanFormContainer");
const navBar = document.querySelector("#navBar");
const displayMealPlan = DisplayMealPlanFactory();

navBar.addEventListener("click", (event) => {
  const { target } = event;

  switch (target.id) {
    case "mealPlanTab": {
      delete container.dataset.type;

      displayMealPlan.displayCreateNewMealButton();
      displayMealPlan.removeMealPlanDisplay();

      mealPlanManager.mealPlanArray.forEach((plan) => {
        displayMealPlan.display(plan.date, plan.id, plan.favorite);
      });
      console.log(mealPlanManager.mealPlanArray);

      break;
    }
    case "favoriteTab": {
      const { favoriteMealPlanArray } = mealPlanManager;

      displayMealPlan.removeMealPlanDisplay();

      favoriteMealPlanArray.forEach((plan) => {
        displayMealPlan.display(plan.date, plan.id, plan.favorite);
      });

      container.dataset.type = "favorites";
      displayMealPlan.displayCreateNewMealButton();

      break;
    }
    default:
      break;
  }
});
