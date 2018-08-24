const disasterControllers = require('../controllers/disasterControllers');

module.exports = (app) => {
    app.post('/api/activedisasters', disasterControllers.usersActiveDisasters)

    app.get('/api/alldisasters', disasterControllers.allDisasters)

}
