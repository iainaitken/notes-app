window.localStorage.clear();
textarea = document.getElementById("note-text");
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