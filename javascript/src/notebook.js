class Notebook {
    constructor(){
      this._notes = []
    }
  
    addNote(note){
      this._notes.push(note);
    };
  
    getNotes(){
      return this._notes;
    }
  }