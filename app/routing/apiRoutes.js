var path = require('path');
var friends = require('../data/friends.js');

var totalDifference = [];

let app = function(app){

	app.get('/api/friends', function(req, res){

	 	res.json(friends);

	 	var newFriend = {

	        name: "Ryan",
	        photo: "http:",
	        scores:[  
				5,
			    1,
			    4,
			    4,
			    5,
			    1,
			    2,
			    5,
			    4,
			    1
	        ]
	      };


	 	for (var i = 0; i < friends.length; i++) {
			var scoreArray = friends[i].scores;
					var friendArray = [];


			for (var x = 0; x < scoreArray.length; x++) {
				var friendScore = scoreArray[x];
				//console.log(friendScore)


				for (var y = 0; y < friendScore.length; y++) {
					var result = newFriend.scores[0] - friendScore[y];
					parseInt(result);

					friendArray.push(result)

				}

				//console.log(friendArray)
					var sum = 0;

					for(var z=0; z < friendArray.length; z++){

					    sum += parseInt(friendArray[z]);

					}

				};
					parseInt(sum)
					totalDifference.push(
						friends[i]["total"] = parseInt(sum));
					//console.log(totalDifference)
					var lowest = Math.min.apply(null, totalDifference);
					if (lowest === friends[i].total) {
						console.log(friends[i].name)
					}
					
			};	

	});  

	app.post('/api/friends', function(req, res){

	 	var newfriend = req.body;


		friends.push(newfriend);

	});  	

}

module.exports = app
