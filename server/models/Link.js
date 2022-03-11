const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const linkSchema = new Schema({
  title: String,
  slug: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Link = mongoose.model("links", linkSchema);

module.exports = Link;
