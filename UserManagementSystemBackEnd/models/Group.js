const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    title: {type: String, required: true},
    created: {type: Date, default: Date.now}
});
const Group = module.exports = mongoose.model('Group', GroupSchema);