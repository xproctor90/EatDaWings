var orm = require('../config/orm.js');

var wings = {
	all: function(cb){
		orm.all('wings', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('wings', col, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update('wings', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = wings;