// Create the root node
var pongingPeer = P.create();
 
// Connect to the onramp server at its default location
var webSocketPeer = pongingPeer.to('ws://127.0.0.1:20500/');
 
// Whenever an RTC connection is established to this browser via
// the onramp server, call the handler function
webSocketPeer.on('connection', handleRtcConnection);
 
function handleRtcConnection(webRtcPeer){
  webRtcPeer.on('message', function(message){
    // Output the message
    console.log('I received: ' + message);
 
    // Wait one second then respond with a "pong"
    setTimeout(function(){
      webRtcPeer.send('Pong!');
    }, 1000);
  }); 
}
