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
    paymentStatus: "PENDING",
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

// --- Order tracking (feature/order-tracking) ---
// Update order status as it progresses through the delivery pipeline
router.patch("/:id/status", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: "Order not found" });
  const allowed = ["PLACED", "PREPARING", "OUT_FOR_DELIVERY", "DELIVERED"];
  if (!allowed.includes(req.body.status)) {
    return res.status(400).json({ error: "Invalid status" });
  }
  order.status = req.body.status;
  res.json(order);
});

// Live tracking endpoint used by the customer app
router.get("/:id/track", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json({ id: order.id, status: order.status });
});

// --- Payment integration (feature/payment-integration) ---
// Confirm payment for an order
router.post("/:id/pay", (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: "Order not found" });
  order.paymentStatus = "PAID";
  res.json(order);
});

module.exports = router;
