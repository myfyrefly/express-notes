//express has a router ()
var router = require('express').Router(); 
//utilize the get()
let sample = require('../db/dataCreation.js');
router.get('/notes', function (req, res) {
    sample
        .getNotes()
        .then(notes => res.json(notes))  
        .catch(err => res.status(500).json(err))
});

//utilize post()
router.post('/notes', (req, res) => {
    sample
    //paramater - 
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err))
}); 


//utilize the delete()
router.delete('/notes/:id',function  (req, res)  {
    sample
        .deleteNote(req.params.id)
        .then(() => {
            res.json({ok: true});
        })
        .catch(err => res.status(500).json(err))
        
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

