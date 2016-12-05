exports.install = function() {
  F.route('/api/doctor/create', create_doctor, ['json']);
  F.route('/api/doctor/read/{id}', read_doctor, ['get']);
  F.route('/api/doctor/update/{id}', update_doctor, ['put']);
  F.route('/api/doctor/delete/{id}', delete_doctor, ['delete']);
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

function read_doctor() {
  var self = this;

  var tmp = {message: 'READ doctor'};
  this.plain(JSON.stringify(tmp));
}

function update_doctor() {
  var self = this;

  var tmp = {message: 'UPDATE doctor'};
  this.plain(JSON.stringify(tmp));
}

function delete_doctor() {
  var self = this;

  var tmp = {message: 'DELETE doctor'};
  this.plain(JSON.stringify(tmp));
}

function create_user() {
  var self = this;

  var tmp = {message: 'CREATE user'};
  this.plain(JSON.stringify(tmp));
}

function read_user() {
  var self = this;

  var tmp = {message: 'READ user'};
  this.plain(JSON.stringify(tmp));
}

function update_user() {
  var self = this;

  var tmp = {message: 'UPDATE user'};
  this.plain(JSON.stringify(tmp));
}

function delete_user() {
  var self = this;

  var tmp = {message: 'DELETE user'};
  this.plain(JSON.stringify(tmp));
}
