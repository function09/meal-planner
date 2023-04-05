class MealPlan {
  static indexValue = 0;

  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.indexValue = `index-${MealPlan.indexValue++}`;
  }
}

export { MealPlan };