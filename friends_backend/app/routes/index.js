const locationRoutes = require('./location_routes');
module.exports = function(app, db) {
    locationRoutes(app, db);
}