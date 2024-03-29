import { format } from "date-fns";

// Rename this when complete
const DisplayMealPlan = () => {
  const mealPlanForm = document.querySelector("#mealPlanForm");
  const createNewMealButton = document.querySelector("#createNewMeal");
  const checkBoxes = document.querySelectorAll(".checkbox");
  const mealPlanFormContainer = document.querySelector(
    "#mealPlanFormContainer"
  );

  // Display form and hide createNewMealButton
  const displayForm = () => {
    mealPlanForm.style.display = "flex";
    createNewMealButton.style.display = "none";
  };

  /* Hide form and display createNewMealButton. If editing meal plan,
   * change saveFormButton to submitFormButton
   */
  const closeForm = () => {
    const date = document.querySelector("#date");
    const title = document.querySelector("#title");

    mealPlanForm.style.display = "none";
    createNewMealButton.style.display = "flex";

    date.value = "";
    title.value = "";

    checkBoxes.forEach((checkbox) => {
      const arg = checkbox;
      arg.checked = false;
    });

    mealPlanForm.previousElementSibling.style.display = "flex";
    mealPlanFormContainer.appendChild(mealPlanForm);

    if (document.querySelector(".saveMealPlanEdit")) {
      const saveFormButton = document.querySelector(".saveMealPlanEdit");

      saveFormButton.textContent = "Submit";
      saveFormButton.className = "submitFormButton";
    }
  };

  // Displays or hides createNewMealButton on toggle
  const displayCreateNewMealButton = () => {
    if (
      mealPlanFormContainer.dataset.type === "favorites" ||
      mealPlanFormContainer.dataset.type === "completed"
    ) {
      createNewMealButton.style.display = "none";
    } else {
      createNewMealButton.style.display = "flex";
    }
  };

  /* Displays meal plans
   * changes favorite button text to "unfavorite" if meal plan is favorited
   * if createNewMealButton present, inserts before it otherwise it inserts it at the end
   */
  const createMealPlanDisplay = (date, title, index, favorite, complete) => {
    const mealPlanDiv = document.createElement("div");
    mealPlanDiv.setAttribute("class", "mealPlans");

    const dateText = document.createElement("span");
    dateText.textContent = date;

    const titleText = document.createElement("span");
    titleText.textContent = title;

    const viewButton = document.createElement("button");
    viewButton.textContent = "View";
    viewButton.setAttribute("class", "view");
    viewButton.dataset.id = index;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "removeMealPlan");
    removeButton.dataset.id = index;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "editMealPlan");
    editButton.dataset.id = index;

    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = "Favorite";
    favoriteButton.setAttribute("class", "favorite");
    favoriteButton.dataset.id = index;

    if (favorite === true) {
      favoriteButton.textContent = "Unfavorite";
      favoriteButton.classList = "unfavorite";
    }

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.setAttribute("class", "complete");
    completeButton.dataset.id = index;

    if (complete === true) {
      completeButton.textContent = "Uncomplete";
      completeButton.classList = "uncomplete";
    }

    if (document.querySelector("#createNewMeal")) {
      mealPlanFormContainer.insertBefore(mealPlanDiv, createNewMealButton);
      mealPlanDiv.appendChild(dateText);
      mealPlanDiv.appendChild(titleText);
      mealPlanDiv.appendChild(viewButton);
      mealPlanDiv.appendChild(removeButton);
      mealPlanDiv.appendChild(editButton);
      mealPlanDiv.appendChild(favoriteButton);
      mealPlanDiv.appendChild(completeButton);
    } else {
      mealPlanFormContainer.appendChild(mealPlanDiv);
      mealPlanDiv.appendChild(dateText);
      mealPlanDiv.appendChild(titleText);
      mealPlanDiv.appendChild(viewButton);
      mealPlanDiv.appendChild(removeButton);
      mealPlanDiv.appendChild(editButton);
      mealPlanDiv.appendChild(favoriteButton);
      mealPlanDiv.appendChild(completeButton);
    }
    mealPlanFormContainer.appendChild(mealPlanForm);
  };

  // Selects date and formats it to be "day of the week, month, day and year"
  const getDate = () => {
    const dateValue = document.querySelector("#date").value;

    return format(new Date(`${dateValue}T12:00`), "PPPP");
  };

  // Selects title after inputting
  const getTitle = () => {
    const titleValue = document.querySelector("#title").value;

    return titleValue;
  };

  // Returns meal values when checked, stored in an array
  const getMeals = () => {
    const mealArray = [];

    checkBoxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.checked);
      } else {
        mealArray.push(false);
      }
    });
    return mealArray;
  };

  // Displays the length of mealPlanArray
  const displayMealPlanAmount = (arrayLength) => {
    const updateMealPlanAmount = document.querySelector("#mealPlanAmount");

    updateMealPlanAmount.textContent = arrayLength;
    if (arrayLength === 0) {
      updateMealPlanAmount.textContent = "";
      updateMealPlanAmount.style.display = "none";
    } else {
      updateMealPlanAmount.style.display = "flex";
    }
  };

  // Uses existing meal plan form to edit meal plans
  const edit = (mealPlan, selection, breakfast, lunch, dinner) => {
    const element = mealPlan;
    element.style.display = "none";
    mealPlan.after(mealPlanForm);
    displayForm();

    const breakFastCheckBox = document.querySelector("#breakfast");
    const lunchCheckBox = document.querySelector("#lunch");
    const dinnerCheckBox = document.querySelector("#dinner");
    breakFastCheckBox.checked = breakfast;
    lunchCheckBox.checked = lunch;
    dinnerCheckBox.checked = dinner;

    const submitFormButton = document.querySelector(".submitFormButton");

    submitFormButton.textContent = "Save";
    submitFormButton.setAttribute("class", "saveMealPlanEdit");
    submitFormButton.dataset.id = selection;
  };

  // Displays favoriteMealPlanArray length
  const displayFavoriteMealPlanAmount = (arrayLength) => {
    const selectFavoriteMealPlanAmount =
      document.querySelector("#favoriteAmount");

    selectFavoriteMealPlanAmount.textContent = arrayLength;

    if (arrayLength === 0) {
      selectFavoriteMealPlanAmount.textContent = "";
      selectFavoriteMealPlanAmount.style.display = "none";
    } else {
      selectFavoriteMealPlanAmount.style.display = "flex";
    }
  };

  const displayCompletedMealPlanAmount = (arrayLength) => {
    const completeMealPlanAmount = document.querySelector("#completedMealPlan");

    completeMealPlanAmount.textContent = arrayLength;

    if (arrayLength === 0) {
      completeMealPlanAmount.textContent = "";
      completeMealPlanAmount.style.display = "none";
    } else {
      completeMealPlanAmount.style.display = "flex";
    }
  };
  // Removes meal plans from display, if #mealContainer exists, remove it as well
  const removeMealPlanDisplay = () => {
    document.querySelectorAll(".mealPlans").forEach((plan) => {
      plan.remove();
    });

    if (document.querySelector("#mealContainer")) {
      document.querySelector("#mealContainer").remove();
    }
  };

  const removeMealParentContainer = () => {
    if (document.querySelector(".mealParentContainer")) {
      document.querySelector(".mealParentContainer").remove();
    }
  };

  const createMealParentContainer = (date, title) => {
    const mealParentContainer = document.createElement("div");
    mealParentContainer.setAttribute("class", "mealParentContainer");
    mealPlanFormContainer.appendChild(mealParentContainer);

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute("class", "date");
    dateDiv.textContent = date;
    mealParentContainer.appendChild(dateDiv);

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "title");
    titleDiv.textContent = title;
    mealParentContainer.appendChild(titleDiv);
  };

  /* Creates container elements for meals that:
   * display the date
   * display the meal type
   * display add meal button
   */
  const createNewMealContainers = (meal, id) => {
    const mealContainer = document.createElement("div");
    mealContainer.setAttribute("class", "mealContainer");
    mealPlanFormContainer.appendChild(mealContainer);

    // const dateDiv = document.createElement("div");
    // dateDiv.setAttribute("class", "date");
    // dateDiv.textContent = date;
    // mealContainer.appendChild(dateDiv);

    // const titleDiv = document.createElement("div");
    // titleDiv.setAttribute("class", "title");
    // titleDiv.textContent = title;
    // mealContainer.appendChild(titleDiv);

    const mealLabel = document.createElement("div");
    mealLabel.setAttribute("class", "mealLabel");
    mealLabel.textContent = meal;
    mealContainer.appendChild(mealLabel);

    const addMealButton = document.createElement("button");
    addMealButton.setAttribute("class", "addMeal");
    addMealButton.dataset.id = id;
    addMealButton.dataset.meal = meal.toLowerCase();
    addMealButton.textContent = "+ Add meal";
    mealContainer.appendChild(addMealButton);
  };

  // Displays main dish, side dish ,drinks and edit meal button
  const createMealDisplay = (array, index, parentElement) => {
    const mainDishDiv = document.createElement("div");
    mainDishDiv.setAttribute("class", "dish");
    mainDishDiv.textContent = array[index].mainDish;
    parentElement.appendChild(mainDishDiv);

    const sideDishDiv = document.createElement("div");
    sideDishDiv.setAttribute("class", "dish");
    sideDishDiv.textContent = array[index].sideDish;
    parentElement.appendChild(sideDishDiv);

    const drinkDiv = document.createElement("div");
    drinkDiv.setAttribute("class", "dish");
    drinkDiv.textContent = array[index].drink;
    parentElement.appendChild(drinkDiv);

    const editMealButton = document.createElement("button");
    editMealButton.setAttribute("class", "editMeal");
    editMealButton.dataset.id = array[index].id;
    editMealButton.dataset.meal = array[index].meal;
    editMealButton.textContent = "Edit Meal";
    parentElement.appendChild(editMealButton);
  };

  // Creates a new Add meal Button
  const createAddMealButton = (id, meal, parentElement) => {
    const addMealButtonDiv = document.createElement("button");
    addMealButtonDiv.setAttribute("class", "addMeal");
    addMealButtonDiv.dataset.id = id;
    addMealButtonDiv.dataset.meal = meal;
    addMealButtonDiv.textContent = "+ Add meal";
    parentElement.appendChild(addMealButtonDiv);
  };

  /* Displays existing meals,
   * if none have been created, displays add meal button instead
   */
  const viewExistingMeals = (meal, array, index, id) => {
    const mealContainer = document.createElement("div");
    mealContainer.setAttribute("class", "mealContainer");
    mealPlanFormContainer.appendChild(mealContainer);

    const createMealDisplayDiv = document.createElement("div");
    createMealDisplayDiv.setAttribute("class", "mealDisplay");

    // const dateDiv = document.createElement("div");
    // dateDiv.setAttribute("class", "date");
    // dateDiv.textContent = date;
    // mealContainer.appendChild(dateDiv);

    // const titleDiv = document.createElement("div");
    // titleDiv.setAttribute("class", "title");
    // titleDiv.textContent = title;
    // mealContainer.appendChild(titleDiv);

    const mealLabel = document.createElement("div");
    mealLabel.setAttribute("class", "mealLabel");
    mealLabel.textContent = meal;
    mealContainer.appendChild(mealLabel);

    if (typeof array[index] !== "undefined") {
      createMealDisplay(array, index, createMealDisplayDiv);
      mealContainer.appendChild(createMealDisplayDiv);
    } else if (typeof array[index] === "undefined") {
      createAddMealButton(id, meal, mealContainer);
    }
  };

  // Views all meals depending on condition
  const viewMeals = (array, mealArray, id) => {
    mealArray.forEach((meal, index) => {
      if (array.length === 0) {
        createNewMealContainers(meal, id);
      } else if (array.length !== 0) {
        viewExistingMeals(meal, array, index, id);
      }
    });
  };

  return {
    displayForm,
    closeForm,
    displayCreateNewMealButton,
    createMealParentContainer,
    createMealPlanDisplay,
    getDate,
    getTitle,
    getMeals,
    displayMealPlanAmount,
    edit,
    displayFavoriteMealPlanAmount,
    displayCompletedMealPlanAmount,
    removeMealPlanDisplay,
    removeMealParentContainer,
    viewMeals,
  };
};

export default DisplayMealPlan;
