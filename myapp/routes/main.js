const express = require('express');

let router = express.Router();

router.route('/').get(function(req, res, next){
    res.render('main/index', null);
});

module.exports = router;