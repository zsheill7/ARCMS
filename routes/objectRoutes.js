const mongoose = require("mongoose");
const ARObject = mongoose.model("arobjects");

module.exports = app => {
  app.get("/api/getARObjects", async (req, res) => {
    const arobjects = await ARObject.find({});
    res.send(arobjects);
  });
};
