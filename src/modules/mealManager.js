import { Meals } from "./meals";
// Create three arrays, one for each meal. Each object in the arrays will
// contain a unique ID to track the object for deletion, editing etc
class MealManager {
  breakfastArray = [];

  lunchArray = [];

  dinnerArray = [];

  assignIDs() {
    let breakfastID = 0;
    let lunchID = 0;
    let dinnerID = 0;

    this.breakfastArray.forEach((index) => {
      index.id = breakfastID;
      breakfastID += 1;
    });
    this.lunchArray.forEach((index) => {
      index.id = lunchID;
      lunchID += 1;
    });
    this.dinnerArray.forEach((index) => {
      index.id = dinnerID;
      dinnerID += 1;
    });
  }

  addBreakfast(mainDish, sideDish, drink) {
    this.breakfastArray.push(new Meals(mainDish, sideDish, drink));
    console.log(this.breakfastArray);
  }

  addLunch(mainDish, sideDish, drink) {
    this.lunchArray.push(new Meals(mainDish, sideDish, drink));
    console.log(this.lunchArray);
  }

  addDinner(mainDish, sideDish, drink) {
    this.dinnerArray.push(new Meals(mainDish, sideDish, drink));
    console.log(this.dinnerArray);
  }
}

export { MealManager };
