import { MealPlanManager } from "./mealplanmanager";
import { DisplayFactory } from "./displayMealPlans";

const selectContainer = document.querySelector("#container");
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
      display.displayMealPlan(arr.date, arr.id, arr.favorite);
    });
    display.displayMealPlanAmount(newMealPlanManager.getMealPlanArrayLength());
    // console.log(newMealPlanManager.mealPlanArray);

    event.preventDefault();
    // Change index to ID, conditional is also incorrect
  } else if (event.target.className === "removeMealPlan") {
    const getMealObjID = Number(event.target.dataset.id);
    newMealPlanManager.removeFromArray(getMealObjID);
    display.remove(getMealObjID);
    display.displayMealPlanAmount(newMealPlanManager.getMealPlanArrayLength());
    display.favoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
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
      display.displayMealPlan(arr.date, arr.id, arr.favorite);
    });
    event.preventDefault();
  } else if (event.target.className === "favorite") {
    const selectEventText = event.target;
    const selection = Number(event.target.dataset.id);
    newMealPlanManager.favoriteMealPlan(selection);
    // See if you can make these two into a function
    selectEventText.textContent = "Unfavorite";
    selectEventText.className = "unfavorite";
    display.favoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
  } else if (event.target.className === "unfavorite") {
    const selectEventText = event.target;
    const selection = Number(event.target.dataset.id);
    newMealPlanManager.unfavoriteMealPlan(selection);
    selectEventText.textContent = "Favorite";
    selectEventText.className = "favorite";
    display.favoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
  }
});

const selectNavBar = document.querySelector("#navBar");
const display = DisplayFactory();

selectNavBar.addEventListener("click", (event) => {
  if (event.target.id === "mealPlanTab") {
    console.log("hello world");
  } else if (event.target.id === "favoriteTab") {
    const favoriteMealPlans = newMealPlanManager.favoriteMealPlanArray;
    // display.favoriteMealPlan();
    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });
    favoriteMealPlans.forEach((plan) => {
      display.displayMealPlan(plan.date, plan.id, plan.favorite);
    });
  }
});
