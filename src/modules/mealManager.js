import { Meals } from "./meals";
// Create three arrays, one for each meal. Each object in the arrays will
// contain a unique ID to track the object for deletion, editing etc
class MealManager {
  mealArray = [];

  // breakfastArray = [];

  // lunchArray = [];

  // dinnerArray = [];

  // assignIDs() {
  //   let id = 0;

  //   this.mealArray.array.forEach((element) => {
  //     element.id = id;
  //     id += 1;
  //   });
  //   // let breakfastID = 0;
  //   // let lunchID = 0;
  //   // let dinnerID = 0;

  //   // this.breakfastArray.forEach((index) => {
  //   //   index.id = breakfastID;
  //   //   breakfastID += 1;
  //   // });
  //   // this.lunchArray.forEach((index) => {
  //   //   index.id = lunchID;
  //   //   lunchID += 1;
  //   // });
  //   // this.dinnerArray.forEach((index) => {
  //   //   index.id = dinnerID;
  //   //   dinnerID += 1;
  //   // });
  // }

  // assignIDs() {
  //   let id = 0;
  //   this.mealArray.forEach((index) => {
  //     index.id = id;
  //     id += 1;
  //   });
  // }

  pushToMealArray(mainDish, sideDish, drink, meal, mealPlanID) {
    this.mealArray.push(new Meals(mainDish, sideDish, drink, meal, mealPlanID));
    console.log(this.mealArray);
    // this.assignIDs();
    // this.assignMealType(meal);
  }

  removeFromMealArray(id) {
    const filteredArray = this.mealArray.filter((obj) => obj.mealPlanID !== id);

    this.mealArray = filteredArray;

    console.log(this.mealArray);
  }

  // rename
  getMeal(id) {
    const meal = this.mealArray.filter((obj) => obj.mealPlanID === id);
    console.log(meal);
    return meal;
  }

  searchForMeal(meal, id) {
    // Rename chosenMeal
    const chosenMeal = this.mealArray.find(
      (obj) => obj.meal === meal && obj.mealPlanID === id
    );
    return chosenMeal;
  }

  getDishes(meal, id) {
    const chosenMeal = this.mealArray.find(
      (obj) => obj.meal === meal && obj.mealPlanID === id
    );

    return [chosenMeal.mainDish, chosenMeal.sideDish, chosenMeal.drink];
  }

  editMeal(meal, id, mainDish, sideDish, drink) {
    this.searchForMeal(meal, id);

    this.searchForMeal(meal, id).mainDish = mainDish;
    this.searchForMeal(meal, id).sideDish = sideDish;
    this.searchForMeal(meal, id).drink = drink;
    console.log(this.mealArray);
  }
  // addBreakfast(mainDish, sideDish, drink) {
  //   this.breakfastArray.push(new Meals(mainDish, sideDish, drink));
  //   console.log(this.breakfastArray);
  // }

  // addLunch(mainDish, sideDish, drink) {
  //   this.lunchArray.push(new Meals(mainDish, sideDish, drink));
  //   console.log(this.lunchArray);
  // }

  // addDinner(mainDish, sideDish, drink) {
  //   this.dinnerArray.push(new Meals(mainDish, sideDish, drink));
  //   console.log(this.dinnerArray);
  // }
}

export { MealManager };
