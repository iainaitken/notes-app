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
// variable that represents the specific note, or text in the body field (depending
// on how the localstorage method is changed)
// add event listener
// remove text from array
// replace stored array with new array