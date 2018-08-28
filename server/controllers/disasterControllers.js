dummyData = require('../dummyData/disasters');

exports.allDisasters = (req, res)=> {
  res.send(dummyData);
}

exports.oneDisaster = (req, res)=> {
  const id = req.body.id;
  let disaster = dummyData
    .filter(disaster => disaster.id == id)
    .shift()

  res.send(disaster);
}
