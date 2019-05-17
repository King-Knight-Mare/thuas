var proxy = require('express-http-proxy');
var app = require('express')();
app.use(proxy('surviv.io'));
console.log('big homo')
/*
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});