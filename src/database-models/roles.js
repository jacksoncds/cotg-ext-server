const Schema = require('mongoose').Schema;
const SchemaTypes = require('mongoose').SchemaTypes;

const roles = new Schema({
    title: String,
    description: String,
    permissions: [{type: SchemaTypes.ObjectId, ref: 'permissions'}],
    createdBy: SchemaTypes.ObjectId,
    createdOn: String,
    isActive: Boolean,
});

module.exports = roles;
