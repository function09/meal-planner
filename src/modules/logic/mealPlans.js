class MealPlan {
  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.favorite = false;
    this.id = (Math.random() + 1).toString(36).replace(".", "");
  }
}
export default MealPlan;
