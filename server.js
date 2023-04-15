// Load required modules
const http = require("http"); // http server core module
const path = require("path");
const express = require("express"); // web framework external module
const socketIo = require("socket.io"); // web socket external module
const easyrtc = require("open-easyrtc"); // EasyRTC external module

// Set process name
process.title = "networked-aframe-server";

// Get port or default to 8080
const port = process.env.PORT || 8080;

// Setup and configure Express http server.
const app = express();
app.use(express.static("public"));

const rooms = [
  {
    name: "mindfullbliss 1",
    maxPlayers: 30,
    currentPlayers: 5,
  },
  {
    name: "moonworld 2",
    maxPlayers: 30,
    currentPlayers: 11,
  },
  { name: "artworld 2", maxPlayers: 30, currentPlayers: 11 },
  {
    name: "loobyworld 2",
    maxPlayers: 30,
    currentPlayers: 11,
  },
  {
    name: "rip take off world 2",
    maxPlayers: 30,
    currentPlayers: 11,
  },
  { name: "matrixworld 2", maxPlayers: 30, currentPlayers: 11 },
  { name: "bitcoinworld 2", maxPlayers: 30, currentPlayers: 11 },
  // Add more rooms as needed
];

// Serve the room files
app.get("/mindfullbliss", (req, res) => {
  res.sendFile(path.join(__dirname, "public/mindfullbliss.html"));
});

app.get("/moonworld", (req, res) => {
  res.sendFile(path.join(__dirname, "public/moonworld.html"));
});

// Add similar lines for other room files

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Add a new endpoint to serve the view count
let viewCount = 3398310;
app.get("/viewcount", (req, res) => {
  viewCount++;
  const formattedViewCount = viewCount.toLocaleString();
  res.send(formattedViewCount);
});

// Start Express http server
const webServer = http.createServer(app);

// Start Socket.io so it attaches itself to Express server
const socketServer = socketIo.listen(webServer, { "log level": 1 });
const myIceServers = [
  { urls: "stun:stun1.l.google.com:19302" },
  { urls: "stun:stun2.l.google.com:19302" },
  // {
  //   "urls":"turn:[ADDRESS]:[PORT]",
  //   "username":"[USERNAME]",
  //   "credential":"[CREDENTIAL]"
  // },
  // {
  //   "urls":"turn:[ADDRESS]:[PORT][?transport=tcp]",
  //   "username":"[USERNAME]",
  //   "credential":"[CREDENTIAL]"
  // }
];
easyrtc.setOption("appIceServers", myIceServers);
easyrtc.setOption("logLevel", "debug");
easyrtc.setOption("demosEnable", false);

// Overriding the default easyrtcAuth listener, only so

// we can directly access its callback
easyrtc.events.on(
  "easyrtcAuth",
  (socket, easyrtcid, msg, socketCallback, callback) => {
    easyrtc.events.defaultListeners.easyrtcAuth(
      socket,
      easyrtcid,
      msg,
      socketCallback,
      (err, connectionObj) => {
        if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
          callback(err, connectionObj);
          return;
        }

        connectionObj.setField("credential", msg.msgData.credential, {
          isShared: false,
        });

        console.log(
          "[" + easyrtcid + "] Credential saved!",
          connectionObj.getFieldValueSync("credential")
        );

        callback(err, connectionObj);
      }
    );
  }
);

// To test, let's print the credential to the console for every room join!
easyrtc.events.on(
  "roomJoin",
  (connectionObj, roomName, roomParameter, callback) => {
    console.log(
      "[" + connectionObj.getEasyrtcid() + "] Credential retrieved!",
      connectionObj.getFieldValueSync("credential")
    );
    easyrtc.events.defaultListeners.roomJoin(
      connectionObj,
      roomName,
      roomParameter,
      callback
    );
  }
);

// Add chat message listener
easyrtc.events.on(
  "emitChatMessage",
  (connectionObj, msgData, socketCallback, callback) => {
    const roomId = msgData.roomId;
    const message = msgData.message;
    const senderId = connectionObj.getEasyrtcid();

    const chatMessage = {
      senderId,
      message,
      timestamp: new Date(),
    };

    // Broadcast the message to all clients in the same room
    connectionObj
      .getApp()
      .rooms.getRoom(roomId)
      .emitEvent("chatMessage", chatMessage);
    callback(null);
  }
);

// Start EasyRTC server
easyrtc.listen(app, socketServer, null, (err, rtcRef) => {
  console.log("Initiated");

  rtcRef.events.on(
    "roomCreate",
    (appObj, creatorConnectionObj, roomName, roomOptions, callback) => {
      console.log("roomCreate fired! Trying to create: " + roomName);

      appObj.events.defaultListeners.roomCreate(
        appObj,
        creatorConnectionObj,
        roomName,
        roomOptions,
        callback
      );
    }
  );
});

// Listen on port
webServer.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});
