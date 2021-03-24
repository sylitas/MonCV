var express = require('express');


var controller = require("../controllers/homepage.controller");

var router = express.Router();

router.get('/',controller.getHomePage);
//router.post("/postPortfolio",controller.postPortfolio);

module.exports = router;