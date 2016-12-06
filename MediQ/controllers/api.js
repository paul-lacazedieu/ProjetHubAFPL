exports.install = function() {
  F.route('/api/doctor/create', create_doctor, ['json']);
  F.route('/api/doctor/read/{id}', read_doctor, ['get']);
  F.route('/api/doctor/update/{id}', update_doctor, ['put']);
  F.route('/api/doctor/delete/{id}', delete_doctor, ['delete']);
  F.route('/api/doctor/list', list_doctor, ['get']);
  F.route('/api/user/create', create_user, ['json']);
  F.route('/api/user/read/{id}', read_user, ['get']);
  F.route('/api/user/update/{id}', update_user, ['put']);
  F.route('/api/user/delete/{id}', delete_user, ['delete']);
	// or
	// F.route('/');
};

function create_doctor() {
  var self = this;

  var tmp = {message: 'CREATE doctor'};
  this.plain(JSON.stringify(tmp));
}

function read_doctor(id) {
  var self = this;

  var tmp = {message: 'READ doctor'};
  this.plain(JSON.stringify(tmp));
}

function update_doctor(id) {
  var self = this;

  var tmp = {message: 'UPDATE doctor'};
  this.plain(JSON.stringify(tmp));
}

function delete_doctor(id) {
  var self = this;

  var tmp = {message: 'DELETE doctor'};
  this.plain(JSON.stringify(tmp));
}

function list_doctor() {
  var self = this;
  var results= [];
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

  var filter = self.query;
  var valid = {
    fn: true,
    ln: true,
  };
  doctors.forEach(function(doctor, index) {
    if (filter.firstname !== undefined && doctor.firstname.toLowerCase().indexOf(filter.firstname.toLowerCase()) === -1){
      valid.fn = false;
    }
    if (filter.lastname !== undefined && doctor.lastname.toLowerCase().indexOf(filter.lastname.toLowerCase()) === -1){
      valid.ln = false;
    }
    if (valid.fn && valid.ln){
      results[results.length] = doctor;
    }
  });
  this.plain(JSON.stringify(results));
}

function create_user() {
  var self = this;

  var tmp = {message: 'CREATE user'};
  this.plain(JSON.stringify(tmp));
}

function read_user(id) {
  var self = this;

  var tmp = {message: 'READ user'};
  this.plain(JSON.stringify(tmp));
}

function update_user(id) {
  var self = this;

  var tmp = {message: 'UPDATE user'};
  this.plain(JSON.stringify(tmp));
}

function delete_user(id) {
  var self = this;

  var tmp = {message: 'DELETE user'};
  this.plain(JSON.stringify(tmp));
}
