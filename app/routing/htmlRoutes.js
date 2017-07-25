// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // HTML GET requests to handle our routes when people visit a page
    // page to load to take survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
