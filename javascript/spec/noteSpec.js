textarea = document.getElementById("note-text")
textarea.value = "This should be the first note's text";
submitNote();

setTimeout( () => {
describe("Notes", function() {
    it("Adds the note from the textarea when submitNote is run", function() {
      expect(document.getElementsByTagName('a')[0].textContent).toEqual("This should be the f...")
    })

    it("creates a note that is an instance of a Note", function() {
        expect(createNote("this is a note")).toBe(Note);
    })

    it("displays the whole note", function() {
        document.getElementById("This should be the f...").click()
        expect(document.getElementById("body").textContent).toEqual("This should be the first note's text")
    })

    it("hides the whole note", function() {
        document.getElementById("hideNote").click()
        expect(document.getElementById("body").textContent).toEqual("")
        expect(document.getElementsByTagName('a')[0].textContent).toEqual("This should be the f...")

    })

    clear(document.getElementById('list'))
})}, 500)









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
