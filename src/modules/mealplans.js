class MealPlan {
  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.favorite = false;
  }
}
// Extract truthy meals and create a div for each
export { MealPlan };
