const express = require('express');

const router = express.Router();

router.route('/').get(function(req, res, next){
    res.render('main/index', null);
});

router.route('/upload').post(function(req, res, next){
    console.log(req.body);
    console.log('파일 업로드!!!');
    res.redirect('/');
});

module.exports = router;