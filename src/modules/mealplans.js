class MealPlan {
  constructor(date, breakfast, lunch, dinner, id) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.favorite = false;
    this.id = id;
  }
}
// Extract truthy meals and create a div for each
export { MealPlan };
