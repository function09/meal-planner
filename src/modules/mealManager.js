import { Meals } from "./meals";
// Create three arrays, one for each meal. Each object in the arrays will NO
// contain a unique ID to track the object for deletion, editing etc NO
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

  //   // this.breakfastArray.forEach((meal) => {
  //   //   meal.id = breakfastID;
  //   //   breakfastID += 1;
  //   // });
  //   // this.lunchArray.forEach((meal) => {
  //   //   meal.id = lunchID;
  //   //   lunchID += 1;
  //   // });
  //   // this.dinnerArray.forEach((meal) => {
  //   //   meal.id = dinnerID;
  //   //   dinnerID += 1;
  //   // });
  // }

  pushToMealArray(mainDish, sideDish, drink, meal, mealID) {
    this.mealArray.push(new Meals(mainDish, sideDish, drink, meal, mealID));
    console.log(this.mealArray);
    // this.assignIDs();
    // this.assignMealType(meal);
  }

  // rename
  getMeal(id) {
    const meal = this.mealArray.filter((obj) => obj.id === id);
    console.log(meal);
    return meal;
  }

  // Use the mealPlans to assign an ID to each object
  removeMeal(id) {
    const remainingMeals = this.mealArray.filter((obj) => obj.id !== id);

    this.mealArray = remainingMeals;

    console.log(this.mealArray);
  }

  searchForMeal(meal, id) {
    // Rename chosenMeal
    const chosenMeal = this.mealArray.find(
      (obj) => obj.meal === meal && obj.id === id
    );
    return chosenMeal;
  }

  getDishes(meal, id) {
    const chosenMeal = this.mealArray.find(
      (obj) => obj.meal === meal && obj.id === id
    );

    return [chosenMeal.mainDish, chosenMeal.sideDish, chosenMeal.drink];
  }

  // getAllDishes(id) {
  //   const entries = this.getMeal(id).forEach((index) => {
  //     Object.entries(index).filter(([key, value]) => typeof value === "string");
  //   });

  //   const obj = Object.fromEntries(entries);

  //   console.log(obj);
  //   return obj;
  // }

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
