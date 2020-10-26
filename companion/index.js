import * as messaging from "messaging";

messaging.peerSocket.addEventListener("open", (evt) => {
  sendMessage();
});

messaging.peerSocket.addEventListener("message", (evt) => {
  console.log(evt.data);
  console.log(JSON.stringify(evt.data));
});

function sendMessage() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({name: 'mynumber', value: 10});
  }
}
