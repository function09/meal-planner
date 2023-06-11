class Meals {
  // meal plans are associated with each meal through id
  constructor(mainDish, sideDish, drink, meal, id) {
    this.mainDish = mainDish;
    this.sideDish = sideDish;
    this.drink = drink;
    this.meal = meal;
    this.id = id;
  }
}

export default Meals;
