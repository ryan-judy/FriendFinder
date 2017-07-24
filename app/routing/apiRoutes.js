var path = require('path');
var friends = require('../data/friends.js');

let app = function(app){

	app.get('/api/friends', function(req, res){

	 	res.json(friends);

	});  

	app.post('/api/friends', function(req, res){

	 	var newfriend = req.body;
		friends.push(newfriend);

	});  	

}

module.exports = app
