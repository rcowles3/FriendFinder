// ===============================================================================
// LOADING DATA
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) { // exports 'app'

	// API GET request to display array object of friends as JSON
	app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

};