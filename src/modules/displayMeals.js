const DisplayMeals = () => {
  const createMealForm = (meal, element) => {
    const createForm = document.createElement("form");
    createForm.setAttribute("id", `${element}Meal`);
    meal.appendChild(createForm);

    const dishArray = ["Main dish", "Side dish", "Drink"];

    dishArray.forEach((input) => {
      const createInputs = document.createElement("input");
      createInputs.setAttribute("type", "text");
      createInputs.setAttribute("class", "dish");
      createInputs.placeholder = input;
      createForm.appendChild(createInputs);
    });

    const createSubmitMealButton = document.createElement("button");
    createSubmitMealButton.setAttribute("class", element);
    createSubmitMealButton.setAttribute("type", "submit");
    createSubmitMealButton.textContent = "Submit";
    createForm.appendChild(createSubmitMealButton);
  };

  const getDishes = (meal) => {
    const dishArray = [];
    const selectDishInputs = document.querySelectorAll(`#${meal} input`);

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

  return { createMealForm, getDishes, displayMeal };
};

export { DisplayMeals };
