const locationRoutes = require('./location_routes');
const loginRoutes = require('./login_routes');

module.exports = function(app, db) {
    locationRoutes(app, db);
    loginRoutes(app, db)
}