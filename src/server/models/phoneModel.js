const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
    name:{type:String , required:true},
    age:{type:Number , required:true},
    number:{type:String, required:true},
    city:{type:String , required:true}
})
module.exports = mongoose.model("Phone" , phoneSchema)