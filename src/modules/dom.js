import { format } from "date-fns";
import { MealPlanManager } from "./mealplanmanager";
import { DisplayMealPlan } from "./displayMealPlans";

const submitMealPlan = (() => {
  const selectSubmitFormButton = document.querySelector("#submitFormButton");
  const selectCreateNewMealButton = document.querySelector("#createNewMeal");
  const selectForm = document.querySelector("#form");
  const newMealPlanManager = new MealPlanManager();

  selectCreateNewMealButton.addEventListener("click", () => {
    selectForm.style.display = "flex";
    selectCreateNewMealButton.style.display = "none";
  });

  selectSubmitFormButton.addEventListener("click", (submit) => {
    const mealArray = [];
    const checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.value);
      } else if (checkbox.checked === false) {
        mealArray.push("");
      }
    });

    const dateValue = document.querySelector("#date").value;
    const date = format(new Date(dateValue), "PPP");
    const breakfast = mealArray[0];
    const lunch = mealArray[1];
    const dinner = mealArray[2];
    const newDisplayMealPlan = new DisplayMealPlan(
      date,
      breakfast,
      lunch,
      dinner
    );

    newMealPlanManager.pushToArray(date, breakfast, lunch, dinner);
    newDisplayMealPlan.display();
    newDisplayMealPlan.createRemoveButton();
    mealArray.length = 0;
    selectForm.style.display = "none";
    selectCreateNewMealButton.style.display = "flex";
    newMealPlanManager.remove();

    const selectMealPlans = document.querySelectorAll(".mealPlans");

    selectMealPlans.forEach((plan) => {
      plan.addEventListener("click", (event) => {
        if (event.target.className === "removeMealPlan") {
          const createRemoveButton = document.querySelector(".removeMealPlan");
          const valueOfRemoveButton = createRemoveButton.dataset.value;
          const parentElement = createRemoveButton.parentElement.id;

          if (valueOfRemoveButton === parentElement) {
            document.querySelector(`#${parentElement}`).remove();
            DisplayMealPlan.assignID();
            DisplayMealPlan.assignDataValue();
          }
        }
      });
    });
    submit.preventDefault();
  });
})();

export { submitMealPlan };
