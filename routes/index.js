//route management
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes if needed
router.use("/api", apiRoutes);

// React app
router.use("/",function(req, res) {
  console.log("serving react");
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
