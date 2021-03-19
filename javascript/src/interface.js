let noteList = document.getElementById("create-note")
let noteDisplay = document.getElementById("display-note");
let noteBody = document.getElementById("note-body");

let storedNoteArray
if (window.localStorage.getItem('listOfNotes') !== null) {
  storedNoteArray = JSON.parse(window.localStorage.getItem('listOfNotes'))
} else {
  storedNoteArray = []
}
storedNoteArray.forEach( note => {
    let newNote = createNote(note)
    appendNoteToPage(newNote)
})

function submitNote(){
  let text = document.getElementById('enter-text').value;
  createEmojifiedNote(text);
}

function createEmojifiedNote(text) {
  let text_json = JSON.parse(`{ "text": "${text}"}`);
  fetch("https://makers-emojify.herokuapp.com/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(text_json)
  })
  .then(response => response.json())
  .then(data => {
      updateLocalStorage(data.emojified_text);
      let note = createNote(data.emojified_text);
      appendNoteToPage(note);
  })
}

function createNote(text) {
  let note = new Note(text);
  return note;
}

function appendNoteToPage(note) {
  let list = document.getElementById("list");
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  let description = `${note.get20Chars()}...`;

  link.textContent = description;
  link.href = '#';
  link.id = description;
  link.addEventListener("click", function(event) {
    displayNote(note);
    event.preventDefault();
  })

  list.appendChild(listItem);
  listItem.appendChild(link);

  document.getElementById('enter-text').value = "";
}

function displayNote(note) {
  let text = note.getText();
  noteList.style.display = "none";
  noteDisplay.style.display = "block";
  noteBody.textContent = text;
}

function hideNote() {
  noteBody.textContent = "";
  noteList.style.display = "block";
  noteDisplay.style.display = "none";
}

function updateLocalStorage(text) {
  storedNoteArray.push(text)
  window.localStorage.setItem('listOfNotes', JSON.stringify(storedNoteArray))
}
