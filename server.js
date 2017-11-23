var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
var host = process.env.PUBLIC_IP || '0.0.0.0';

server.listen(port, host, function() {
  // eslint-disable-next-line
  console.log('Server running on port: %d', port);
});
