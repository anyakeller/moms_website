const router = require("express").Router();

// Test GET to /api/testing
router.route("/").get((req, res) => {
  res.send("did you get this?");
});

module.exports = router;
