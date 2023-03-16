const writeNewMealPlan = () => {
  const selectCreateNewMeal = document.querySelector("#createNewMeal");
  const selectMealForm = document.querySelector("#mealForm");

  selectCreateNewMeal.addEventListener("click", () => {
    selectMealForm.style.display = "flex";
    selectCreateNewMeal.style.display = "none";
  });
};

const submitNewMealPlan = () => {
  const selectSubmitFormButton = document.querySelector("#submitFormButton");
  const selectCreateNewMeal = document.querySelector("#createNewMeal");
  const selectMealForm = document.querySelector("#mealForm");
  const selectDate = document.querySelector("#date");
  const selectCheckBox = document.querySelectorAll(".checkbox");

  selectSubmitFormButton.addEventListener("click", (e) => {
    selectCreateNewMeal.style.display = "flex";
    selectMealForm.style.display = "none";
    selectDate.value = "";
    selectCheckBox.forEach((checkbox) => {
      checkbox.checked = false;
    });
    e.preventDefault();
  });
};

export { writeNewMealPlan, submitNewMealPlan };
