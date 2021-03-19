// document.addEventListener('DOMContentLoaded', function() {
    
    var notebook = new Notebook()

   

    // document.getElementById("submit_note").addEventListener('submit', (event) => {
    //     // handle the form data
    //     console.log('here')
    //     var note = new Note('#note_text');
    //     notebook.addNote(note)
    //     document.querySelector("notes").textContent = `${note.get20Chars()}`
    // });


    function submitNote() {
        let noteText = document.getElementById('note_text').value;
        var note = new Note(noteText);
        notebook.addNote(note)
        
 
      }

// when for submitted
// new note is created, 
// this is added to the notebook
// the first 20 characters are displayed in the notes list





//   })