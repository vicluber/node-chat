let socketIO = require('socket.io');
let express = require('express');
let http = require('http');
let app = express();
let server = http.Server(app);
let io = socketIO(server);
app.set('port', 5000);
// Routing
const clientPath = __dirname;
app.use(express.static(clientPath));
// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000 (Ejecutando servidor en puerto 5000)');
});