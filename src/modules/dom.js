import { format } from "date-fns";
import { MealPlanManager } from "./mealplanmanager";
import { DisplayMealPlan } from "./displayMealPlans";

const mealPlanManager = (() => {
  const newMealPlanManager = new MealPlanManager();

  const submitMealPlan = (() => {
    const selectSubmitFormButton = document.querySelector("#submitFormButton");
    const selectCreateNewMealButton = document.querySelector("#createNewMeal");
    const selectForm = document.querySelector("#form");

    selectCreateNewMealButton.addEventListener("click", () => {
      selectForm.style.display = "flex";
      selectCreateNewMealButton.style.display = "none";
    });

    selectSubmitFormButton.addEventListener("click", (form) => {
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
      const date = format(new Date(`${dateValue}T12:00`), "PPP");
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
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      document.querySelector("#date").value = "";
      form.preventDefault();
    });
  })();

  const removeMealPlan = (() => {
    const selectContainer = document.querySelector("#container");

    selectContainer.addEventListener("click", (event) => {
      const selectRemoveButtonValue = event.target.dataset.value;
      const selectParentElement = event.target.parentElement.id;
      const arrayIndex = event.target.dataset.index;
      const mealPlanID = document.querySelector(
        `#index-${event.target.dataset.index}`
      );

      if (selectRemoveButtonValue === selectParentElement) {
        mealPlanID.remove();
        newMealPlanManager.removeFromArray(arrayIndex);
        DisplayMealPlan.assignID();
        DisplayMealPlan.assignIndexValues();
        DisplayMealPlan.assignDataValue();
        console.log(newMealPlanManager.mealPlanArray);
      }
    });
  })();
})();

export { mealPlanManager };
