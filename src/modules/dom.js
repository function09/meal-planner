import { MealPlanManager } from "./mealplanmanager";
import { DisplayFactory } from "./displayMealPlans";
import { MealManager } from "./mealManager";
import { DisplayMeals } from "./displayMeals";

const selectContainer = document.querySelector("#container");
const newMealPlanManager = new MealPlanManager();
const newMealManager = new MealManager();
const displayMeals = DisplayMeals();

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
    // Change index to ID, conditional is also incorrect, clean up code
  } else if (event.target.className === "view") {
    const getMealObjID = Number(event.target.dataset.id);
    const getDate = newMealPlanManager.selectDate(getMealObjID);
    // Rename this when complete
    const mealArray = newMealPlanManager.selectMeals(getMealObjID);
    displayMealPlans.removeMealPlanDisplay();
    // displayMealPlans.createMealContainer();
    displayMealPlans.viewMeals(getDate, mealArray, getMealObjID);
    document.querySelector("#createNewMeal").style.display = "none";
    // displayMeals.assignButtonMealData(mealArray);
    // displayMeals.assignButtonMealID(getMealObjID);
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
    displayMealPlans.removeMealDisplay();

    newMealPlanManager.mealPlanArray.forEach((plan) => {
      displayMealPlans.displayMealPlan(plan.date, plan.id, plan.favorite);
    });
  } else if (event.target.id === "favoriteTab") {
    // Make create new meal plan hide when in this tab
    document.querySelector("#createNewMeal").style.displayMealPlans = "none";
    const favoriteMealPlans = newMealPlanManager.favoriteMealPlanArray;
    displayMealPlans.removeMealPlanDisplay();
    // displayMealPlans.removeMealDisplay();
    favoriteMealPlans.forEach((plan) => {
      displayMealPlans.displayMealPlan(plan.date, plan.id, plan.favorite);
    });

    selectContainer.dataset.type = "favorites";
    displayMealPlans.displayCreateNewMeal();
  }
});
// Use variables and name to what they do or point to RENAME VARIABLES CONTAINING EVENT.TARGET TO SOMETHING PROPER
selectContainer.addEventListener("click", (event) => {
  const buttonClassName = event.target.className;
  const mealContainer = event.target.parentElement;
  const mealID = Number(event.target.dataset.mealId);
  const mealType = event.target.dataset.meal;
  const selectForm = event.target.parentElement; // change name of this when cleaning
  const selectMealContainer = selectForm.parentElement;
  // const selectMealDiv = selectForm.parentElement;
  // const getMealData = event.target.dataset.meal;
  if (buttonClassName === "createMeal") {
    displayMeals.createMealForm(mealContainer, mealType, mealID);
    event.target.remove();
    // // console.log(parent.parentElement);
    // const dishArray = newMealManager.getDishes(getMealData, getMealPlanIDValue);
    // displayMeals.displayMeal(
    //   dishArray,
    //   selectMealDiv,
    //   getMealData,
    //   getMealPlanIDValue
    // );
    // selectForm.remove();
    // event.preventDefault();
  } else if (buttonClassName === "submitMeal") {
    const getInputValues = displayMeals.returnInputData(selectForm);
    newMealManager.pushToMealArray(...getInputValues, mealType, mealID);
    const getDishes = newMealManager.getDishes(mealType, mealID);
    displayMeals.displayMeal(getDishes, selectMealContainer, mealType, mealID);
    selectForm.remove();
    event.preventDefault();
    // if (selectMealContainer.dataset.canEdit === "true") {
    //   document.querySelector("button").textContent = "save";
    // }
  } else if (buttonClassName === "editMeal") {
    selectMealContainer.dataset.canEdit = true;
    displayMeals.createMealForm(selectMealContainer, mealType, mealID);
    selectForm.nextSibling.lastElementChild.textContent = "Save edit";
    selectForm.nextSibling.lastElementChild.className = "saveEdit";
    selectForm.remove();
  } else if (buttonClassName === "saveEdit") {
    const getDishes = displayMeals.getDishes(selectForm);
    newMealManager.editMeal(mealType, mealID, ...getDishes);
    displayMeals.displayMeal(getDishes, selectMealContainer, mealType, mealID);
    selectForm.remove();
    event.preventDefault();
  }
  // const parentElementClass = event.target.parentElement.className;
  // const parentParent = event.target.parentElement.parentElement;
  // if (event.target.className === "breakfast") {
  //   // Grab dish info using event.target
  //   const getDishes = displayMeals.getDishes(parentElementClass);
  //   newMealManager.addBreakfast(...getDishes);
  //   newMealManager.assignIDs();
  //   event.target.parentElement.remove();
  //   displayMeals.displayMeal(getDishes, parentParent);
  //   event.preventDefault();
  // } else if (event.target.className === "lunch") {
  //   const getDishes = displayMeals.getDishes(parentElementClass);
  //   newMealManager.addLunch(...getDishes);
  //   newMealManager.assignIDs();
  //   event.target.parentElement.remove();
  //   displayMeals.displayMeal(getDishes, parentParent);
  //   event.preventDefault();
  // } else if (event.target.className === "dinner") {
  //   const getDishes = displayMeals.getDishes(parentElementClass);
  //   newMealManager.addDinner(...getDishes);
  //   newMealManager.assignIDs();
  //   event.target.parentElement.remove();
  //   displayMeals.displayMeal(getDishes, parentParent);
  //   event.preventDefault();
  // } else if (event.target.className === "editMeal") {
  //   const parent = event.target.parentElement;
  //   const getID = event.target.parentElement.firstChild.id;
  //   displayMeals.createMealForm(parent, getID, "Save edit");
  //   const selectPreviousChildren =
  //     event.target.parentElement.querySelectorAll("div");
  //   selectPreviousChildren.forEach((child) => {
  //     child.remove();
  //   });
  //   event.target.remove();
  // } else if (event.target.className === "confirmEdit") {
  //   console.log(event.target.parentElement);
  //   event.preventDefault();
  // }
});
