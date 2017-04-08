var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
      ipaddress: req.headers['x-forwarded-for'] ||
                 req.connection.remoteAddress,
      language: req.headers["accept-language"].split(",")[0],
      software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
  });
});

module.exports = router;
