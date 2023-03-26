import { MealPlanManager } from "./mealplanmanager";

const submitMealPlan = (() => {
  const newMealPlanManager = new MealPlanManager();
  const selectSubmitFormButton = document.querySelector("#submitFormButton");
  const date = document.querySelector("#date");
  const checkboxes = document.querySelectorAll(".checkbox");
  let mealArray = [];

  selectSubmitFormButton.addEventListener("click", (e) => {
    e.preventDefault();

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.value);
      } else if (checkbox.checked === false) {
        mealArray.push("");
      }
    });

    newMealPlanManager.pushToArray(
      date.value,
      mealArray[0],
      mealArray[1],
      mealArray[2]
    );
    console.log(
      `${date.value} ${mealArray[0]} ${mealArray[1]} ${mealArray[2]}`
    );
    mealArray = [];
    console.log(newMealPlanManager.mealPlanArray);
  });
})();

export { submitMealPlan };
