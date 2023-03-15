const selectModal = document.querySelector("#modal");
const selectModalClose = document.querySelector("#modalClose");
const selectPlanAMealButton = document.querySelector("#planAMealButton");

selectPlanAMealButton.addEventListener("click", () => {
  selectModal.style.cssText = "display: block";
});
