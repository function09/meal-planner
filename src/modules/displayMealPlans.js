class DisplayMealPlan {
  static assignID = () => {
    const selectMealPlans = document.querySelectorAll(".mealPlans");
    let IDValue = 0;

    selectMealPlans.forEach((plan) => {
      if (IDValue === 0) {
        plan.setAttribute("id", `index-${IDValue}`);
        IDValue++;
      } else {
        plan.setAttribute("id", `index-${IDValue++}`);
      }
    });
  };

  static assignIndexValues = () => {
    const selectMealPlans = document.querySelectorAll(".mealPlans");
    let indexValue = 0;

    selectMealPlans.forEach((plan) => {
      if (indexValue === 0) {
        plan.dataset.index = indexValue;
        indexValue++;
      } else {
        plan.dataset.index = indexValue++;
      }
    });
  };

  static assignDataValue = () => {
    const selectRemoveMealPlanButtons =
      document.querySelectorAll(".removeMealPlan");
    let dataValue = 0;

    selectRemoveMealPlanButtons.forEach((button) => {
      if (dataValue === 0) {
        button.dataset.value = `index-${dataValue}`;
        dataValue++;
      } else {
        button.dataset.value = `index-${dataValue++}`;
      }
    });
  };

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

    const createEditButton = document.createElement("button");
    createEditButton.setAttribute("class", "editMealPlan");

    createDiv.textContent = `${this.date} ${this.breakfast} ${this.lunch} ${this.dinner}`;
    selectContainer.insertBefore(createDiv, selectCreateNewMealButton);

    createEditButton.textContent = "Edit";
    createDiv.appendChild(createEditButton);
    DisplayMealPlan.assignID();
    DisplayMealPlan.assignIndexValues();
  }

  createRemoveButton() {
    const selectContainers = document.querySelectorAll(".mealPlans");

    const createRemoveButton = document.createElement("button");
    createRemoveButton.setAttribute("class", "removeMealPlan");
    createRemoveButton.textContent = "Remove";

    selectContainers.forEach((container) => {
      container.appendChild(createRemoveButton);
      DisplayMealPlan.assignDataValue();
    });
  }
}

export { DisplayMealPlan };
