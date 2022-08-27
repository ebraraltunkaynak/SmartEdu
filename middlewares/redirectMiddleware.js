

module.exports = (req, res, next) => {
  if (req.sessio.userID) {
    return res.redirect('/');
  }
  next();
};
