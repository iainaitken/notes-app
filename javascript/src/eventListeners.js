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