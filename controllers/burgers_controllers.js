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
    });
});

router.post("/api/burgers", function(req, res){
    console.log('in controller post', req.body.name,req.body.devoured);
    burger.insert(req.body.name,req.body.devoured, function(result){
        res.json({id : result.insertId});
    })
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = "+req.params.id;
    burger.update(
        req.body.devour,
        req.params.id, 
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
    });
});

module.exports = router;