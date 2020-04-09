let sample = require('../db/dataCreation.js');
//express has a router ()
var router = require('express').Router(); 
//utilize the get()

router.get('/notes', (req, res) => {
    sample
        .getNotes()
        .then(notes => res.json(notes))  
        .catch(err => res.status(500).json(err))
});

//utilize post()
router.post('/addnotes', (req, res) => {
    sample
        .addNotes()
        .then(note => res.json(note))
}); 


//utilize the delete()
router.delete('/notes/:id', (req, res) => {
    sample
        .removeNotes()
        .then(() => {
            res.json({ok: true});
        })
        
});



module.exports = router;

















//Will hold the routes to your database 


// /notes/delete  
// /notes/add

//post - to add to your database
/* app.post('/notes', (req, res) => {
    const note = {
        id: myNotes.length + 1,
        note: req.body.note
    };
    myNotes.push(note);
    res.send(note);
}); */

//get - route pull from  the database to display in json format
// /notes

//delete route - for removing data from the database 
// /notes/0989



/* module.exports = myNotes; */

