const express = require("express");
const { getText, createText } = require("../controllers/text");
const router = express.Router();

router.route("/").get(getText);
router.route("/").post(createText);
module.exports = router;
