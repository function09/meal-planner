import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealPlanManager from "./mealPlanController";
import DisplayMeals from "../DOM/displayMeals";

const container = document.querySelector("#mealPlanFormContainer");
const sideBar = document.querySelector("#sideBar");
const mealPlanTabContainer = document.querySelector(".mealPlanTabContainer");
const favoriteTabContainer = document.querySelector(".favoriteTabContainer");
const completedTabContainer = document.querySelector(".completedTabContainer");
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
      mealPlanTabContainer.style.backgroundColor = "#e2e8f0";
      favoriteTabContainer.style.backgroundColor = "";
      completedTabContainer.style.backgroundColor = "";
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

      mealPlanTabContainer.style.backgroundColor = "";
      favoriteTabContainer.style.backgroundColor = "#e2e8f0";
      completedTabContainer.style.backgroundColor = "";
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

      mealPlanTabContainer.style.backgroundColor = "";
      favoriteTabContainer.style.backgroundColor = "";
      completedTabContainer.style.backgroundColor = "#e2e8f0";
      break;
    }
    default:
      break;
  }
});
