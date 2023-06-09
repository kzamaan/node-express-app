const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		name: String,
		email: String,
		username: String,
		password: String,
		avatar: String,
		emailVerifiedAt: Date
	},
	{
		timestamps: true
	}
);
// hide password from response
schema.methods.toJSON = function test() {
	const obj = this.toObject();
	delete obj.password;
	return obj;
};

module.exports = mongoose.model('User', schema);
