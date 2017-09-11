const passport = require("passport");
const google = "google";
const local = "local";
const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });

module.exports = app => {
  app.post("/hi", requireAuth, (req, res) => {
    res.send({ hi: "there" });
  });

  app.get(
    "/auth/google",
    passport.authenticate(google, {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate(google),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.post("/auth/email", Authentication.signup);

  app.post("/auth/login", requireLogin, Authentication.login, (req, res) => {
    res.redirect("/surveys");
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
