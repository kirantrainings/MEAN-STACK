module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.sendResponse);
    app.get('/api/getUserDetails', index.sendUserDetails);
};
