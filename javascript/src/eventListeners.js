let addNoteButton = document.getElementById('add-note');
addNoteButton.addEventListener("click", function(event) {
  submitNote();
  event.preventDefault();
})

let hideNoteButton = document.getElementById('hide-note');
hideNoteButton.addEventListener("click", function(event) {
  hideNote();
  event.preventDefault();
})

let clearNoteButton = document.getElementById('clear-notes');
clearNoteButton.addEventListener("click", function(event) {
  window.localStorage.clear();
  document.getElementById("list").innerHTML = "";
})

let deleteNoteButton = document.getElementById('delete-note');
deleteNoteButton.addEventListener("click", function(event) {
  let text = noteBody.textContent;
  let index = storedNoteArray.indexOf(text);
  storedNoteArray.splice(index, 1);
  window.localStorage.setItem('listOfNotes', JSON.stringify(storedNoteArray))
  document.getElementById("list").innerHTML = "";
  hideNote()
  updateNoteList()
})
