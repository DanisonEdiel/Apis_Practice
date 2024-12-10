import { ref } from "vue";

import { Client } from '@stomp/stompjs';

const stompClient  = new Client({
   brokerURL: 'ws://localhost:8080/gs-guide-websocket'
});

// stompClient.onConnect = (frame) => {
   
//     console.log('Connected: ' + frame);
//     stompClient.subscribe('/topic/greetings', (greeting) => {
        
//     });
// };
stompClient.onConnect = () => {
    console.log('Connected');
    stompClient.subscribe('/topic/greetings', (message) => {
        console.log('Message received: ', JSON.parse(message.body));
    });
};


stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

const sendMessage = (msg: string) => {
    stompClient.activate();
    // stompClient.send("/app/sendMessage", {}, msg);
};

let isConnected = false;
function connect() {
    if (!isConnected) {
        stompClient.activate();
        isConnected = true;
    }
}

export function useWebSocket() {
    return {
        connect,        
        sendMessage,
    };
}
