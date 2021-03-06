const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config/keys');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.tokenKey);
}

exports.signin = (req, res, next)=> {
  // passport passes on the user
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide an email and password' })
  }

  User.findOne({ email: email}, (err, existingUser) => {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error:'Email is in use' });
    }

    else {
      const user = new User({
        email: email,
        password: password
      })
      user.save((err)=> {
        if (err) {return next(err)}
        else {res.json({ token: tokenForUser(user) })}
      });
    }
  });
}
