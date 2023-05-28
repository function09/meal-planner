const DisplayMeals = () => {
  const createMealForm = (meal) => {
    const createForm = document.createElement("form");
    createForm.setAttribute("class", "mealForm");
    meal.appendChild(createForm);

    const createInput = ["Main dish", "Side dish", "Drink"];

    createInput.forEach((input) => {
      const createInputs = document.createElement("input");
      createInputs.placeholder = input;
      createForm.appendChild(createInputs);
    });
    const createSubmitMealButton = document.createElement("button");
    createSubmitMealButton.setAttribute("class", "submitMeal");
    createSubmitMealButton.textContent = "Submit";
    createForm.appendChild(createSubmitMealButton);
  };
  return { createMealForm };
};

export { DisplayMeals };
