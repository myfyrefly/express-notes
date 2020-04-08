//If any of these routes are hit - it will display a GUI application 
    //Import the following: path and router 
var path = require('path');
//router takes the place of app
var router = require('express').Router(); 
//router is an express function

//get route - display your data in non-json format from the index page (root route)

//this displays the notes.html when url is /
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

//this displays the notes.html when url is /notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});



module.exports = router;