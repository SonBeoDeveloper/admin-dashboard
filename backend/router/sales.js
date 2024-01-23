const express = require("express");
const { getSales } = require("../controller/sales");
const router = express.Router();
router.get("/sales", getSales);

module.exports = router;
