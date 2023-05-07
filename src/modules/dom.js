import { MealPlanManager } from "./mealplanmanager";
import { DisplayFactory } from "./displayMealPlans";

const selectContainer = document.querySelector("#container");
const updateMealPlanAmount = document.querySelector("#mealPlanAmount");
const newMealPlanManager = new MealPlanManager();
const mealPlanManagerArrayLength = newMealPlanManager.getMealPlanArrayLength();
selectContainer.addEventListener("click", (event) => {
  const display = DisplayFactory();
  if (event.target.id === "createNewMeal") {
    display.displayForm();
  } else if (event.target.id === "close") {
    display.closeForm();
  } else if (event.target.id === "submitFormButton") {
    const date = display.getDate();
    const meals = display.getMeals();
    display.closeForm();
    display.displayMealPlan(date);
    newMealPlanManager.pushToArray(date, ...meals);
    newMealPlanManager.assignID();
    updateMealPlanAmount.textContent =
      newMealPlanManager.getMealPlanArrayLength();

    event.preventDefault();
  } else if (event.target.className === "removeMealPlan") {
    const getTarget = event.target.dataset.index;
    const getIndex = Number(getTarget);
    if (newMealPlanManager.mealPlanArray[getIndex].id === getIndex) {
      newMealPlanManager.removeFromArray(getIndex);
      display.remove(getTarget);
      display.assignID();
      display.assignIndex();
      newMealPlanManager.assignID();
    }

    updateMealPlanAmount.textContent = mealPlanManagerArrayLength;

    if (mealPlanManagerArrayLength === 0) {
      updateMealPlanAmount.textContent = "";
    }
  } else if (event.target.className === "editMealPlan") {
    const selection = event.target;
    display.edit(selection);
  } else if (event.target.className === "saveMealPlan") {
    const selection = event.target;
    const arrayIndex = selection.dataset.index;
    const date = display.getDate();
    const meals = display.saveEdit(selection);
    newMealPlanManager.editMealPlan(arrayIndex, date, ...meals);
  } else if (event.target.className === "priority") {
    const arrayIndex = event.target.dataset.index;
    newMealPlanManager.favoriteMealPlan(arrayIndex);
  }
});
