const express = require("express");
const router = express.Router();
const { googleController } = require("../controllers/googleController");

router.get("/redirect", googleController.handleRedirect);

module.exports = router;
