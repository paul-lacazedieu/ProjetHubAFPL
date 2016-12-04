exports.install = function() {
	F.route('/', view_index);
	F.route('/search/', view_search);
	F.route('/doctor/', view_doctor);
	F.route('/doctor/{id}/queue', view_doctor_queue);
	F.websocket('/doctor/{id}/queue', doctor_queue_socket, ['json']);
	F.route('/doctor/{id}/infos', view_doctor_infos);
	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	self.view('index');
}

function view_search() {
	var self = this;
	self.view('search');
}

function view_doctor() {
	var self = this;
	self.view('doctor');
}

function view_doctor_queue(id) {
	var self = this;
	self.view('doctor_queue', {doctor: id});
}

function doctor_queue_socket(id) {
	var controller = this;
	controller.on('open', function(client){
		console.log('doctor queue online: ', controller.online);
		controller.send({ viewers: controller.online });
	});

	controller.on('close', function(client){
		console.log('doctor queue offline: ', controller.online);
		controller.send({ viewers: controller.online });
	});
}

function view_doctor_infos(id) {
	var self = this;
	self.view('doctor_infos', {id: id, firstname: "Jean", lastname: "Jacques"});
}
