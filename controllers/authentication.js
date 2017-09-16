const jwt = require("jwt-simple");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
const passport = require("passport");
const jwt_decode = require("jwt-decode");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.secret);
}

exports.fetchUser = (req, res, next) => {
  console.log("req.token");
  console.log(req.body.token);
  const decodedToken = jwt_decode(req.body.token);
  console.log(decodedToken.sub);
  User.findById(decodedToken.sub, (err, user) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      res.send(user);
    } else {
      console.log("couldn't find user");
    }
  });
};

exports.login = (req, res, next) => {
  res.send({ token: tokenForUser(req.user), user: req.user });
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  // See if a user with the given email exists
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email,
      password
    });

    user.save(err => {
      if (err) {
        return next(err);
      }

      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
