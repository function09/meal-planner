import { MealPlanManager } from "./mealplanmanager";

const submitMealPlan = (() => {
  const newMealPlanManager = new MealPlanManager();
  const selectSubmitFormButton = document.querySelector("#submitFormButton");

  selectSubmitFormButton.addEventListener("click", (e) => {
    const date = document.querySelector("#date").value;
    e.preventDefault();
    newMealPlanManager.pushToArray(date);
    console.log(newMealPlanManager.mealPlanArray);
  });
})();

export { submitMealPlan };
