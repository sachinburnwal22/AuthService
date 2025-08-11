const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "EMail Password missing in signup reqest",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
};
