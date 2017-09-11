const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "Please log in" });
    }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id, // obtained with Stripe.js
      description: "$5 for 50 credits"
    });
    req.user.google.credits += 50;
    const user = await req.user.save();

    res.send(user);
  });
};
