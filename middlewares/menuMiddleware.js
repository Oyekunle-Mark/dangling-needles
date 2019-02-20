class MenuMiddleware {
  static postMenuCheck(req, res, next) {
    if (!req.body.menu || (typeof req.body.menu !== 'object')) {
      return res.status(400).json({
        status: 400,
        error: 'Provide a menu of type array',
      });
    }

    next();
  }
}

export default MenuMiddleware;
