// =========================================================
//  Ex032 — Tracalorie 2.0
//  A full calorie-tracking app with meals, workouts,
//  progress bar, localStorage… basically MyFitnessPal,
//  but without the subscription trauma.
// =========================================================


// =========================================================
//  CLASS: CalorieTracker
//  Core brain of the entire application.
//  Handles calories, meals, workouts, UI updates,
//  and talks to localStorage through Storage class.
// =========================================================
class CalorieTracker {
  constructor() {
    // Load saved data or defaults
    this._calorieLimit = Storage.getCalorieLimit();
    this._totalCalories = Storage.getTotalCalories(0);
    this._meals = Storage.getMeals();
    this._workouts = Storage.getWorkouts();

    // Initial UI update
    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();

    // Prefill modal input for limit
    document.getElementById('limit').value = this._calorieLimit;
  }

  // =====================================================
  //  PUBLIC API — used by App()
  // =====================================================

  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;

    Storage.updateTotalCalories(this._totalCalories);
    Storage.saveMeal(meal);

    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;

    Storage.updateTotalCalories(this._totalCalories);
    Storage.saveWorkout(workout);

    this._displayNewWorkout(workout);
    this._render();
  }

  removeMeal(id) {
    const index = this._meals.findIndex(m => m.id === id);

    if (index !== -1) {
      this._totalCalories -= this._meals[index].calories;
      Storage.updateTotalCalories(this._totalCalories);

      this._meals.splice(index, 1);
      Storage.removeMeal(id);

      this._render();
    }
  }

  removeWorkout(id) {
    const index = this._workouts.findIndex(w => w.id === id);

    if (index !== -1) {
      this._totalCalories += this._workouts[index].calories;
      Storage.updateTotalCalories(this._totalCalories);

      this._workouts.splice(index, 1);
      Storage.removeWorkout(id);

      this._render();
    }
  }

  reset() {
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    Storage.clearAll();
    this._render();
  }

  setLimit(calorieLimit) {
    this._calorieLimit = calorieLimit;
    Storage.setCalorieLimit(calorieLimit);

    this._displayCaloriesLimit();
    this._render();
  }

  loadItems() {
    this._meals.forEach(m => this._displayNewMeal(m));
    this._workouts.forEach(w => this._displayNewWorkout(w));
  }


  // =====================================================
  //  PRIVATE UI METHODS
  // =====================================================

  _displayCaloriesTotal() {
    document.getElementById('calories-total').textContent = this._totalCalories;
  }

  _displayCaloriesLimit() {
    document.getElementById('calories-limit').textContent = this._calorieLimit;
  }

  _displayCaloriesConsumed() {
    const consumed = this._meals.reduce((t, m) => t + m.calories, 0);
    document.getElementById('calories-consumed').textContent = consumed;
  }

  _displayCaloriesBurned() {
    const burned = this._workouts.reduce((t, w) => t + w.calories, 0);
    document.getElementById('calories-burned').textContent = burned;
  }

  _displayCaloriesRemaining() {
    const remaining = this._calorieLimit - this._totalCalories;
    const el = document.getElementById('calories-remaining');
    const bar = document.getElementById('calorie-progress');

    el.textContent = remaining;

    // Visual panic mode
    if (remaining <= 0) {
      el.parentElement.parentElement.classList.remove('bg-light');
      el.parentElement.parentElement.classList.add('bg-danger');

      bar.classList.remove('bg-success');
      bar.classList.add('bg-danger');
    } else {
      el.parentElement.parentElement.classList.remove('bg-danger');
      el.parentElement.parentElement.classList.add('bg-light');

      bar.classList.remove('bg-danger');
      bar.classList.add('bg-success');
    }
  }

  _displayCaloriesProgress() {
    const bar = document.getElementById('calorie-progress');
    const percent = (this._totalCalories / this._calorieLimit) * 100;
    bar.style.width = `${Math.min(percent, 100)}%`;
  }

  _displayNewMeal(meal) {
    const mealsEl = document.getElementById('meal-items');
    const div = document.createElement('div');

    div.classList.add('card', 'my-2');
    div.dataset.id = meal.id;
    div.innerHTML = `
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4>${meal.name}</h4>
          <div class="fs-1 bg-primary text-white rounded-2 px-4">
            ${meal.calories}
          </div>
          <button class="delete btn btn-danger btn-sm">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;

    mealsEl.appendChild(div);
  }

  _displayNewWorkout(workout) {
    const workoutsEl = document.getElementById('workout-items');
    const div = document.createElement('div');

    div.classList.add('card', 'my-2');
    div.dataset.id = workout.id;
    div.innerHTML = `
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4>${workout.name}</h4>
          <div class="fs-1 bg-secondary text-white rounded-2 px-4">
            ${workout.calories}
          </div>
          <button class="delete btn btn-danger btn-sm">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;

    workoutsEl.appendChild(div);
  }

  // Called after every data change
  _render() {
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
  }
}


// =========================================================
//  CLASS: Meal
//  Represents a meal with calories.
// =========================================================
class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}


// =========================================================
//  CLASS: Workout
//  Represents a workout that *subtracts* calories.
// =========================================================
class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}


// =========================================================
//  CLASS: Storage
//  Abstracts all localStorage usage so the main app
//  doesn't drown in JSON.parse() spaghetti.
// =========================================================
class Storage {
  static getCalorieLimit(defaultLimit = 2000) {
    return +localStorage.getItem('calorieLimit') || defaultLimit;
  }

  static setCalorieLimit(limit) {
    localStorage.setItem('calorieLimit', limit);
  }

  static getTotalCalories(defaultCalories = 0) {
    return +localStorage.getItem('totalCalories') || defaultCalories;
  }

  static updateTotalCalories(cals) {
    localStorage.setItem('totalCalories', cals);
  }

  static getMeals() {
    return JSON.parse(localStorage.getItem('meals')) || [];
  }

  static saveMeal(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeMeal(id) {
    const meals = Storage.getMeals().filter(m => m.id !== id);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts() {
    return JSON.parse(localStorage.getItem('workouts')) || [];
  }

  static saveWorkout(workout) {
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeWorkout(id) {
    const workouts = Storage.getWorkouts().filter(w => w.id !== id);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static clearAll() {
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');
    // Limit stays unless you uncomment clear()
  }
}


// =========================================================
//  CLASS: App
//  The glue between UI and logic.
//  Listeners, forms, filters, deletion, modal interaction.
// =========================================================
class App {
  constructor() {
    this._tracker = new CalorieTracker();
    this._loadEventListeners();
    this._tracker.loadItems();   // Display saved data
  }

  _loadEventListeners() {
    // Meal submit
    document.getElementById('meal-form')
      .addEventListener('submit', this._newItem.bind(this, 'meal'));

    // Workout submit
    document.getElementById('workout-form')
      .addEventListener('submit', this._newItem.bind(this, 'workout'));

    // Delete meal
    document.getElementById('meal-items')
      .addEventListener('click', this._removeItem.bind(this, 'meal'));

    // Delete workout
    document.getElementById('workout-items')
      .addEventListener('click', this._removeItem.bind(this, 'workout'));

    // Filters
    document.getElementById('filter-meals')
      .addEventListener('keyup', this._filterItems.bind(this, 'meal'));

    document.getElementById('filter-workouts')
      .addEventListener('keyup', this._filterItems.bind(this, 'workout'));

    // Reset button
    document.getElementById('reset')
      .addEventListener('click', this._reset.bind(this));

    // Set daily limit
    document.getElementById('limit-form')
      .addEventListener('submit', this._setLimit.bind(this));
  }


  // When submitting new meal or workout
  _newItem(type, e) {
    e.preventDefault();

    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    if (!name.value || !calories.value) {
      alert('Please fill in all fields');
      return;
    }

    if (type === 'meal') {
      this._tracker.addMeal(new Meal(name.value, +calories.value));
    } else {
      this._tracker.addWorkout(new Workout(name.value, +calories.value));
    }

    // Clear fields + collapse form
    name.value = '';
    calories.value = '';

    const collapse = new bootstrap.Collapse(
      document.getElementById(`collapse-${type}`),
      { toggle: true }
    );
  }


  _removeItem(type, e) {
    if (
      e.target.classList.contains('delete') ||
      e.target.classList.contains('fa-xmark')
    ) {
      if (confirm('Are you sure?')) {
        const id = e.target.closest('.card').dataset.id;

        type === 'meal'
          ? this._tracker.removeMeal(id)
          : this._tracker.removeWorkout(id);

        e.target.closest('.card').remove();
      }
    }
  }


  _filterItems(type, e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(`#${type}-items .card`).forEach(card => {
      const name = card.querySelector('h4').textContent.toLowerCase();
      card.style.display = name.includes(text) ? 'block' : 'none';
    });
  }


  _reset() {
    this._tracker.reset();

    document.getElementById('meal-items').innerHTML = '';
    document.getElementById('workout-items').innerHTML = '';

    document.getElementById('filter-meals').value = '';
    document.getElementById('filter-workouts').value = '';
  }


  _setLimit(e) {
    e.preventDefault();

    const limit = document.getElementById('limit');

    if (!limit.value) {
      alert('Please add a limit');
      return;
    }

    this._tracker.setLimit(+limit.value);
    limit.value = '';

    bootstrap.Modal.getInstance(document.getElementById('limit-modal')).hide();
  }
}


// Initialize app
const app = new App();
