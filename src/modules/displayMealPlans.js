import { format } from "date-fns";

const checkBoxBooleans = [];

const DisplayFactory = () => {
  const selectForm = document.querySelector("#form");
  const selectCreateNewMealButton = document.querySelector("#createNewMeal");
  const selectCheckBoxes = document.querySelectorAll(".checkbox");

  const assignID = () => {
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

  // Assigns an index data value to remove and edit buttons
  const assignIndex = () => {
    const selectRemoveButtons = document.querySelectorAll(".removeMealPlan");
    const selectEditButtons = document.querySelectorAll(".editMealPlan");
    let removeButtonIndexValue = 0;
    let editButtonIndexValue = 0;

    selectRemoveButtons.forEach((button) => {
      if (removeButtonIndexValue === 0) {
        button.dataset.index = removeButtonIndexValue;
        removeButtonIndexValue++;
      } else {
        button.dataset.index = removeButtonIndexValue++;
      }
    });

    selectEditButtons.forEach((button) => {
      if (editButtonIndexValue === 0) {
        button.dataset.index = editButtonIndexValue;
        editButtonIndexValue++;
      } else {
        button.dataset.index = editButtonIndexValue++;
      }
    });
  };
  const displayForm = () => {
    selectForm.style.display = "flex";
    selectCreateNewMealButton.style.display = "none";
  };
  const closeForm = () => {
    const selectDate = document.querySelector("#date");

    selectForm.style.display = "none";
    selectCreateNewMealButton.style.display = "flex";

    selectDate.value = "";

    selectCheckBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  const displayMealPlan = (date) => {
    const selectContainer = document.querySelector("#container");

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mealPlans");

    const createSpan = document.createElement("span");
    createSpan.textContent = date;

    const createRemoveButton = document.createElement("button");
    createRemoveButton.textContent = "Remove";
    createRemoveButton.setAttribute("class", "removeMealPlan");

    const createEditButton = document.createElement("button");
    createEditButton.textContent = "Edit";
    createEditButton.setAttribute("class", "editMealPlan");

    selectContainer.insertBefore(createDiv, selectCreateNewMealButton);
    createDiv.appendChild(createSpan);
    createDiv.appendChild(createRemoveButton);
    createDiv.appendChild(createEditButton);
    assignIndex();
    assignID();
  };
  const getDate = () => {
    const dateValue = document.querySelector("#date").value;

    return format(new Date(`${dateValue}T12:00`), "PPPP");
  };
  const getMeals = () => {
    const mealArray = [];
    const checkBoxChecked = [];

    selectCheckBoxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.value);
        checkBoxChecked.push(checkbox.checked);
      } else {
        mealArray.push("");
        checkBoxChecked.push(checkbox.checked);
      }
    });
    checkBoxBooleans.push(checkBoxChecked);
    console.log(checkBoxBooleans);
    return mealArray;
  };
  const remove = (indexValue) => {
    const getMealPlanID = document.querySelector(`#index-${indexValue}`);
    getMealPlanID.remove();
  };

  const edit = (selection) => {
    const parent = selection.parentElement;
    const { index } = selection.dataset;
    const createInput = document.createElement("input");

    selectCreateNewMealButton.style.display = "none";

    createInput.type = "date";
    createInput.setAttribute("id", "date");

    parent.firstElementChild.remove();
    parent.prepend(createInput);

    selection.textContent = "Save";
    selection.className = "saveMealPlan";

    const selectFirstChild = parent.firstElementChild;
    const createFieldSet = document.createElement("fieldset");

    createFieldSet.setAttribute("class", "newFieldSet");

    parent.appendChild(createFieldSet);
    selectFirstChild.after(createFieldSet);

    const checkBoxValues = ["Breakfast", "Lunch", "Dinner"];

    checkBoxValues.forEach((value) => {
      const createCheckbox = document.createElement("input");
      const createLabel = document.createElement("label");

      createCheckbox.type = "checkbox";
      createCheckbox.setAttribute("id", value.toLocaleLowerCase());
      createCheckbox.setAttribute("class", "newCheckbox");
      createCheckbox.value = value;

      createLabel.setAttribute("for", value);
      createLabel.setAttribute("class", "label");

      createLabel.textContent = value;

      createFieldSet.appendChild(createLabel);
      createFieldSet.appendChild(createCheckbox);
    });

    const breakFastCheckBox = document.querySelector("#breakfast");
    const lunchCheckBox = document.querySelector("#lunch");
    const dinnerCheckBox = document.querySelector("#dinner");

    breakFastCheckBox.checked = checkBoxBooleans[index][0];
    lunchCheckBox.checked = checkBoxBooleans[index][1];
    dinnerCheckBox.checked = checkBoxBooleans[index][2];
  };
  const saveEdit = (selection) => {
    const parent = selection.parentElement;
    const arrayIndex = selection.dataset.index;
    const selectFieldSet = document.querySelector(".newFieldSet");
    const createSpan = document.createElement("span");
    const newMealArray = [];
    const checkBoxChecked = [];

    createSpan.textContent = getDate();
    const selectNewCheckBoxes = document.querySelectorAll(".newCheckbox");

    selectNewCheckBoxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        newMealArray.push(checkbox.value);
        checkBoxChecked.push(checkbox.checked);
      } else if (checkbox.checked === false) {
        newMealArray.push("");
        checkBoxChecked.push(checkbox.checked);
      }
    });

    parent.firstElementChild.remove();
    parent.prepend(createSpan);

    selection.textContent = "Edit";
    selection.className = "editMealPlan";

    selectFieldSet.remove();
    checkBoxBooleans.splice(arrayIndex, 1, checkBoxChecked);

    selectCreateNewMealButton.style.display = "flex";

    return newMealArray;
  };
  return {
    assignID,
    assignIndex,
    displayForm,
    closeForm,
    displayMealPlan,
    getDate,
    getMeals,
    remove,
    edit,
    saveEdit,
  };
};

export { DisplayFactory };
