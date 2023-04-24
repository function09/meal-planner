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
    const selectRemoveMealPlanButtons =
      document.querySelectorAll(".removeMealPlan");
    const selectEditMealPlanButtons =
      document.querySelectorAll(".editMealPlan");
    let removeButtonIndexValue = 0;
    let editButtonIndexValue = 0;

    selectRemoveMealPlanButtons.forEach((plan) => {
      if (removeButtonIndexValue === 0) {
        plan.dataset.index = removeButtonIndexValue;
        removeButtonIndexValue++;
      } else {
        plan.dataset.index = removeButtonIndexValue++;
      }
    });

    selectEditMealPlanButtons.forEach((plan) => {
      if (editButtonIndexValue === 0) {
        plan.dataset.index = editButtonIndexValue;
        editButtonIndexValue++;
      } else {
        plan.dataset.index = editButtonIndexValue++;
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

  constructor(date) {
    this.date = date;
  }

  display() {
    const selectContainer = document.querySelector("#container");
    const selectCreateNewMealButton = document.querySelector("#createNewMeal");

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mealPlans");

    const createSpan = document.createElement("span");
    createSpan.textContent = `${this.date}`;

    selectContainer.insertBefore(createDiv, selectCreateNewMealButton);
    createDiv.appendChild(createSpan);

    DisplayMealPlan.assignID();
  }

  createRemoveButton() {
    const selectContainers = document.querySelectorAll(".mealPlans");

    const createRemoveButton = document.createElement("button");
    createRemoveButton.setAttribute("class", "removeMealPlan");
    createRemoveButton.textContent = "Remove";

    selectContainers.forEach((container) => {
      container.appendChild(createRemoveButton);
      DisplayMealPlan.assignDataValue();
      DisplayMealPlan.assignIndexValues();
    });
  }

  createEditButton() {
    const selectContainers = document.querySelectorAll(".mealPlans");

    const createEditButton = document.createElement("button");
    createEditButton.setAttribute("class", "editMealPlan");
    createEditButton.textContent = "Edit";

    selectContainers.forEach((container) => {
      container.appendChild(createEditButton);
      DisplayMealPlan.assignIndexValues();
    });
  }
}

export { DisplayMealPlan };
