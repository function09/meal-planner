import { format } from "date-fns";

// class DisplayMealPlan {
//   static assignID = () => {
//     const selectMealPlans = document.querySelectorAll(".mealPlans");
//     let IDValue = 0;

//     selectMealPlans.forEach((plan) => {
//       if (IDValue === 0) {
//         plan.setAttribute("id", `index-${IDValue}`);
//         IDValue++;
//       } else {
//         plan.setAttribute("id", `index-${IDValue++}`);
//       }
//     });
//   };

//   static assignIndexValues = () => {
//     const selectRemoveMealPlanButtons =
//       document.querySelectorAll(".removeMealPlan");
//     const selectEditMealPlanButtons =
//       document.querySelectorAll(".editMealPlan");
//     let removeButtonIndexValue = 0;
//     let editButtonIndexValue = 0;

//     selectRemoveMealPlanButtons.forEach((plan) => {
//       if (removeButtonIndexValue === 0) {
//         plan.dataset.index = removeButtonIndexValue;
//         removeButtonIndexValue++;
//       } else {
//         plan.dataset.index = removeButtonIndexValue++;
//       }
//     });

//     selectEditMealPlanButtons.forEach((plan) => {
//       if (editButtonIndexValue === 0) {
//         plan.dataset.index = editButtonIndexValue;
//         editButtonIndexValue++;
//       } else {
//         plan.dataset.index = editButtonIndexValue++;
//       }
//     });
//   };

//   static assignDataValue = () => {
//     const selectRemoveMealPlanButtons =
//       document.querySelectorAll(".removeMealPlan");
//     let dataValue = 0;

//     selectRemoveMealPlanButtons.forEach((button) => {
//       if (dataValue === 0) {
//         button.dataset.value = `index-${dataValue}`;
//         dataValue++;
//       } else {
//         button.dataset.value = `index-${dataValue++}`;
//       }
//     });
//   };

//   constructor(date) {
//     this.date = date;
//   }

//   display() {
//     const selectContainer = document.querySelector("#container");
//     const selectCreateNewMealButton = document.querySelector("#createNewMeal");

//     const createDiv = document.createElement("div");
//     createDiv.setAttribute("class", "mealPlans");

//     const createSpan = document.createElement("span");
//     createSpan.textContent = `${this.date}`;

//     selectContainer.insertBefore(createDiv, selectCreateNewMealButton);
//     createDiv.appendChild(createSpan);

//     DisplayMealPlan.assignID();
//   }

//   updateNotifications(arrayLength) {
//     const selectMealPlansNotification = document.querySelector(
//       "#mealPlansNotification"
//     );

//     selectMealPlansNotification.textContent = arrayLength;
//   }

//   createRemoveButton() {
//     const selectContainers = document.querySelectorAll(".mealPlans");

//     const createRemoveButton = document.createElement("button");
//     createRemoveButton.setAttribute("class", "removeMealPlan");
//     createRemoveButton.textContent = "Remove";

//     selectContainers.forEach((container) => {
//       container.appendChild(createRemoveButton);
//       DisplayMealPlan.assignDataValue();
//       DisplayMealPlan.assignIndexValues();
//     });
//   }

//   createEditButton() {
//     const selectContainers = document.querySelectorAll(".mealPlans");

//     const createEditButton = document.createElement("button");
//     createEditButton.setAttribute("class", "editMealPlan");
//     createEditButton.textContent = "Edit";

//     selectContainers.forEach((container) => {
//       container.appendChild(createEditButton);
//       DisplayMealPlan.assignIndexValues();
//     });
//   }
// }
const DisplayFactory = () => {
  const selectForm = document.querySelector("#form");
  const selectCreateNewMealButton = document.querySelector("#createNewMeal");
  const selectCheckboxes = document.querySelectorAll(".checkbox");

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

    selectCheckboxes.forEach((checkbox) => {
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

    selectCheckboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.value);
      } else {
        mealArray.push("");
      }
    });
    return mealArray;
  };
  const remove = (indexValue) => {
    const getMealPlanID = document.querySelector(`#index-${indexValue}`);
    getMealPlanID.remove();
  };

  const edit = (selection) => {
    const parent = selection.parentElement;
    const span = parent.firstElementChild.textContent;
    const createInput = document.createElement("input");

    createInput.type = "date";
    createInput.setAttribute("id", "date");
    // createInput.value = span;
    // createInput.onfocus = () => {
    //   createInput.type = "date";
    //   createInput.required = true;
    // };

    parent.firstElementChild.remove();
    parent.prepend(createInput);

    selection.textContent = "Save";
    selection.className = "saveMealPlan";
  };
  const saveEdit = (selection) => {
    const parent = selection.parentElement;

    const createSpan = document.createElement("span");
    createSpan.textContent = getDate();

    parent.firstElementChild.remove();
    parent.prepend(createSpan);

    selection.textContent = "Edit";
    selection.className = "editMealPlan";
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
