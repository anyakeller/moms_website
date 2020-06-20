//route management
const path = require("path");
const router = require("express").Router();

// API Routes if needed
// router.use("/api", apiRoutes);

// React app
router.use("/",function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
