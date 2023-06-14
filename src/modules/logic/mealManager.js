import Meals from "./meals";

class MealManager {
  mealArray = [];

  // Add object to meal array
  pushToMealArray(mainDish, sideDish, drink, meal, mealID) {
    this.mealArray.push(new Meals(mainDish, sideDish, drink, meal, mealID));
  }

  // Returns an array of meals that contain the matching id
  getMeals(id) {
    const meal = this.mealArray.filter((obj) => obj.id === id);

    return meal;
  }

  // Removes meals by associated ID with mealPlans
  // ToDo: Implement this
  removeMeal(id) {
    const remainingMeals = this.mealArray.filter((obj) => obj.id !== id);

    this.mealArray = remainingMeals;
  }

  // Returns meal objects in meal array based on meal type and id
  searchForMeal(meal, id) {
    const selectedMeal = this.mealArray.find(
      (obj) => obj.meal === meal && obj.id === id
    );
    return selectedMeal;
  }

  // Returns an array of dishes and drinks from a Meal object
  getDishes(meal, id) {
    const selectedMeal = this.mealArray.find(
      (obj) => obj.meal === meal && obj.id === id
    );

    return [selectedMeal.mainDish, selectedMeal.sideDish, selectedMeal.drink];
  }

  // Updates Meal object after editing
  editMeal(meal, id, mainDish, sideDish, drink) {
    this.searchForMeal(meal, id).mainDish = mainDish;
    this.searchForMeal(meal, id).sideDish = sideDish;
    this.searchForMeal(meal, id).drink = drink;
  }
}

export default MealManager;
