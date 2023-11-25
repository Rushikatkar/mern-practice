const mongoose= require('mongoose');

const studentSchema= new mongoose.Schema({
    name:String,
    college_name:String,
    email:String,
    password:String
})

const StudentModel= mongoose.model('studentsdatas',studentSchema);
module.exports = StudentModel;