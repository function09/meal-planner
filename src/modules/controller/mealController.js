import MealManager from "../logic/mealManager";
import DisplayMeals from "../DOM/displayMeals";

const mealPlanFormContainer = document.querySelector("#mealPlanFormContainer");
const mealManager = new MealManager();
const displayMeals = DisplayMeals();

mealPlanFormContainer.addEventListener("click", (event) => {
  const { target } = event;
  const { id } = event.target.dataset;
  const { meal } = event.target.dataset;
  const mealContainer = event.target.parentElement;
  const form = event.target.parentElement; // change name of this when cleaning
  const selectedMealContainer = form.parentElement;

  switch (target.className) {
    case "addMeal": {
      displayMeals.createMealForm(mealContainer, meal, id);
      target.remove();
      break;
    }
    case "submitMeal": {
      const inputValues = displayMeals.returnInputData(form);
      mealManager.pushToMealArray(...inputValues, meal, id);

      const dishes = mealManager.getDishes(meal, id);
      displayMeals.displayMeal(dishes, selectedMealContainer, meal, id);

      form.remove();
      event.preventDefault();
      break;
    }
    case "editMeal": {
      displayMeals.createMealForm(selectedMealContainer, meal, id);
      form.nextSibling.lastElementChild.textContent = "Save edit";
      form.nextSibling.lastElementChild.className = "saveMealEdit";
      form.remove();
      break;
    }

    case "saveMealEdit": {
      const dishes = mealManager.getDishes(meal, id);
      mealManager.editMeal(meal, id, ...dishes);
      displayMeals.displayMeal(dishes, selectedMealContainer, meal, id);

      form.remove();
      event.preventDefault();
      break;
    }

    default:
      break;
  }
});

export default mealManager;
