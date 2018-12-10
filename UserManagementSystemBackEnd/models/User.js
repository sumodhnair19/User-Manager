const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {type: String},
    email: {type: String, required: true},
    group: {type: Schema.Types.ObjectId, ref: 'Group'},
    registered: {type: Date, default: Date.now}
});
const User = module.exports = mongoose.model('User', UserSchema);