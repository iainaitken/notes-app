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
  confirmClear();
})

let deleteNoteButton = document.getElementById('delete-note');
deleteNoteButton.addEventListener("click", function(event) {
  confirmDelete();
})

function confirmClear() {
  let response = confirm("Are you sure? This action cannot be undone!");
  if (response === true) {
    window.localStorage.clear();
    clearList();
  }
}

function confirmDelete() {
  let response = confirm("Are you sure? This action cannot be undone!")
  if (response === true) {
    let text = noteBody.textContent;
    let index = storedNoteArray.indexOf(text);
    storedNoteArray.splice(index, 1);
    window.localStorage.setItem('listOfNotes', JSON.stringify(storedNoteArray));
    clearList();
    hideNote();
    updateNoteList();
  }
}

function clearList() {
  document.getElementById("list").innerHTML = "";
}