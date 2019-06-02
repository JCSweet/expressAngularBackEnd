const express = require("express");
const carts = express.Router();

// ****array goes here:
// ***create new file for just the object (see facts example)
const array = [
  { id:1, product: 'Apple', price: 1.99, quantity: 1 }
];

module.exports = {
  array };

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