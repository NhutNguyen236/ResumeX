var express = require("express");
var router = express.Router();

var data  = [];

router.get("/template", function (req, res, next) {
	  res.render("resume", {"data": "data"});
});

module.exports = router;
 