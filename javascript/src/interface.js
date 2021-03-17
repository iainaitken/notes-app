let noteList = document.getElementById("note-list")
let noteDisplay = document.getElementById("note-display");
let noteBody = document.getElementById("body");

let addNoteButton = document.getElementById('addNote');
addNoteButton.addEventListener("click", function(event) {
  submitNote();
  event.preventDefault();
})

let hideNoteButton = document.getElementById('hideNote');
hideNoteButton.addEventListener("click", function(event) {
  hideNote();
  event.preventDefault();
})

function submitNote(){
  let text = document.getElementById('note-text').value;
  let json = JSON.parse(`{ "text": "${text}"}`);
  fetch("https://makers-emojify.herokuapp.com/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  .then(response => response.json())
  .then(data => {
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

  document.getElementById('note-text').value = "";
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
