const disasterControllers = require('../controllers/disasterControllers');

module.exports = (app) => {
    app.get('/api/alldisasters', disasterControllers.allDisasters)

    app.post('/api/disaster', disasterControllers.oneDisaster)

    app.post('/api/notifications', disasterControllers.usersNotifications)

    app.post('/api/chat', disasterControllers.usersChatMessages)

    app.post('/api/map', disasterControllers.usersMap)

}
