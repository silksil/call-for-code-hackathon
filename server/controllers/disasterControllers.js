disasterDummyData = require('../dummyData/disasters');
messagesDummyData = require('../dummyData/messages');
notificicationsDummyData = require('../dummyData/notifications');

exports.allDisasters = (req, res)=> {
  res.send(disasterDummyData);
}

exports.oneDisaster = (req, res)=> {
  const id = req.body.id;
  let disaster = disasterDummyData
    .filter(disaster => disaster.id == id)
    .shift()

  res.send(disaster);
}

exports.usersNotifications = (req, res)=> {
  console.log(req.body)
  res.send(notificicationsDummyData);
}

exports.usersChatMessages = (req, res)=> {
  console.log("chat")
  res.send(messagesDummyData );
}

exports.usersMap = (req, res)=> {
  console.log("test map")
  res.send("jo");
}
