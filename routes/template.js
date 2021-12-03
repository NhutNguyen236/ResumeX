var express = require('express');
var router = express.Router();

router.get('/template', function(req, res, next) {
  res.render('resume');
});

module.exports = router;
