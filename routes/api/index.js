const router = require("express").Router();

// get all the routes in a bunch
const testRoutes = require("./test_routes");

router.use("/testing", testRoutes);

module.exports = router;
