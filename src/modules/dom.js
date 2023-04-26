import { format } from "date-fns";
import { MealPlanManager } from "./mealplanmanager";
import { DisplayMealPlan } from "./displayMealPlans";

// const mealPlanManager = (() => {
//   const newMealPlanManager = new MealPlanManager();

//   const submitMealPlan = (() => {
//     const selectSubmitFormButton = document.querySelector("#submitFormButton");
//     const selectCreateNewMealButton = document.querySelector("#createNewMeal");
//     const selectForm = document.querySelector("#form");
//     const closeForm = document.querySelector("#close");

//     selectCreateNewMealButton.addEventListener("click", () => {
//       selectForm.style.display = "flex";
//       selectCreateNewMealButton.style.display = "none";
//     });

//     closeForm.addEventListener("click", () => {
//       selectForm.style.display = "none";
//       selectCreateNewMealButton.style.display = "flex";
//     });

//     selectSubmitFormButton.addEventListener("click", (form) => {
//       const mealArray = [];
//       const checkboxes = document.querySelectorAll(".checkbox");

//       checkboxes.forEach((checkbox) => {
//         if (checkbox.checked === true) {
//           mealArray.push(checkbox.value);
//         } else if (checkbox.checked === false) {
//           mealArray.push("");
//         }
//       });

//       const dateValue = document.querySelector("#date").value;
//       const date = format(new Date(`${dateValue}T12:00`), "PPPP");
//       const breakfast = mealArray[0];
//       const lunch = mealArray[1];
//       const dinner = mealArray[2];
//       const newDisplayMealPlan = new DisplayMealPlan(date);

//       newMealPlanManager.pushToArray(date, breakfast, lunch, dinner);
//       newDisplayMealPlan.display();

//       const mealPlanArrayLength = newMealPlanManager.getMealPlanArrayLength();
//       newDisplayMealPlan.updateNotifications(mealPlanArrayLength);

//       newDisplayMealPlan.createEditButton();
//       newDisplayMealPlan.createRemoveButton();
//       mealArray.length = 0;
//       selectForm.style.display = "none";
//       selectCreateNewMealButton.style.display = "flex";
//       checkboxes.forEach((checkbox) => {
//         checkbox.checked = false;
//       });
//       document.querySelector("#date").value = "";
//       form.preventDefault();
//     });
//   })();

//   const removeMealPlan = (() => {
//     const selectContainer = document.querySelector("#container");

//     selectContainer.addEventListener("click", (event) => {
//       const selectRemoveButtonValue = event.target.dataset.value;
//       const selectParentElement = event.target.parentElement.id;
//       const arrayIndex = event.target.dataset.index;
//       const mealPlanID = document.querySelector(
//         `#index-${event.target.dataset.index}`
//       );
//       if (event.target.className === "removeMealPlan") {
//         if (selectRemoveButtonValue === selectParentElement) {
//           mealPlanID.remove();
//           newMealPlanManager.removeFromArray(arrayIndex);
//           DisplayMealPlan.assignID();
//           DisplayMealPlan.assignIndexValues();
//           DisplayMealPlan.assignDataValue();
//         }
//       } else if (event.target.className === "editMealPlan") {
//         const selection = event.target;
//         const parent = selection.parentElement;
//         const span = selection.parentElement.firstElementChild.textContent;
//         const createInput = document.createElement("input");

//         createInput.type = "text";
//         createInput.value = span;
//         createInput.onfocus = () => {
//           createInput.type = "date";
//           createInput.required = true;
//         };
//         parent.insertBefore(createInput, event.target);
//         parent.firstElementChild.remove();
//         selection.textContent = "Save";
//         selection.className = "saveMealPlan";
//       } else if (event.target.className === "saveMealPlan") {
//         const selection = event.target;
//         const parent = selection.parentElement;
//         const selectInput = selection.parentElement.firstElementChild;
//         const createSpan = document.createElement("span");
//         const date = format(new Date(`${selectInput.value}T12:00`), "PPPP");

//         createSpan.textContent = date;
//         parent.insertBefore(createSpan, event.target);
//         selectInput.remove();
//         selection.textContent = "Edit";
//         selection.className = "editMealPlan";
//         newMealPlanManager.editMealPlan(arrayIndex, date);
//       }
//     });
//   })();
// })();

// export { mealPlanManager };
const DOM = (() => {
  const selectContainer = document.querySelector("#container");
  const newMealPlanManager = new MealPlanManager();

  selectContainer.addEventListener("click", (event) => {
    const selectForm = document.querySelector("#form");
    const selectCreateNewMealButton = document.querySelector("#createNewMeal");

    if (event.target.id === "createNewMeal") {
      selectForm.style.display = "flex";
      selectCreateNewMealButton.style.display = "none";
    } else if (event.target.id === "close") {
      selectForm.style.display = "none";
      selectCreateNewMealButton.style.display = "flex";
    } else if (event.target.id === "submitFormButton") {
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
      const date = format(new Date(`${dateValue}T12:00`), "PPPP");
      const breakfast = mealArray[0];
      const lunch = mealArray[1];
      const dinner = mealArray[2];
      const newDisplayMealPlan = new DisplayMealPlan(date);

      newMealPlanManager.pushToArray(date, breakfast, lunch, dinner);
      newDisplayMealPlan.display();

      const mealPlanArrayLength = newMealPlanManager.getMealPlanArrayLength();
      newDisplayMealPlan.updateNotifications(mealPlanArrayLength);

      newDisplayMealPlan.createEditButton();
      newDisplayMealPlan.createRemoveButton();
      mealArray.length = 0;
      selectForm.style.display = "none";
      selectCreateNewMealButton.style.display = "flex";
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      document.querySelector("#date").value = "";
      event.preventDefault();
    } else if (event.target.className === "removeMealPlan") {
      const arrayIndex = event.target.dataset.index;
      const mealPlanID = document.querySelector(
        `#index-${event.target.dataset.index}`
      );

      mealPlanID.remove();
      newMealPlanManager.removeFromArray(arrayIndex);
      DisplayMealPlan.assignID();
      DisplayMealPlan.assignIndexValues();
      DisplayMealPlan.assignDataValue();
      console.log(newMealPlanManager.mealPlanArray);
    } else if (event.target.className === "editMealPlan") {
      const selection = event.target;
      const parent = selection.parentElement;
      const span = selection.parentElement.firstElementChild.textContent;
      const createInput = document.createElement("input");

      createInput.type = "text";
      createInput.value = span;
      createInput.onfocus = () => {
        createInput.type = "date";
        createInput.required = true;
      };
      parent.insertBefore(createInput, event.target);
      parent.firstElementChild.remove();
      selection.textContent = "Save";
      selection.className = "saveMealPlan";
    } else if (event.target.className === "saveMealPlan") {
      const selection = event.target;
      const arrayIndex = event.target.dataset.index;
      const parent = selection.parentElement;
      const selectInput = selection.parentElement.firstElementChild;
      const createSpan = document.createElement("span");
      const date = format(new Date(`${selectInput.value}T12:00`), "PPPP");

      createSpan.textContent = date;
      parent.insertBefore(createSpan, event.target);
      selectInput.remove();
      selection.textContent = "Edit";
      selection.className = "editMealPlan";
      newMealPlanManager.editMealPlan(arrayIndex, date);
    }
  });
})();
