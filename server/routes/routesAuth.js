const passport = require('passport');
const ControllersAuthentication = require('../controllers/controllersAuthentication');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.post('/api/signup', ControllersAuthentication.signup);

  app.post('/api/signin', requireSignin, ControllersAuthentication.signin);
};
