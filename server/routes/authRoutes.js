const authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false})
const requireSignin = passport.authenticate('local', { session: false })

module.exports = (app) => {
  app.post('/api/signup', authentication.signup)

  app.post('/api/signin', requireSignin, authentication.signin)


  app.get('/', requireAuth, (req,res)=> {
    res.send({hi: "there"})
  })
}
