var express = require("express"); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var controller = require("../controller/controller");

router.route("/generateQRCode").post(controller.generateQRCode);

module.exports = router;
