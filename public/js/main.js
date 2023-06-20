const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function () {
    console.log('Websocket connection established');

    // listen for messages from the server
    socket.addEventListener('message', function (event) {
        outPutMessage(event.data);
    });
};

const button = document.getElementById('btn');

button.addEventListener('click', sendMessage.bind(null, socket));

function outPutMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `
    <p>Jane 
        <span>9:12pm</span>
    </p>
    <p class="text">
        ${message}
    </p>`;
    document.querySelector('#root').appendChild(messageDiv);
}

function sendMessage(socket) {
    socket.send('Hi there!');
}
