function submitNote(){
  let text = document.getElementById('note_text').value;
  let note = createNote(text);
  appendNoteToPage(note);
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

  // link.onclick = displayNote();
  // link.addEventListener("click", displayNote(note));
  
  list.appendChild(listItem);
  listItem.appendChild(link);
  
}

function displayNote(note) {
  let noteList = document.getElementById("noteList")
  let noteDisplay = document.getElementById("noteDisplay");
  let noteBody = document.getElementById("body");
  let text = note.getText();
  noteList.style.display = "none";
  noteDisplay.style.display = "block";
  noteBody.textContent = text;
}

function hideNote(note) {
  let noteList = document.getElementById("noteList")
  let noteDisplay = document.getElementById("noteDisplay");
  let noteBody = document.getElementById("body");
  noteBody.textContent = "";
  noteList.style.display = "block";
  noteDisplay.style.display = "none";
}