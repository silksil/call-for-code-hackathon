const ControllerDisasters = require('../controllers/controllersDisasters');

module.exports = (app) => {
  app.get('/api/alldisasters', ControllerDisasters.allDisasters);

  app.post('/api/disaster', ControllerDisasters.oneDisaster);

  app.post('/api/notifications', ControllerDisasters.usersNotifications);

  app.post('/api/chat', ControllerDisasters.usersChatMessages);

  app.post('/api/map', ControllerDisasters.usersMap);
};
