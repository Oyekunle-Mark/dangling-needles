import meals from './datastore/meals';

class MealController {
  static getAllMeals(req, res) {
    if (meals.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    return res.status(200).json({
      status: 200,
      data: meals,
    });
  }

  static postMeal(req, res) {
    const newMeal = req.body.meal;
    const meal = newMeal.replace(/[\s]+/g, ' ').trim();

    meals.forEach((element) => {
      if (element.meal === meal) {
        return res.status(400).json({
          status: 400,
          error: 'Meal already exists',
        });
      }
    });

    meals.push({
      id: meals.length + 1,
      meal,
    });

    return res.status(201).json({
      status: 201,
      data: [{
        id: meals.length,
        meal,
      }],
    });
  }

  static putMeal(req, res) {
    if (meals.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    const id = parseInt(req.params.id, 10);
    const newMeal = req.body.meal;
    const meal = newMeal.replace(/[\s]+/g, ' ').trim();

    meals.forEach((element) => {
      if (element.meal === meal) {
        return res.status(400).json({
          status: 400,
          error: 'Meal already exists',
        });
      }
    });

    meals[id - 1] = {
      id,
      meal,
    };

    return res.status(200).json({
      status: 200,
      data: [{
        id,
        meal,
      }],
    });
  }

  static deleteMeal(req, res) {
    if (meals.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'No meal yet.',
      });
    }

    const id = parseInt(req.params.id, 10);

    if (meals.length < id) {
      return res.status(400).json({
        status: 400,
        error: 'No meal matches the id',
      });
    }

    meals.splice(id - 1, 1);

    return res.status(200).json({
      status: 200,
      message: 'Meal deleted',
    });
  }
}

export default MealController;
