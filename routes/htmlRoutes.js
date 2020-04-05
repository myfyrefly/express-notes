//If any of these routes are hit - it will display a gui application 
//Import the following: path and router 
var path = require('path');
//router takes the place of app
var router = require('express').Router();
//get route - display your data in non-json format from teh index page  (root route)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

//get - display notes directly from the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//router is an express func.
module.exports = router;