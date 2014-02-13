var Cloud = require("ti.cloud");

exports.create = function(params, fn) {
    Cloud.Users.create(params, fn);
};

exports.login = function(params, fn) {
    Cloud.Users.login(params, fn);
};

exports.showRow = function(params, fn) {
    Cloud.Posts.query(params, fn);
};