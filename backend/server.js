const express = require("express");
const orderRoutes = require("./src/api/orderController");

const app = express();
app.use(express.json());
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
