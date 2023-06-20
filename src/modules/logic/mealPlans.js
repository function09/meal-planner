class MealPlan {
  constructor(date, title, breakfast, lunch, dinner) {
    this.date = date;
    this.title = title;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.favorite = false;
    this.complete = false;
    this.id = (Math.random() + 1).toString(36).replace(".", "");
  }
}
export default MealPlan;
