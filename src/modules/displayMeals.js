const DisplayMeals = () => {
  const createMealForm = (mealContainer) => {
    // const selectAllMeals = document.querySelectorAll(".meal");
    const dishArray = ["Main dish", "Side dish", "Drink"];

    const createForm = document.createElement("form");
    createForm.setAttribute("class", "mealForm");
    mealContainer.appendChild(createForm);

    dishArray.forEach((index) => {
      const createInput = document.createElement("input");
      createInput.placeholder = index;
      createForm.appendChild(createInput);
    });

    const createSubmitMealButton = document.createElement("button");
    createSubmitMealButton.type = "submit";
    createSubmitMealButton.textContent = "Submit";
    createForm.appendChild(createSubmitMealButton);
  };

  const assignButtonMealData = (mealArray) => {
    document.querySelectorAll(".submitMeal").forEach((button, index) => {
      button.dataset.meal = mealArray[index];
    });
  };

  const assignButtonMealID = (id) => {
    document.querySelectorAll(".submitMeal").forEach((button) => {
      button.dataset.mealPlanId = id;
    });
  };

  const returnInputData = (parent) => {
    const selectedMeals = [];
    parent.querySelectorAll("input").forEach((input) => {
      selectedMeals.push(input.value);
    });
    return selectedMeals;
  };

  const getDishes = (form) => {
    const dishArray = [];
    const selectDishInputs = form.querySelectorAll("input");

    selectDishInputs.forEach((input) => {
      dishArray.push(input.value);
    });

    return dishArray;
  };

  const displayMeal = (dishArray, parentElement, mealData, mealId) => {
    dishArray.forEach((dish) => {
      const createDishDiv = document.createElement("div");
      createDishDiv.setAttribute("class", "dish");
      createDishDiv.textContent = dish;
      parentElement.appendChild(createDishDiv);
    });
    const createEditMealButton = document.createElement("button");
    createEditMealButton.setAttribute("class", "editMeal");
    createEditMealButton.dataset.meal = mealData;
    createEditMealButton.dataset.mealPlanId = mealId;
    createEditMealButton.textContent = "edit";
    parentElement.appendChild(createEditMealButton);
  };

  const editMeal = () => {
    createMealForm();
  };
  return {
    createMealForm,
    assignButtonMealData,
    assignButtonMealID,
    returnInputData,
    getDishes,
    displayMeal,
    editMeal,
  };
};

export { DisplayMeals };
