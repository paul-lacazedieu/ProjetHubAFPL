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
	self.view('search', {
		results: [
			{
				firstname: 'Paul',
				lastname: 'Lacazedieu',
				address: '54 bis rue de Bérénice, 81300 Graulhet',
				link: '/doctor/0/infos'
			},
			{
				firstname: 'Adrien',
				lastname: 'Fildier',
				address: '12 avenue de Gau, 81500 Caussades',
				link: '/doctor/1/infos'
			},
		]
	});
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
	var err = null;
	var doc = null;
	var doctors = [
		{
			firstname: 'Paul',
			lastname: 'Lacazedieu',
			address: '54 bis rue de Bérénice, 81300 Graulhet',
			link: '/doctor/0/infos'
		},
		{
			firstname: 'Adrien',
			lastname: 'Fildier',
			address: '12 avenue de Gau, 81500 Caussades',
			link: '/doctor/1/infos'
		},
	];
	if (id < doctors.length){
		var doc = doctors[id];
	} else {
		err = {
			message: "Aucun docteur pour l'id '"+id+"'."
		}
	}
	self.view('doctor_infos', {doctor: doc, error: err});
}
