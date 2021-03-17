
describe("Notes", function() {
    it("Adds the note from the textarea when appendNoteToPage is run", function() {
        textarea = document.getElementById("note-text")
        textarea.value = "This should be the first note's text";
        appendNoteToPage();
        expect(document.getElementsByTagName('a')[0].textContent).toEqual("This should be the f...");

    })
})









/* let note = new Note("random string")

if (note.DISPLAY_CHARS === 20) {
    console.log("wahoooo")
} else {
    console.log("fail")
}

if (note.getText() === "random string") {
    console.log("pass")
} else {
    console.log("loser")
    }

if (note.get20Chars() === "random string") {
    console.log("yay")
}  else {
    console.log(note.get20Chars())
}


let newNote = new Note("this string is much longer than 20 characters, I hope")

if (newNote.get20Chars() === "this string is much ") {
    console.log("yay")
}  else {
    console.log(newNote.get20Chars())
} */