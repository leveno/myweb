var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
    res.render('blog/', { title: '博客首页' });
});


module.exports = router;