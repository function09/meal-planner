import MealPlanManager from "./logic/mealPlanManager";
import DisplayFactory from "./DOM/displayMealPlans";
import MealManager from "./logic/mealManager";
import DisplayMeals from "./DOM/displayMeals";

const selectContainer = document.querySelector("#mealPlanFormContainer");
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
    event.preventDefault();
  } else if (event.target.className === "view") {
    const getMealObjID = event.target.dataset.id;
    const getDate = newMealPlanManager.selectMealPlanDate(getMealObjID);
    const mealArray = newMealPlanManager.selectMeals(getMealObjID);
    const search = newMealManager.getMeals(getMealObjID);
    displayMealPlans.removeMealPlanDisplay();
    displayMealPlans.viewMeals(search, getDate, mealArray, getMealObjID);
    document.querySelector("#createNewMeal").style.display = "none";
  } else if (event.target.className === "removeMealPlan") {
    const getMealObjID = event.target.dataset.id;
    newMealPlanManager.removeFromMealPlanArray(getMealObjID);
    event.target.parentElement.remove();
    displayMealPlans.displayMealPlanAmount(
      newMealPlanManager.getMealPlanArrayLength()
    );
    displayMealPlans.displayFavoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
  } else if (event.target.className === "editMealPlan") {
    const mealPlan = event.target.parentElement;
    const selection = event.target.dataset.id;
    const selectMealPlanID = event.target.dataset.id;
    const getMealValues = newMealPlanManager.getMealValues(selectMealPlanID);
    displayMealPlans.edit(mealPlan, selection, ...getMealValues);
  } else if (event.target.id === "saveEdit") {
    const selection = event.target.dataset.id;
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
    const selection = event.target.dataset.id;
    newMealPlanManager.favoriteMealPlan(selection);
    selectEventText.textContent = "Unfavorite";
    selectEventText.className = "unfavorite";
    displayMealPlans.displayFavoriteMealPlanAmount(
      newMealPlanManager.getFavoriteMealPlanArrayLength()
    );
  } else if (event.target.className === "unfavorite") {
    const selectEventText = event.target;
    const selection = event.target.dataset.id;

    newMealPlanManager.unfavoriteMealPlan(selection);

    selectEventText.textContent = "Favorite";
    selectEventText.className = "favorite";

    displayMealPlans.displayFavoriteMealPlanAmount(
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

    displayMealPlans.displayCreateNewMealButton();
    displayMealPlans.removeMealPlanDisplay();

    newMealPlanManager.mealPlanArray.forEach((plan) => {
      displayMealPlans.displayMealPlan(plan.date, plan.id, plan.favorite);
    });
  } else if (event.target.id === "favoriteTab") {
    document.querySelector("#createNewMeal").style.displayMealPlans = "none";
    const favoriteMealPlans = newMealPlanManager.favoriteMealPlanArray;
    displayMealPlans.removeMealPlanDisplay();
    favoriteMealPlans.forEach((plan) => {
      displayMealPlans.displayMealPlan(plan.date, plan.id, plan.favorite);
    });

    selectContainer.dataset.type = "favorites";
    displayMealPlans.displayCreateNewMealButton();
  }
});

selectContainer.addEventListener("click", (event) => {
  const buttonClassName = event.target.className;
  const mealContainer = event.target.parentElement;
  const mealID = event.target.dataset.id;
  const mealType = event.target.dataset.meal;
  const selectForm = event.target.parentElement;
  const selectMealContainer = selectForm.parentElement;

  if (buttonClassName === "addMeal") {
    displayMeals.createMealForm(mealContainer, mealType, mealID);
    event.target.remove();
  } else if (buttonClassName === "submitMeal") {
    const getInputValues = displayMeals.returnInputData(selectForm);
    newMealManager.pushToMealArray(...getInputValues, mealType, mealID);
    const getDishes = newMealManager.getDishes(mealType, mealID);
    displayMeals.displayMeal(getDishes, selectMealContainer, mealType, mealID);
    selectForm.remove();
    event.preventDefault();
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
});
