const express = require('express');
const cors =require('cors')
const mongoose=require('mongoose');
require('dotenv').config();
const app =express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri=process.env.ATLAS_URI;
// mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
mongoose.connect(
    uri,
    {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to yourDB-name database")
  );
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB Database connection established successfully!");
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})