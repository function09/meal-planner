import mealPlanManager from "./mealPlanManager";

localStorage.getItem("myArray");

console.log(JSON.parse(localStorage.getItem("myArray")));

mealPlanManager.mealPlanArray = JSON.parse(localStorage.getItem("myArray"));

console.log(mealPlanManager.mealPlanArray);
