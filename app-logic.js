module.exports = function(req, res) {
  
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September', 
    'October',
    'November',
    'December'
  ];
  
  function formatDate(ts) {
    var date = new Date(ts);
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    
    return months[month] + ' ' + day + ', ' + year;
  }
  
  var ts = req.params.timestamp;
  var time = ts;
  ts = Number(ts);
  if (isNaN(ts)) ts = time;
  
  if (typeof ts !== 'number') ts = Date.parse(ts);
  var formatted = formatDate(ts);
  
  if (!ts) {
    ts = null;
    formatted = null;
  }
  
  res.send({
    unix: ts,
    natural: formatted
  });
};