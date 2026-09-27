const express = require("express");
const router = express.Router();

// In-memory store for demo purposes
const orders = [];

// Create a new order
router.post("/", (req, res) => {
  const order = {
    id: orders.length + 1,
    items: req.body.items,
    status: "PLACED",
  };
  orders.push(order);
  res.status(201).json(order);
});

// Get order by id
router.get("/:id", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
});

module.exports = router;
