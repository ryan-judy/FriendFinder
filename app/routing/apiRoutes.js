var path = require('path');
var friends = require('../data/friends.js');

var totalDifference = [];

let app = function(app){

	app.get('/api/friends', function(req, res){

	 	res.json(friends);

  	});

	app.post('/api/friends', function(req, res){

	 	var newfriend = req.body;

		var userResponse = newfriend.scores;

		var matchName = "";
		var matchImage = "";
		var totalDifference = 100;

		for (var i = 0; i < friends.length; i++) {

			var friendDiff = 0;

			for (var j = 0; j < userResponse.length; j++) {
				friendDiff += Math.abs(friends[i].scores[j] - userResponse[j]);

			}

			if (friendDiff < totalDifference) {

				totalDifference = friendDiff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
				
			}
		}

		friends.push(newfriend);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

	});  	

}


module.exports = app
