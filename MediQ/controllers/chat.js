exports.install = function() {
  F.route('/chat/{room}', view_chat);
  F.websocket('/chat/{room}', chat_socket, ['json']);
};

function view_chat(room) {
	var self = this;
  console.log('room: ',room);
	self.view('chat', {room: room});
}

function chat_socket() {
	var controller = this;
	controller.on('open', function(client){
		console.log('online: ', controller.online);
	});

	controller.on('message', function(client, message){
		if (message.username){
			client.id = message.username;
		}
		controller.send({ message: client.id + ': ' + message.message });
	});

	controller.on('close', function(client){
		controller.send({ message: client.id + ': offline' });
		console.log('offline: ', controller.online);
	});
}
