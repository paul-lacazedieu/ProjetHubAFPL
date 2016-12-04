exports.install = function() {
  F.route('/api/doctor/create', create_doctor, ['json']);
  F.route('/api/doctor/read/{id}', read_doctor, ['get']);
  F.route('/api/doctor/update/{id}', update_doctor, ['put']);
  F.route('/api/doctor/delete/{id}', delete_doctor, ['delete']);
	// or
	// F.route('/');
};

function create_doctor() {
  var self = this;

  var tmp = {message: 'CREATE'};
  this.plain(JSON.stringify(tmp));
}

function read_doctor() {
  var self = this;

  var tmp = {message: 'READ'};
  this.plain(JSON.stringify(tmp));
}

function update_doctor() {
  var self = this;

  var tmp = {message: 'UPDATE'};
  this.plain(JSON.stringify(tmp));
}

function delete_doctor() {
  var self = this;

  var tmp = {message: 'DELETE'};
  this.plain(JSON.stringify(tmp));
}
