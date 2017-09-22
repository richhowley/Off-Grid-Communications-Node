# Off Grid Communications Node

This repository holds the Node.js part of an off-grid comminication system that uses Arduinos with HC-12 transceiver modules and is only necessary if a browser interface is desired.

Node.js reads and writes messages to and from the serial port using the node-serialport module and communicates with a browser via socket.io events.

The file index.html is almost exactly copied from the socket.io Getting Started example, index.js is also based off that project but adds serial port access.  If you're intersted in building this off-grid system and have not used socket.io the best place to begin is to build the Gettin Started chat program on the web site https://socket.io/.

Run listports.js to get a list of all serial ports:

```
$ node listports.js
```
In my case the list looks like this:

```
/dev/cu.Bluetooth-Incoming-Port
/dev/cu.PharosBTGPSII-DevB
/dev/cu.usbmodemFA241
```

The last one in the list is my Uno, so I pass it to index.js:

```
node index.js /dev/cu.usbmodemFA241
```

I open a browser to loclahost port 3000 and see:
```
listening on *:3000
port open. Data rate: 9600
Starting Arduino
a user connected
```

