const DisplayMeals = () => {
  const createMealForm = (meal) => {
    const createForm = document.createElement("form");
    createForm.setAttribute("class", "mealForm");
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
    createSubmitMealButton.setAttribute("class", "submitMeal");
    createSubmitMealButton.setAttribute("type", "submit");
    createSubmitMealButton.textContent = "Submit";
    createForm.appendChild(createSubmitMealButton);
  };
  return { createMealForm };
};

export { DisplayMeals };
