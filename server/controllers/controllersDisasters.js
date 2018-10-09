disasterDummyData = require('../dummyData/disasters');
messagesDummyData = require('../dummyData/messages');
notificicationsDummyData = require('../dummyData/notifications');
mapDummyData = require('../dummyData/map');

exports.allDisasters = (req, res) => {
  res.send(disasterDummyData);
};

exports.oneDisaster = (req, res)=> {
  const id = req.body.id;
  let disaster = disasterDummyData
    .filter(disaster => disaster.id === id)
    .shift();
  res.send(disaster);
};

exports.usersNotifications = (req, res) => {
  res.send(notificicationsDummyData);
};

exports.usersChatMessages = (req, res) => {
  res.send(messagesDummyData );
};

exports.usersMap = (req, res) => {
  res.send(mapDummyData);
};
