import DisplayMeals from "../DOM/displayMeals";
import mealManager from "../logic/mealManager";

const mealPlanFormContainer = document.querySelector("#mealPlanFormContainer");
const displayMeals = DisplayMeals();

mealPlanFormContainer.addEventListener("click", (event) => {
  const { target } = event;
  const { id } = event.target.dataset;
  const { meal } = event.target.dataset;
  const mealContainer = event.target.parentElement;
  const mealDisplay = event.target.parentElement; // change name of this when cleaning
  const selectedMealContainer = mealDisplay.parentElement;

  switch (target.className) {
    case "addMeal": {
      displayMeals.createMealForm(mealContainer, meal, id);
      target.remove();
      break;
    }

    case "submitMeal": {
      const inputValues = displayMeals.returnInputData(mealDisplay);
      mealManager.pushToMealArray(...inputValues, meal, id);

      const dishes = mealManager.getDishes(meal, id);
      displayMeals.displayMeal(dishes, selectedMealContainer, meal, id);

      mealDisplay.remove();
      mealManager.setStorage();
      event.preventDefault();
      break;
    }

    case "editMeal": {
      displayMeals.createMealForm(selectedMealContainer, meal, id);

      mealDisplay.nextSibling
        .querySelectorAll("input")
        .forEach((input, index) => {
          const inputElement = input;
          inputElement.value = displayMeals.getDishValues(mealDisplay)[index];
        });

      mealDisplay.nextSibling.lastElementChild.textContent = "Save edit";
      mealDisplay.nextSibling.lastElementChild.className = "saveMealEdit";
      mealDisplay.remove();
      break;
    }

    case "saveMealEdit": {
      const dishes = displayMeals.getDishes(mealDisplay);
      mealManager.editMeal(meal, id, ...dishes);
      displayMeals.displayMeal(dishes, selectedMealContainer, meal, id);

      mealDisplay.remove();
      mealManager.setStorage();
      event.preventDefault();
      break;
    }
    default:
      break;
  }
});

export default mealManager;
