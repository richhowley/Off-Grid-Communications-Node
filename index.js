/*
 * Off Grid Communication
 *
 * To make communication between an Arduino
 * and web brower possible this node.js code
 * watches the serial port, sending aata
 * recieved out a socket and sends socket data
 * to the serial port.
 *
 * It requires node-serialport
 *
 *    https://github.com/EmergingTechnologyAdvisors/node-serialport
 * 
 */


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// serve default page
app.get('/', function(req, res){
  res.sendfile('index.html');
});

// when a connection is made
io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  // write message from browser
  socket.on('og-message', function(msg){
    io.emit('og-message', msg);   // message goes to browser for display
    myPort.write(msg);            // message gets sent to serial port
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// include serial port library
var serialport = require('serialport');

SerialPort = serialport.SerialPort; 
   
// get port name from the command line:
portName = process.argv[2];

// initialize serial port object
var myPort = new SerialPort(portName, {
   baudRate: 9600,
   
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\n")
   
 });

myPort.on('open', showPortOpen);
myPort.on('close', showPortClose);
myPort.on('error', showError);
myPort.on('data', gotSerialData);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}
 
  
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}

// broadcast data from serial port
function gotSerialData(data) {
  console.log(data);
  io.emit('og-message', data);

}
