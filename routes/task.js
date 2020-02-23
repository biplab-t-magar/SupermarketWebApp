var express = require('express');
var router = express.Router();

/* GET employees page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/task.html');
});

module.exports = router;
