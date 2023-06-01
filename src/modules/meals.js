class Meals {
  // meal plans are associated with each meal
  constructor(mainDish, sideDish, drink, meal, mealPlanID) {
    this.mainDish = mainDish;
    this.sideDish = sideDish;
    this.drink = drink;
    this.meal = meal;
    this.mealPlanID = mealPlanID;
  }
}

export { Meals };
