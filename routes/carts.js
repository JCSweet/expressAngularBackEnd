const express = require("express");
const carts = express.Router();


carts.get("/", (req, res) => {
  console.log(req.body);
  res.send("get-test");
  res.send({data:ApiData});
});

carts.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.send("put-test");
});

carts.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send("delete-test");
});

carts.post("/", (req, res) => {
  res.send("post-test");
});

module.exports = carts;