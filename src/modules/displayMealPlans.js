import { format } from "date-fns";

const checkBoxBooleans = [];

const DisplayFactory = () => {
  const selectForm = document.querySelector("#form");
  const selectCreateNewMealButton = document.querySelector("#createNewMeal");
  const selectCheckBoxes = document.querySelectorAll(".checkbox");
  const selectContainer = document.querySelector("#container");
  // Check and see if this even is necessary
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
  // RENAME ALL ELEMENTS TO BE MORE FITTING BEFORE COMITTING!!!! AND REFACTOR assignIndex() TO USE LESS CODE
  // Assigns an index data value to remove and edit buttons DOWNSIZE THIS BEFORE PUSHING
  const assignIndex = () => {
    // const selectMealPlans = document.querySelectorAll(".mealPlans>button");
    // let value = 0;
    // selectMealPlans.forEach((plan) => {
    //   if (value === 0) {
    //     plan.dataset.index = value;
    //     value++;
    //   } else {
    //     plan.dataset.index = value++;
    //   }
    // });
    // const selectRemoveButtons = document.querySelectorAll(".removeMealPlan");
    // const selectEditButtons = document.querySelectorAll(".editMealPlan");
    // const selectFavoriteButtons = document.querySelectorAll(".favorite");
    // let removeButtonIndexValue = 0;
    // let editButtonIndexValue = 0;
    // // let favoriteButtonIndexValue = 0;
    // selectRemoveButtons.forEach((button) => {
    //   if (removeButtonIndexValue === 0) {
    //     button.dataset.index = removeButtonIndexValue;
    //     removeButtonIndexValue++;
    //   } else {
    //     button.dataset.index = removeButtonIndexValue++;
    //   }
    // });
    // selectEditButtons.forEach((button) => {
    //   if (editButtonIndexValue === 0) {
    //     button.dataset.index = editButtonIndexValue;
    //     editButtonIndexValue++;
    //   } else {
    //     button.dataset.index = editButtonIndexValue++;
    //   }
    // });
    // selectFavoriteButtons.forEach((button) => {
    //   button.dataset.index = button.previousElementSibling.dataset.index;
    // if (favoriteButtonIndexValue === 0) {
    //   button.dataset.index = favoriteButtonIndexValue;
    //   favoriteButtonIndexValue++;
    // } else {
    //   button.dataset.index = favoriteButtonIndexValue++;
    // });
    // };
    // const selectMealPlanButtons = document.querySelectorAll(".mealPlans");
    // let indexValue = 0;
    // selectMealPlanButtons.forEach((button) => {
    //   if (indexValue === 0) {
    //     button.firstElementChild.dataset.value = indexValue;
    //     indexValue++;
    //   } else {
    //     button.firstElementChild.dataset.value = indexValue;
    //   }
    // });
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
  const displayMealPlan = (date, index) => {
    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "mealPlans");

    const createSpan = document.createElement("span");
    createSpan.textContent = date;

    const createRemoveButton = document.createElement("button");
    createRemoveButton.textContent = "Remove";
    createRemoveButton.setAttribute("class", "removeMealPlan");
    createRemoveButton.dataset.id = index;

    const createEditButton = document.createElement("button");
    createEditButton.textContent = "Edit";
    createEditButton.setAttribute("class", "editMealPlan");
    createEditButton.dataset.id = index;

    const createFavoriteButton = document.createElement("button");
    createFavoriteButton.textContent = "Favorite";
    createFavoriteButton.setAttribute("class", "favorite");
    createFavoriteButton.dataset.id = index;

    if (document.querySelector("#createNewMeal")) {
      selectContainer.insertBefore(createDiv, selectCreateNewMealButton);
      createDiv.appendChild(createSpan);
      createDiv.appendChild(createRemoveButton);
      createDiv.appendChild(createEditButton);
      createDiv.appendChild(createFavoriteButton);
      assignIndex();
      assignID();
    } else {
      selectContainer.appendChild(createDiv);
      createDiv.appendChild(createSpan);
      createDiv.appendChild(createRemoveButton);
      createDiv.appendChild(createEditButton);
      createDiv.appendChild(createFavoriteButton);
      assignIndex();
      assignID();
    }
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
    return mealArray;
  };
  const remove = (ID) => {
    const getMealPlanID = document.querySelector(`#index-${ID}`);

    getMealPlanID.remove();
  };
  // Hide create new meal plan button when edit is clicked
  const edit = (selection) => {
    const parent = selection.parentElement;
    const { index } = selection.dataset;
    const createInput = document.createElement("input");

    if (!document.querySelector("#createNewMeal") === null) {
      selectCreateNewMealButton.style.display = "none";
    }

    createInput.type = "date";
    createInput.setAttribute("id", "date");
    createInput.required = true; // This doesn't seem to work

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

    if (!document.querySelector("#createNewMeal") === null) {
      selectCreateNewMealButton.style.display = "flex";
    }

    return newMealArray;
  };

  const favoriteMealPlan = (selection) => {
    selection.textContent = "Unfavorite";
    selection.className = "unfavorite";
    // console.log(document.querySelector("#createNewMeal") === null);
    // while (selectContainer.firstChild) {
    //   selectContainer.removeChild(selectContainer.firstChild);
    // }
    // console.log(document.querySelector("#createNewMeal") === null);
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
    favoriteMealPlan,
  };
};

export { DisplayFactory };
