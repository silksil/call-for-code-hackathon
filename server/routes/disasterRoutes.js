const disasterControllers = require('../controllers/disasterControllers');

module.exports = (app) => {
    app.get('/api/alldisasters', disasterControllers.allDisasters)

    app.post('/api/disaster', disasterControllers.oneDisaster)

}
