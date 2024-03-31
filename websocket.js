const WebSocket = require('ws');

module.exports = function(wss) {
    wss.on('connection', function connection(ws) {
        console.log('User Conneted')
        ws.on('message', function incoming(message) {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        });
    });
};
