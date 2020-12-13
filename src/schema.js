const { Schema, mongo } = require('mongoose');
 const mongoose  = require('mongoose');
const collegeSchema = new Schema({
    name: Schema.Types.String,
    state: Schema.Types.String,
    minPackage: Schema.Types.Number,
    maxFees: Schema.Types.Number,
    city: Schema.Types.String,
    exam: Schema.Types.Array,
    course: Schema.Types.String
})

//exports.collegeSchema = collegeSchema;
let collegeModel = mongoose.model('collegerecords', collegeSchema)
module.exports = collegeModel;