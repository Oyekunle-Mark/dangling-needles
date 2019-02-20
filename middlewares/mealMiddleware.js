class MealMiddleware {
  static postMealCheck(req, res, next) {
    if (!req.body.meal || (req.body.meal.length < 3)) {
      return res.status(400).json({
        status: 400,
        error: 'Provide a meal of 3 characters or more.',
      });
    }

    next();
  }

  static putMealCheck(req, res, next) {
    if (!(/^[\d]+$/.test(req.params.id))) {
      return res.status(400).json({
        status: 400,
        error: 'Request parameter must be an integer',
      });
    }

    if (!req.body.meal || (req.body.meal.length < 3)) {
      return res.status(400).json({
        status: 400,
        error: 'Provide a meal of 3 characters or more.',
      });
    }

    next();
  }

  static deleteMealCheck(req, res, next) {
    if (!(/^[\d]+$/.test(req.params.id))) {
      return res.status(400).json({
        status: 400,
        error: 'Request parameter must be an integer',
      });
    }

    next();
  }
}

export default MealMiddleware;
