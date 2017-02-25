module.exports = function(req, res) {
  var ts = req.params.timestamp;
  var date = new Date(ts);
  
  res.send({
    unix: ts,
    natural: date
  });
};