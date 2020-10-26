import * as messaging from "messaging";
import document from 'document';

messaging.peerSocket.addEventListener("open", (evt) => {
  sendMessage();
});

function sendMessage() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({name: 'mynumber', value: 100});
  }
}

messaging.peerSocket.addEventListener("message", (evt) => {
  console.log(evt.data);
  console.log(JSON.stringify(evt.data));

  if(evt.data.name === "mynumber" && evt.data.value > 20){
    document.getElementById('background').style.fill = 'blue';
  }
});
