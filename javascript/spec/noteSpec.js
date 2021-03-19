
 let note = new Note("random string")
 let longerNote = new Note("this string is much longer than 20 characters, I hope")


 describe('Note', function(){
     it('display has a default length of 20 characters', function() {
         expect(note.DISPLAY_CHARS).toEqual(20)
     })

     it('stores the full text', function(){
         expect(note.getText()).toEqual("random string")
     })

     it('displays the whole note if the note is less than 20 characters', function(){
         expect(note.get20Chars()).toEqual("random string")
     })

     it('displays just the first 20 characters if the note is longer than 20 characters', function(){
         expect(longerNote.get20Chars()).toEqual("this string is much ")
     })

 })


