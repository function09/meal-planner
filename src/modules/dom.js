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
    const testArr = newMealPlanManager.selectMeals(getMealObjID);
    displayMealPlans.removeMealPlanDisplay();
    displayMealPlans.createMealContainer();
    displayMealPlans.viewMeals(getDate, testArr);
    document.querySelector("#createNewMeal").style.display = "none";
    displayMeals.assignButtonMealData(testArr);
    displayMeals.assignButtonMealID(getMealObjID);
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
// Use variables and name to what they do or point to
selectContainer.addEventListener("click", (event) => {
  const targetClass = event.target.className;
  const selectForm = event.target.parentElement;
  const selectMealDiv = selectForm.parentElement;
  const getMealData = event.target.dataset.meal;
  const getMealPlanIDValue = Number(event.target.dataset.mealPlanId);
  if (targetClass === "submitMeal") {
    const getInputValues = displayMeals.returnInputData(selectForm);

    newMealManager.pushToMealArray(
      ...getInputValues,
      getMealData,
      getMealPlanIDValue
    );
    // console.log(parent);
    // console.log(parent.parentElement);
    const dishArray = newMealManager.getDishes(getMealData, getMealPlanIDValue);
    displayMeals.displayMeal(dishArray, selectMealDiv);
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
