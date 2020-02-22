var express = require('express');
var router = express.Router();

/* GET inventory page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/inventory.html');
});

module.exports = router;
