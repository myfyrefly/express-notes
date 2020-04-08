const express = require('express');
//const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

//require the files 
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/htmlRoutes");

//display data (notes from database)
    //display in a json format 

//addNotes - based on user input 

//delete notes - from page and and database 

//app.use

//utilize the json function from express
app.use(express.json());
//more middleware
app.use(express.urlencoded({extended: true}));
//inform the server on what file you want rendered
//GUI 
//Once the sever is ran - the files within will render as the root
app.use(express.static("public"));

//connect the server to routes file 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, () => {
    console.log(`note taker app is now listening on port ${PORT}...`);
})


  