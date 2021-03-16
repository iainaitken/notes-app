let notebook = new Notebook()

// let ready = (callback) => {
//   if (document.readyState != "loading") callback();
//   else document.addEventListener("DOMContentLoaded", callback);
// }

function createNote(text) {
  let note = new Note(text);
  notebook.addNote(note);
}

function getInputValue(){
  let noteText = document.getElementById('note_text').value;
  createNote(noteText);
  displayNotes();
}

function displayNotes() {
  let element = document.createElement("li");
  let array = notebook.getNotes();
  let text = array[0].getText();
  element.textContent = text;
  document.getElementById("note_list").appendChild(element);
}

// ready(() => {
  // function getInputValue(){
  //   let noteText = document.getElementById('note_text').value;
  //   const form = document.getElementById('note_form');
  //   form.addEventListener("submit", createNote(noteText));
  // }
  
  // const form = document.getElementById('note_form');
  // let noteText = document.getElementById('note_text').value;
  // form.addEventListener("submit", createNote(noteText));
// });