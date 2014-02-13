var acs = require('acs');

exports.create = function(params,fn){
	
	acs.create(params,fn);
};

exports.login = function(params,fn){
	
	acs.login(params,fn);
};

exports.showRow = function(params,fn){
	acs.showRow(params,fn);
};
