const StudentModel = require("../models/studentModel");

const StudentInfo= async(req,res)=>{
    try {
        const{name, college_name, email, password}= req.body;
        const input= new StudentModel({name, college_name, email, password})
        
        const result= await input.save();
        console.log("Data Saved: ",result);

        res.status(200).json({message:"Data Saved Successfully"})

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: "An error occurred while saving data"})
    }
}

const StudentgetInfo=(req,res)=>{
    const {name}= req.body;
    StudentModel.find({name})
    .then((response)=>res.json(response))
    .catch((err)=>{
        console.log(err);
    })

}


module.exports={
    StudentInfo,
    StudentgetInfo,
}