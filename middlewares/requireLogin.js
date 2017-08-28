const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Please log in" });
  }
  next();
};
