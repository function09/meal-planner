import { MealPlanManager } from "./mealplanmanager";
import { DisplayFactory } from "./displayMealPlans";

const selectContainer = document.querySelector("#container");
const updateMealPlanAmount = document.querySelector("#mealPlanAmount");
const newMealPlanManager = new MealPlanManager();

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
    // while (selectContainer.firstChild) {
    //   selectContainer.removeChild(selectContainer.firstChild);
    // }
    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });
    newMealPlanManager.pushToArray(date, ...meals);
    newMealPlanManager.assignID();
    newMealPlanManager.mealPlanArray.forEach((arr) => {
      display.displayMealPlan(arr.date, arr.id);
    });
    // console.log(newMealPlanManager.mealPlanArray);
    updateMealPlanAmount.textContent =
      newMealPlanManager.getMealPlanArrayLength();

    event.preventDefault();
    // Change index to ID, conditional is also incorrect
  } else if (event.target.className === "removeMealPlan") {
    const getMealPlanID = Number(event.target.dataset.id);
    newMealPlanManager.removeFromArray(getMealPlanID);
    display.remove(getMealPlanID);

    updateMealPlanAmount.textContent =
      newMealPlanManager.getMealPlanArrayLength();

    if (newMealPlanManager.getMealPlanArrayLength() === 0) {
      updateMealPlanAmount.textContent = "";
    }
  }
  // Refactor to use ID after completing try to optimize the code so you can use spread operator
  else if (event.target.className === "editMealPlan") {
    const mealPlan = event.target.parentElement;
    const selection = event.target.dataset.id;
    const selectMealPlanID = Number(event.target.dataset.id);
    const getMealData = newMealPlanManager.getMealData(selectMealPlanID);
    display.edit(mealPlan, selection, ...getMealData);
  } else if (event.target.id === "saveEdit") {
    const selection = Number(event.target.dataset.id);
    const date = display.getDate();
    const meals = display.getMeals();

    newMealPlanManager.editMealPlan(selection, date, ...meals);
    display.closeForm();

    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });

    newMealPlanManager.mealPlanArray.forEach((arr) => {
      display.displayMealPlan(arr.date, arr.id);
    });
    event.preventDefault();
  } else if (event.target.className === "favorite") {
    const arrayIndex = event.target.dataset.index;
    const selection = event.target;
    newMealPlanManager.favoriteMealPlan(arrayIndex);
    display.favoriteMealPlan(selection, arrayIndex);
  }
});

const selectNavBar = document.querySelector("#navBar");
const display = DisplayFactory();

selectNavBar.addEventListener("click", (event) => {
  if (event.target.id === "mealPlanTab") {
    console.log("hello world");
  } else if (event.target.id === "favoriteTab") {
    const favoriteMealPlans = newMealPlanManager.favoriteMealPlanArray;
    display.favoriteMealPlan();
    favoriteMealPlans.forEach((plan) => {
      display.displayMealPlan(plan.date);
    });
  }
});
