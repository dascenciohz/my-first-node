const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DomainSchema = new Schema({
    client: String,
    domainname: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('domainSchema', DomainSchema);