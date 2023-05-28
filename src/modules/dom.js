import { MealPlanManager } from "./mealplanmanager";
import { DisplayFactory } from "./displayMealPlans";
import { MealManager } from "./mealManager";

const selectContainer = document.querySelector("#container");
const newMealPlanManager = new MealPlanManager();
const newMealManager = new MealManager();

selectContainer.addEventListener("click", (event) => {
  const displayMealPlans = DisplayFactory();
  if (event.target.id === "createNewMeal") {
    displayMealPlans.displayForm();
  } else if (event.target.id === "close") {
    displayMealPlans.closeForm();
  } else if (event.target.id === "submitFormButton") {
    const date = displayMealPlans.getDate();
    const meals = displayMealPlans.getMeals();
    displayMealPlans.closeForm();
    // while (selectContainer.firstChild) {
    //   selectContainer.removeChild(selectContainer.firstChild);
    // }
    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });
    newMealPlanManager.pushToMealPlanArray(date, ...meals);
    newMealPlanManager.assignID();
    newMealPlanManager.mealPlanArray.forEach((arr) => {
      displayMealPlans.displayMealPlan(arr.date, arr.id, arr.favorite);
    });
    displayMealPlans.displayMealPlanAmount(
      newMealPlanManager.getMealPlanArrayLength()
    );
    // console.log(newMealPlanManager.mealPlanArray);

    event.preventDefault();
    // Change index to ID, conditional is also incorrect
  } else if (event.target.className === "view") {
    const getMealObjID = Number(event.target.dataset.id);
    const getDate = newMealPlanManager.selectDate(getMealObjID);
    // Rename this when complete
    const testArr = newMealPlanManager.selectMeals(getMealObjID);
    displayMealPlans.removeMealPlanDisplay();
    displayMealPlans.createMealContainer();

    displayMealPlans.viewMeals(getDate, testArr);
    document.querySelector("#createNewMeal").style.display = "none";
  } else if (event.target.className === "removeMealPlan") {
    const getMealObjID = Number(event.target.dataset.id);
    newMealPlanManager.removeFromMealPlanArray(getMealObjID);
    displayMealPlans.remove(getMealObjID);
    displayMealPlans.displayMealPlanAmount(
      newMealPlanManager.getMealPlanArrayLength()
    );
    displayMealPlans.favoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
  }
  // Refactor to use ID after completing try to optimize the code so you can use spread operator
  else if (event.target.className === "editMealPlan") {
    const mealPlan = event.target.parentElement;
    const selection = event.target.dataset.id;
    const selectMealPlanID = Number(event.target.dataset.id);
    const getMealValues = newMealPlanManager.getMealValues(selectMealPlanID);
    displayMealPlans.edit(mealPlan, selection, ...getMealValues);
  } else if (event.target.id === "saveEdit") {
    const selection = Number(event.target.dataset.id);
    const date = displayMealPlans.getDate();
    const meals = displayMealPlans.getMeals();

    newMealPlanManager.editMealPlan(selection, date, ...meals);
    displayMealPlans.closeForm();

    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });

    newMealPlanManager.mealPlanArray.forEach((arr) => {
      displayMealPlans.displayMealPlan(arr.date, arr.id, arr.favorite);
    });
    event.preventDefault();
  } else if (event.target.className === "favorite") {
    const selectEventText = event.target;
    const selection = Number(event.target.dataset.id);
    newMealPlanManager.favoriteMealPlan(selection);
    // See if you can make these two into a function
    selectEventText.textContent = "Unfavorite";
    selectEventText.className = "unfavorite";
    displayMealPlans.favoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
  } else if (event.target.className === "unfavorite") {
    const selectEventText = event.target;
    const selection = Number(event.target.dataset.id);

    newMealPlanManager.unfavoriteMealPlan(selection);

    selectEventText.textContent = "Favorite";
    selectEventText.className = "favorite";

    displayMealPlans.favoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );

    if (selectContainer.dataset.type === "favorites") {
      event.target.parentElement.remove();
    }
  } else if (event.target.className === "mealButton") {
    const getParentElement = event.target.parentElement;
    displayMealPlans.createMealInputs(getParentElement);
  }
});

const selectNavBar = document.querySelector("#navBar");
const displayMealPlans = DisplayFactory();

selectNavBar.addEventListener("click", (event) => {
  if (event.target.id === "mealPlanTab") {
    delete selectContainer.dataset.type;

    displayMealPlans.displayCreateNewMeal();
    displayMealPlans.removeMealPlanDisplay();

    newMealPlanManager.mealPlanArray.forEach((plan) => {
      displayMealPlans.displayMealPlan(plan.date, plan.id, plan.favorite);
    });
  } else if (event.target.id === "favoriteTab") {
    // Make create new meal plan hide when in this tab
    document.querySelector("#createNewMeal").style.displayMealPlans = "none";
    const favoriteMealPlans = newMealPlanManager.favoriteMealPlanArray;
    displayMealPlans.removeMealPlanDisplay();

    favoriteMealPlans.forEach((plan) => {
      displayMealPlans.displayMealPlan(plan.date, plan.id, plan.favorite);
    });

    selectContainer.dataset.type = "favorites";
    displayMealPlans.displayCreateNewMeal();
  }
});

selectContainer.addEventListener("click", (event) => {
  if (event.target.className === "submitMeal") {
    newMealManager.addMeal("burger", "fries", "milkshake");
    console.log(newMealManager.mealArray);
    event.preventDefault();
  }
});
