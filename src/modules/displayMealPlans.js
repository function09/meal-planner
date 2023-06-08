import { format } from "date-fns";
import { DisplayMeals } from "./displayMeals";

// Rename this when complete
const DisplayFactory = () => {
  const selectForm = document.querySelector("#form");
  const selectCreateNewMealButton = document.querySelector("#createNewMeal");
  const selectCheckBoxes = document.querySelectorAll(".checkbox");
  const selectContainer = document.querySelector("#container");
  const displayMeals = DisplayMeals();
  // Check and see if this even is necessary
  const assignID = () => {
    const selectMealPlans = document.querySelectorAll(".mealPlans");
    let IDValue = 0;
    selectMealPlans.forEach((plan) => {
      if (IDValue === 0) {
        plan.setAttribute("id", `index-${IDValue}`);
        IDValue++;
      } else {
        plan.setAttribute("id", `index-${IDValue++}`);
      }
    });
  };
  // RENAME AND ALL ELEMENTS TO BE MORE FITTING BEFORE PUSHING TO REPOSITORY!!!!

  const displayForm = () => {
    selectForm.style.display = "flex";
    selectCreateNewMealButton.style.display = "none";
  };
  const closeForm = () => {
    const selectDate = document.querySelector("#date");

    selectForm.style.display = "none";
    selectCreateNewMealButton.style.display = "flex";

    selectDate.value = "";

    selectCheckBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    selectForm.previousElementSibling.style.display = "flex";
    selectContainer.appendChild(selectForm);

    if (document.querySelector("#saveEdit")) {
      const selectSaveFormButton = document.querySelector("#saveEdit");

      selectSaveFormButton.textContent = "Submit";
      selectSaveFormButton.id = "submitFormButton";
    }
  };

  const displayCreateNewMeal = () => {
    if (selectContainer.dataset.type === "favorites") {
      selectCreateNewMealButton.style.display = "none";
    } else {
      selectCreateNewMealButton.style.display = "flex";
    }
  };
  const displayMealPlan = (date, index, favorite) => {
    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mealPlans");

    const createSpan = document.createElement("span");
    createSpan.textContent = date;

    const createViewButton = document.createElement("button");
    createViewButton.textContent = "View";
    createViewButton.setAttribute("class", "view");
    createViewButton.dataset.id = index;

    const createRemoveButton = document.createElement("button");
    createRemoveButton.textContent = "Remove";
    createRemoveButton.setAttribute("class", "removeMealPlan");
    createRemoveButton.dataset.id = index;

    const createEditButton = document.createElement("button");
    createEditButton.textContent = "Edit";
    createEditButton.setAttribute("class", "editMealPlan");
    createEditButton.dataset.id = index;

    const createFavoriteButton = document.createElement("button");
    createFavoriteButton.textContent = "Favorite";
    createFavoriteButton.setAttribute("class", "favorite");
    createFavoriteButton.dataset.id = index;
    if (favorite === true) {
      createFavoriteButton.textContent = "Unfavorite";
      createFavoriteButton.classList = "unfavorite";
    }

    if (document.querySelector("#createNewMeal")) {
      selectContainer.insertBefore(createDiv, selectCreateNewMealButton);
      createDiv.appendChild(createSpan);
      createDiv.appendChild(createViewButton);
      createDiv.appendChild(createRemoveButton);
      createDiv.appendChild(createEditButton);
      createDiv.appendChild(createFavoriteButton);
      assignID();
    } else {
      selectContainer.appendChild(createDiv);
      createDiv.appendChild(createSpan);
      createDiv.appendChild(createViewButton);
      createDiv.appendChild(createRemoveButton);
      createDiv.appendChild(createEditButton);
      createDiv.appendChild(createFavoriteButton);
      assignID();
    }
    selectContainer.appendChild(selectForm);
  };
  const getDate = () => {
    const dateValue = document.querySelector("#date").value;

    return format(new Date(`${dateValue}T12:00`), "PPPP");
  };
  const getMeals = () => {
    const mealArray = [];

    selectCheckBoxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.checked);
      } else {
        mealArray.push(false);
      }
    });
    // console.log({ ...mealArray });
    return mealArray;
  };
  const displayMealPlanAmount = (arrayLength) => {
    const updateMealPlanAmount = document.querySelector("#mealPlanAmount");
    updateMealPlanAmount.textContent = arrayLength;
    if (arrayLength === 0) {
      updateMealPlanAmount.textContent = "";
    }
  };
  const remove = (ID) => {
    const getMealPlanID = document.querySelector(`#index-${ID}`);

    getMealPlanID.remove();
    selectContainer.appendChild(selectForm);
  };
  // Hide createMeals new meal plan button when edit is clicked, refactor to be less code by using the form already made
  const edit = (mealPlan, selection, breakfast, lunch, dinner) => {
    const element = mealPlan;
    element.style.display = "none";
    mealPlan.after(selectForm);
    displayForm();

    const breakFastCheckBox = document.querySelector("#breakfast");
    const lunchCheckBox = document.querySelector("#lunch");
    const dinnerCheckBox = document.querySelector("#dinner");
    breakFastCheckBox.checked = breakfast;
    lunchCheckBox.checked = lunch;
    dinnerCheckBox.checked = dinner;

    const selectSubmitFormButton = document.querySelector("#submitFormButton");

    selectSubmitFormButton.textContent = "Save";
    selectSubmitFormButton.id = "saveEdit";
    selectSubmitFormButton.dataset.id = selection;
  };
  // Find a way to incorporate this within displayMealPlan()
  const favoriteMealPlan = () => {
    // const selectAllMealPlans = document.querySelectorAll(".mealPlans");
    // selectAllMealPlans.forEach((plan) => {
    //   plan.remove();
    // });
    // console.log(document.querySelector("#createNewMeal") === null);
  };

  const favoriteMealPlanAmount = (arrayLength) => {
    const selectFavoriteMealPlanAmount =
      document.querySelector("#favoriteAmount");

    selectFavoriteMealPlanAmount.textContent = arrayLength;

    if (arrayLength === 0) {
      selectFavoriteMealPlanAmount.textContent = "";
    }
  };
  // rename this to something better
  const removeMealPlanDisplay = () => {
    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });

    if (document.querySelector("#mealContainer")) {
      document.querySelector("#mealContainer").remove();
    }
  };

  const removeMealDisplay = () => {
    document.querySelectorAll(".mealContainer").forEach((meal) => {
      meal.remove();
    });
  };
  const createNewMealContainers = (date, meal, mealId) => {
    const createMealContainer = document.createElement("div");
    createMealContainer.setAttribute("class", "mealContainer");
    selectContainer.appendChild(createMealContainer);

    const createDateDiv = document.createElement("div");
    createDateDiv.setAttribute("class", "date");
    createDateDiv.textContent = date;
    createMealContainer.appendChild(createDateDiv);

    const createMealLabel = document.createElement("div");
    createMealLabel.setAttribute("class", "mealLabel");
    createMealLabel.textContent = meal;
    createMealContainer.appendChild(createMealLabel);

    const createAddMealButton = document.createElement("button");
    createAddMealButton.setAttribute("class", "createMeal");
    createAddMealButton.dataset.mealId = mealId;
    createAddMealButton.dataset.meal = meal;
    createAddMealButton.textContent = "+ Create meal";
    createMealContainer.appendChild(createAddMealButton);
  };

  const createMealDisplay = (filteredArray, index, parentElement) => {
    const createMainDishDiv = document.createElement("div");
    createMainDishDiv.setAttribute("class", "dish");
    createMainDishDiv.textContent = filteredArray[index].mainDish;
    parentElement.appendChild(createMainDishDiv);

    const createSideDishDiv = document.createElement("div");
    createMainDishDiv.setAttribute("class", "dish");
    createSideDishDiv.textContent = filteredArray[index].sideDish;
    parentElement.appendChild(createSideDishDiv);

    const createDrinkDiv = document.createElement("div");
    createMainDishDiv.setAttribute("class", "dish");
    createDrinkDiv.textContent = filteredArray[index].drink;
    parentElement.appendChild(createDrinkDiv);

    const createEditMealButton = document.createElement("button");
    createEditMealButton.setAttribute("class", "editMeal");
    createEditMealButton.dataset.mealId = filteredArray[index].mealPlanID;
    createEditMealButton.dataset.meal = filteredArray[index].meal;
    createEditMealButton.textContent = "edit";
    parentElement.appendChild(createEditMealButton);
  };

  const createMealButton = (mealId, meal, parentElement) => {
    const createMealButtonDiv = document.createElement("button");
    createMealButtonDiv.setAttribute("class", "createMeal");
    createMealButtonDiv.dataset.mealId = mealId;
    createMealButtonDiv.dataset.meal = meal;
    createMealButtonDiv.textContent = "+ Create meal";
    parentElement.appendChild(createMealButtonDiv);
  };

  const viewExistingMeals = (date, meal, filteredArray, index, mealId) => {
    const createMealContainer = document.createElement("div");
    createMealContainer.setAttribute("class", "mealContainer");
    selectContainer.appendChild(createMealContainer);

    const createMealDisplayDiv = document.createElement("div");
    createMealDisplayDiv.setAttribute("class", "mealDisplay");

    const createDateDiv = document.createElement("div");
    createDateDiv.setAttribute("class", "date");
    createDateDiv.textContent = date;
    createMealContainer.appendChild(createDateDiv);

    const createMealLabel = document.createElement("div");
    createMealLabel.setAttribute("class", "mealLabel");
    createMealLabel.textContent = meal;
    createMealContainer.appendChild(createMealLabel);

    if (typeof filteredArray[index] !== "undefined") {
      createMealDisplay(filteredArray, index, createMealDisplayDiv);
      createMealContainer.appendChild(createMealDisplayDiv);
    } else if (typeof filteredArray[index] === "undefined") {
      createMealButton(mealId, meal, createMealContainer);
    }
  };

  const viewMeals = (filteredArray, date, mealArray, mealId) => {
    mealArray.forEach((meal, index) => {
      if (filteredArray.length === 0) {
        createNewMealContainers(date, meal, mealId);
      } else if (filteredArray.length !== 0) {
        viewExistingMeals(date, meal, filteredArray, index, mealId);
      }
    });
  };

  return {
    assignID,
    displayForm,
    closeForm,
    displayCreateNewMeal,
    displayMealPlan,
    getDate,
    getMeals,
    displayMealPlanAmount,
    remove,
    edit,
    favoriteMealPlan,
    favoriteMealPlanAmount,
    removeMealPlanDisplay,
    removeMealDisplay,
    viewMeals,
  };
};

export { DisplayFactory };
