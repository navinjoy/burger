var express = require('express');

var burger = require('../models/burger');

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObj = {
            burgers: data
        }
        console.log(hbsObj);
        res.render('index', hbsObj);
    })
})

module.exports = router;