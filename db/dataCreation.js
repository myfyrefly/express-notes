//require the following : fs util
 const util = require ('util');
 const fs = require ('fs');

//to generate the unique ids
const uuidv1 = require('uuid/v1');


//utilize readfileAsync

//utilize writeFileAsync

//create a class called Sample {
//that read() writes() getNnotes() addNotes() removesNotes()
//    }


class Sample { 
    constructor(){
        this.title = title;
        this.body = body;
    }
    readNotes() {

    }

    /* addNote(note) {
        const { title, body }
    } */
    writeNote(){

    }
    getNotes() {
        fs.readFile('./db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(new Error('database.json cannot be reached'));
            } else {
                let note = JSON.parse(data);
                console.log(note);
            }
        });
    }
    addNote(){

    }
    removeNote(){
        
    }
}

getNotes();
