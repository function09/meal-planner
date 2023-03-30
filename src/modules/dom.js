import { format } from "date-fns";
import { MealPlanManager } from "./mealplanmanager";

class DisplayMealPlan {
  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
  }

  display() {
    const selectContainer = document.querySelector("#container");
    const selectCreateNewMealButton = document.querySelector("#createNewMeal");

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mealPlans");

    const createRemoveButton = document.createElement("button");
    createRemoveButton.setAttribute("id", "removeMealPlan");

    const createEditButton = document.createElement("button");
    createEditButton.setAttribute("id", "editMealPlan");

    createDiv.textContent = `${this.date} ${this.breakfast} ${this.lunch} ${this.dinner}`;
    selectContainer.insertBefore(createDiv, selectCreateNewMealButton);

    createRemoveButton.textContent = "Remove";
    createDiv.appendChild(createRemoveButton);

    createEditButton.textContent = "Edit";
    createDiv.appendChild(createEditButton);
  }
}

const submitMealPlan = (() => {
  const selectSubmitFormButton = document.querySelector("#submitFormButton");
  const selectCreateNewMealButton = document.querySelector("#createNewMeal");
  const selectForm = document.querySelector("#form");
  const newMealPlanManager = new MealPlanManager();

  selectCreateNewMealButton.addEventListener("click", () => {
    selectForm.style.display = "flex";
    selectCreateNewMealButton.style.display = "none";
  });

  selectSubmitFormButton.addEventListener("click", (e) => {
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
    mealArray.length = 0;
    selectForm.style.display = "none";
    selectCreateNewMealButton.style.display = "flex";
    console.log(newMealPlanManager.mealPlanArray);
    e.preventDefault();
  });
})();

export { submitMealPlan };
