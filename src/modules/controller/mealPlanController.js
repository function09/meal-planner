import mealPlanManager from "../logic/mealPlanManager";
import DisplayMealPlanFactory from "../DOM/displayMealPlans";
import mealManager from "./mealController";

const mealPlanFormContainer = document.querySelector("#mealPlanFormContainer");
// const mealManager = new MealManager();
const displayMealPlan = DisplayMealPlanFactory();

mealPlanFormContainer.addEventListener("click", (event) => {
  const { target } = event;
  const { id } = event.target.dataset;

  switch (target.className) {
    case "createNewMeal":
      displayMealPlan.displayForm();
      break;
    case "close":
      displayMealPlan.closeForm();
      break;
    case "submitFormButton": {
      const date = displayMealPlan.getDate();
      const meals = displayMealPlan.getMeals();
      const title = displayMealPlan.getTitle();

      mealPlanManager.pushToMealPlanArray(date, title, ...meals);

      const mealPlanArrayLength = mealPlanManager.getMealPlanArrayLength();
      displayMealPlan.displayMealPlanAmount(mealPlanArrayLength);

      displayMealPlan.closeForm();
      displayMealPlan.removeMealPlanDisplay();

      mealPlanManager.mealPlanArray.forEach((index) => {
        displayMealPlan.display(
          index.date,
          index.title,
          index.id,
          index.favorite
        );
      });

      mealPlanManager.setStorage();
      event.preventDefault();
      break;
    }
    case "view": {
      const date = mealPlanManager.selectMealPlanDate(id);
      const mealArray = mealPlanManager.selectMeals(id);
      const meals = mealManager.getMeals(id);

      displayMealPlan.removeMealPlanDisplay();
      displayMealPlan.viewMeals(meals, date, mealArray, id);
      document.querySelector("#createNewMeal").style.display = "none";
      break;
    }
    case "removeMealPlan": {
      mealPlanManager.removeFromMealPlanArray(id);
      target.parentElement.remove();

      const mealPlanArrayLength = mealPlanManager.getMealPlanArrayLength();
      displayMealPlan.displayMealPlanAmount(mealPlanArrayLength);

      const favoriteMealPlanArrayLength =
        mealPlanManager.getFavoriteMealPlanArrayLength();
      displayMealPlan.displayFavoriteMealPlanAmount(
        favoriteMealPlanArrayLength
      );
      mealPlanManager.setStorage();
      break;
    }
    case "editMealPlan": {
      const { parentElement } = event.target;
      const mealValues = mealPlanManager.getMealValues(id);

      displayMealPlan.edit(parentElement, id, ...mealValues);

      break;
    }
    case "saveMealPlanEdit": {
      const date = displayMealPlan.getDate();
      const meals = displayMealPlan.getMeals();
      const title = displayMealPlan.getTitle();

      mealPlanManager.editMealPlan(id, date, title, ...meals);
      displayMealPlan.closeForm();
      displayMealPlan.removeMealPlanDisplay();

      mealPlanManager.mealPlanArray.forEach((index) => {
        displayMealPlan.display(
          index.date,
          index.title,
          index.id,
          index.favorite
        );
      });

      mealPlanManager.setStorage();

      event.preventDefault();
      break;
    }
    case "favorite": {
      mealPlanManager.favoriteMealPlan(id);
      target.textContent = "Unfavorite";
      target.className = "unfavorite";

      const favoriteMealPlanArrayLength =
        mealPlanManager.getFavoriteMealPlanArrayLength();

      displayMealPlan.displayFavoriteMealPlanAmount(
        favoriteMealPlanArrayLength
      );
      mealPlanManager.setStorage();
      mealPlanManager.storeFavoriteMealPlans();
      break;
    }
    case "unfavorite": {
      mealPlanManager.unfavoriteMealPlan(id);

      target.textContent = "Favorite";
      target.className = "favorite";

      const favoriteMealPlanArrayLength =
        mealPlanManager.getFavoriteMealPlanArrayLength();

      displayMealPlan.displayFavoriteMealPlanAmount(
        favoriteMealPlanArrayLength
      );

      if (mealPlanFormContainer.dataset.type === "favorites") {
        target.parentElement.remove();
      }

      mealPlanManager.setStorage();

      break;
    }
    default:
      break;
  }
});
export default mealPlanManager;
