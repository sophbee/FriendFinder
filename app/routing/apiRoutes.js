var friends = require("../data/friends");

module.exports = function(app) {
  // Display all possible friends in JSON.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // Put new friend details in variable. Create empty array to hold all totalDifference answers.
    var newFriend = req.body.answers;
    var compareTotalsArray = [];
    var matching = 0;

    // Go through all friends in database.
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      // Go through the new friend's answers array and compare answers to each friend already in the database.
      for (var x; x < newFriend.length; x++) {
        var answerDiff = Math.abs(
          parseInt(newFriend[x]) - parseInt(friends[i].answers[x])
        );
        totalDifference += answerDiff;
      }
      compareTotalsArray.push(totalDifference);
    }

    // Goes through the array that holds all totalDifferences - starting at index 0. If index z is smaller than the current matching index, matching gets updated to the smallest number in the array and so on until the smallest number is found. matching is equal to the index of the smallest number in array.
    for (var z = 0; z < compareTotalsArray.length; z++) {
      if (compareTotalsArray[z] <= compareTotalsArray[matching]) {
        matching = z;
      }
    }

    var bestMatch = friends[matching];
    res.json(bestMatch);

    friends.push(req.body);
  });
};
