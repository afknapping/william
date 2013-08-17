define(function (require) {
    var namedModule = require('name');
});

// Create the root node
var pingingPeer = P.create();
 
// Connect to the onramp server at its default location
var webSocketPeer = pingingPeer.to('ws://127.0.0.1:20500/');
 
// Listen to the messages the onramp server sends
webSocketPeer.on('message', function(message, arg1){
  // If we recieve a remote address, start pinging it
  if(message === "remote address"){
    var peerAddress = arg1;
    startPinging(peerAddress);
  }
});
 
function startPinging(address){
  // Establish an RTC connection to the given address
  var webRtcPeer = webSocketPeer.to(address);
 
  // Once the channel is open, send the initial ping
  webRtcPeer.on('open', function(){
    webRtcPeer.send('Ping?');
  });
 
  // Whenever we recieve a message, output it to the console,
  // wait one second, then respond with another ping
  webRtcPeer.on('message', function(message){
    console.log('I received: ' + message);
 
    setTimeout(function(){
      webRtcPeer.send('Ping?'); 
    }, 1000);
  });
}