var express = require('express');
var router = express.Router();
var wings = require('../models/wings.js');

router.get('/', function(req, res){
	res.redirect('/wings')
});

router.get('/wings', function(req, res){
	wings.all(function(data){
		var hbsObject = {wings: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

router.post('/wingss/create', function(req, res){
	wings.create(['wings_name'], [req.body.b_name], function(data){
		res.redirect('/wings')
	});
});

router.put('/wings/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	wings.update({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/wings');
	});
});

module.exports = router;