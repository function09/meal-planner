const DisplayMeals = () => {
  const createMealForm = (mealArray) => {
    const selectAllMeals = document.querySelectorAll(".meal");
    const createForm = document.createElement("form");

    createForm.setAttribute("class", "mealForm");

    selectAllMeals.forEach((meal) => {
      meal.appendChild(createForm);
    });

    const dishArray = ["Main dish", "Side dish", "Drink"];

    dishArray.forEach((input) => {
      const createInputs = document.createElement("input");
      createInputs.setAttribute("type", "text");
      createInputs.setAttribute("class", "dish");
      createInputs.placeholder = input;
      createForm.appendChild(createInputs);
    });

    const createSubmitMealButton = document.createElement("button");
    createSubmitMealButton.setAttribute("type", "submit");
    createSubmitMealButton.setAttribute("class", "submitMeal");
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

  const displayMeal = (dishArray, parentElement) => {
    dishArray.forEach((dish) => {
      const createDishDiv = document.createElement("div");
      createDishDiv.setAttribute("class", "dish");
      createDishDiv.textContent = dish;
      parentElement.appendChild(createDishDiv);
    });
    const createEditMealButton = document.createElement("button");
    createEditMealButton.setAttribute("class", "editMeal");
    createEditMealButton.textContent = "edit";
    parentElement.appendChild(createEditMealButton);
  };

  const editMeal = (parent, buttonClass) => {
    displayMeal.createForm(parent, buttonClass);
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
