var express = require('express');
var router = express.Router();

/* GET case page. */
router.get('/', function(req, res, next) {
    console.log('fffff')
    res.render('web/cases', { title: '案例' });
});


module.exports = router;