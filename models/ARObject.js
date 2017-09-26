const mongoose = require("mongoose");
const { Schema } = mongoose;

const ARObjectSchema = new Schema({
  name: String,
  id: String,
  description: String,
  fileName: String,
  imageName: String
});

mongoose.model("arobjects", ARObjectSchema);
