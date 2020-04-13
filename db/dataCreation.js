//require the following : fs util
 const util = require ('util');
 const fs = require ('fs');

//an npm that will generate the unique ids for my notes 
const uuidv1 = require('uuid/v1');


//utilize readfileAsync
const readfileAsync = util.promisify(fs.readFile);
//utilize writeFileAsync
const writeFileAsync = util.promisify(fs.writeFile);
//create a class called Sample {
//that read() writes() getNotes() addNotes() removesNotes()
//    }


class Sample { 
    readNotes() {
    return readfileAsync('db/db.json', 'utf8');
    }
    writeNote(note){
        return writeFileAsync('db/db.json', Json.stringify(note));
    }
    getNotes() {
        return this.readNotes()
        .then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(json.parse(notes));
            } catch(err) {
                parsedNotes = []
            }
            return parsedNotes;
        })
    }
    addNote(note){
          //create a const that holds the title and text equating to note
        const {title, text} = note;
        ///create a variable (const) that will hold the new note
        const newNote = { title, text, id:uuidv1() };
          //create an if statement that says ifNOT a title or if NOT a text throw and error saying "this is not a note"
          /* if(!title || !text) {
              throw new Error('this is not a note!');
          } */
          return this.getNotes()
          .then(notes => [...notes, newNote])
          .then(updatedNotes => this.writeNote(updatedNotes))
          .then(()=> newNote)
        
          //reutilize the getNotes function - afterwards promise to add the new note, write the updated new note and return the note
          //three promises all together

    }

//this function will allow for deletion based on the id implemented 
    deleteNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(filteredNotes => this.writeNote(filteredNotes))
    }
}

module.exports = new Sample();