dummyData = require('../dummyData/disasters');

exports.allDisasters = (req, res)=> {
  res.send(dummyData);
}

exports.oneDisaster = (req, res)=> {
  const id = req.body.id;
  let disaster = dummyData.filter(disaster => {
    return disaster.id == id;
  });

  res.send(disaster.shift());
}
