require('dotenv').config()
const express= require('express');
const mongoose=require('mongoose');
const cors= require('cors')
const app= express();
const StudentModel= require('./models/studentModel')
const studentRoute= require('./routes/studentRoutes');
app.use(express.json());
app.use(cors());
const db=`${process.env.MONGODB_URI}/${process.env.DB_NAME}`

    try {
        mongoose.connect(db)
        console.log("connected to mongodb url:"+db);
        app.on("error", (error)=>{
            console.log("ERROR:", error);
            throw error;
        })
       

    } catch (error) {
        console.log("Error", error);
        throw error;
    }

app.use("/api",studentRoute);


app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${process.env.PORT}`);
})