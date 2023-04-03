import { format } from "date-fns";
import { MealPlanManager } from "./mealplanmanager";

class DisplayMealPlan {
  static displayValue = 0;

  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.value = `index-${DisplayMealPlan.displayValue++}`;
  }

  display() {
    const selectContainer = document.querySelector("#container");
    const selectCreateNewMealButton = document.querySelector("#createNewMeal");

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mealPlans");
    createDiv.setAttribute("id", `${this.value}`);

    const createEditButton = document.createElement("button");
    createEditButton.setAttribute("class", "editMealPlan");

    createDiv.textContent = `${this.date} ${this.breakfast} ${this.lunch} ${this.dinner}`;
    selectContainer.insertBefore(createDiv, selectCreateNewMealButton);

    createEditButton.textContent = "Edit";
    createDiv.appendChild(createEditButton);
  }

  remove() {
    const selectContainers = document.querySelectorAll(".mealPlans");

    const createRemoveButton = document.createElement("button");
    createRemoveButton.setAttribute("class", "removeMealPlan");
    createRemoveButton.dataset.displayValue = this.value;
    createRemoveButton.textContent = "Remove";

    selectContainers.forEach((container) => {
      container.appendChild(createRemoveButton);
    });

    createRemoveButton.addEventListener("click", () => {
      const valueOfRemoveButton = createRemoveButton.dataset.displayValue;
      const parentElement = createRemoveButton.parentElement.id;

      if (valueOfRemoveButton === parentElement) {
        document.querySelector(`#${parentElement}`).remove();
      }
    });
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
    newDisplayMealPlan.remove(newMealPlanManager.mealPlanArray);
    mealArray.length = 0;
    selectForm.style.display = "none";
    selectCreateNewMealButton.style.display = "flex";
    newMealPlanManager.remove(newMealPlanManager.mealPlanArray);
    e.preventDefault();
  });
})();

export { submitMealPlan };
