const DisplayMeals = () => {
  // Creates form to save and submit dishes/drinks
  const createMealForm = (mealContainer, meal, id) => {
    const dishArray = ["Main dish", "Side dish", "Drink"];

    const mealForm = document.createElement("form");
    mealForm.setAttribute("class", "mealForm");
    mealContainer.appendChild(mealForm);

    dishArray.forEach((index) => {
      const input = document.createElement("input");
      input.placeholder = index;
      mealForm.appendChild(input);
    });

    const SubmitMealButton = document.createElement("button");
    SubmitMealButton.type = "submit";
    SubmitMealButton.setAttribute("class", "submitMeal");
    SubmitMealButton.dataset.id = id;
    SubmitMealButton.dataset.meal = meal;
    SubmitMealButton.textContent = "Submit";
    mealForm.appendChild(SubmitMealButton);
  };

  // Returns an array containing all input values from meal form
  const returnInputData = (parent) => {
    const selectedMeals = [];

    parent.querySelectorAll("input").forEach((input) => {
      selectedMeals.push(input.value);
    });

    return selectedMeals;
  };

  // Returns all dishes/drink values from inputs
  const getDishes = (form) => {
    const dishArray = [];
    const selectDishInputs = form.querySelectorAll("input");

    selectDishInputs.forEach((input) => {
      dishArray.push(input.value);
    });

    return dishArray;
  };

  // Displays dishes/drink after submitting form
  const displayMeal = (dishArray, parentContainer, mealData, id) => {
    const createMealDisplay = document.createElement("div");
    createMealDisplay.setAttribute("class", "mealDisplay");
    parentContainer.appendChild(createMealDisplay);

    dishArray.forEach((dish) => {
      const createDishDiv = document.createElement("div");
      createDishDiv.setAttribute("class", "dish");
      createDishDiv.textContent = dish;
      createMealDisplay.appendChild(createDishDiv);
    });
    const createEditMealButton = document.createElement("button");
    createEditMealButton.setAttribute("class", "editMeal");
    createEditMealButton.dataset.id = id;
    createEditMealButton.dataset.meal = mealData;
    createEditMealButton.textContent = "edit";
    createMealDisplay.appendChild(createEditMealButton);
  };

  // Displays meal form
  const editMeal = () => {
    createMealForm();
  };

  const removeMealDisplay = () => {
    document.querySelectorAll(".mealContainer").forEach((meal) => {
      meal.remove();
    });
  };
  return {
    createMealForm,
    returnInputData,
    getDishes,
    displayMeal,
    editMeal,
    removeMealDisplay,
  };
};

export default DisplayMeals;
