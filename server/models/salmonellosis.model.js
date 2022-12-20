const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const salmonellosisSchema = new Schema(
    {
        username: {type:String},
        description: {type: String},
        duration:{type: Number},
        date: {type: Date},

        
        hospitalDistrict: {type:String, required: true},
        hospitalVisited: {type:String, required: true},
        facilityType: {type:String, required: true},
        disease: {type:String, required: true},
        visitDate: {type:Date, required: true},
        age: {type:Number, required: true},
        gender: {type:String, required: true},
        latitide:{type:Number},
        longitude:{type:Number}

    },
    {
        timestamps: true,
    }
);
const Salmonellosis = mongoose.model('Salmonellosis', salmonellosisSchema);
module.exports = Salmonellosis;