# Off Grid Communications Node

This repository holds the Node.js part of an off-grid comminication system that uses Arduinos with HC-12 transceiver modules.

Node reads and writes messages to and from the serial port using the node-serialport module and communicates with a browser via socket.io events.

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

I know that the last one in the list is my Uno, so I pass it index.js:

'''
node index.js /dev/cu.usbmodemFA241
'''

I open a broser to loclahost port 3000 and see:

'''
listening on *:3000
port open. Data rate: 9600
Starting Arduino
a user connected
'''

