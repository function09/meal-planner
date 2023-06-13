import { format } from "date-fns";

// Rename this when complete
const DisplayMealPlanFactory = () => {
  const mealPlanForm = document.querySelector("#mealPlanForm");
  const createNewMealButton = document.querySelector("#createNewMeal");
  const checkBoxes = document.querySelectorAll(".checkbox");
  const mealPlanFormContainer = document.querySelector(
    "#mealPlanFormContainer"
  );

  // ToDo: RENAME AND ALL ELEMENTS TO BE MORE FITTING BEFORE PUSHING TO REPOSITORY!!!!

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

    mealPlanForm.style.display = "none";
    createNewMealButton.style.display = "flex";

    date.value = "";

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
    if (mealPlanFormContainer.dataset.type === "favorites") {
      createNewMealButton.style.display = "none";
    } else {
      createNewMealButton.style.display = "flex";
    }
  };

  /* Displays meal plans
   *changes favorite button text to "unfavorite" if meal plan is favorited
   * if createNewMealButton present, inserts before it otherwise it inserts it at the end
   */
  const display = (date, index, favorite) => {
    const mealPlanDiv = document.createElement("div");
    mealPlanDiv.setAttribute("class", "mealPlans");

    const dateText = document.createElement("span");
    dateText.textContent = date;

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

    if (document.querySelector("#createNewMeal")) {
      mealPlanFormContainer.insertBefore(mealPlanDiv, createNewMealButton);
      mealPlanDiv.appendChild(dateText);
      mealPlanDiv.appendChild(viewButton);
      mealPlanDiv.appendChild(removeButton);
      mealPlanDiv.appendChild(editButton);
      mealPlanDiv.appendChild(favoriteButton);
    } else {
      mealPlanFormContainer.appendChild(mealPlanDiv);
      mealPlanDiv.appendChild(dateText);
      mealPlanDiv.appendChild(viewButton);
      mealPlanDiv.appendChild(removeButton);
      mealPlanDiv.appendChild(editButton);
      mealPlanDiv.appendChild(favoriteButton);
    }
    mealPlanFormContainer.appendChild(mealPlanForm);
  };

  // Selects date and formats it to be "day of the week, month, day and year"
  const getDate = () => {
    const dateValue = document.querySelector("#date").value;

    return format(new Date(`${dateValue}T12:00`), "PPPP");
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

  // Displays the length of the mealPlanArray
  const displayMealPlanAmount = (arrayLength) => {
    const updateMealPlanAmount = document.querySelector("#mealPlanAmount");

    updateMealPlanAmount.textContent = arrayLength;
    if (arrayLength === 0) {
      updateMealPlanAmount.textContent = "";
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

  /* Creates container elements for meals that:
   * display the date
   * display the meal type
   * display add meal button
   */
  const createNewMealContainers = (date, meal, id) => {
    const mealContainer = document.createElement("div");
    mealContainer.setAttribute("class", "mealContainer");
    mealPlanFormContainer.appendChild(mealContainer);

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute("class", "date");
    dateDiv.textContent = date;
    mealContainer.appendChild(dateDiv);

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
    mainDishDiv.setAttribute("class", "dish");
    sideDishDiv.textContent = array[index].sideDish;
    parentElement.appendChild(sideDishDiv);

    const drinkDiv = document.createElement("div");
    mainDishDiv.setAttribute("class", "dish");
    drinkDiv.textContent = array[index].drink;
    parentElement.appendChild(drinkDiv);

    const editMealButton = document.createElement("button");
    editMealButton.setAttribute("class", "editMeal");
    editMealButton.dataset.id = array[index].id;
    editMealButton.dataset.meal = array[index].meal;
    editMealButton.textContent = "edit";
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
  const viewExistingMeals = (date, meal, array, index, id) => {
    const mealContainer = document.createElement("div");
    mealContainer.setAttribute("class", "mealContainer");
    mealPlanFormContainer.appendChild(mealContainer);

    const createMealDisplayDiv = document.createElement("div");
    createMealDisplayDiv.setAttribute("class", "mealDisplay");

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute("class", "date");
    dateDiv.textContent = date;
    mealContainer.appendChild(dateDiv);

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
  const viewMeals = (array, date, mealArray, id) => {
    mealArray.forEach((meal, index) => {
      if (array.length === 0) {
        createNewMealContainers(date, meal, id);
      } else if (array.length !== 0) {
        viewExistingMeals(date, meal, array, index, id);
      }
    });
  };

  return {
    displayForm,
    closeForm,
    displayCreateNewMealButton,
    display,
    getDate,
    getMeals,
    displayMealPlanAmount,
    edit,
    displayFavoriteMealPlanAmount,
    removeMealPlanDisplay,
    viewMeals,
  };
};

export default DisplayMealPlanFactory;
