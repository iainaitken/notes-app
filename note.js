class Note {
  constructor(text){
    this._text = text;
  };

  getText(){
    return this._text;
  };

  get20chars(){
    let l
    if (this._text.length < 19) {
      l = this._text.length;
    } else {
      l = 19;
    }
    let chars = ""
    let i = 0
    for(i = 0; i < l; i++){
      chars += this._text[i];
    }
    return chars;
  };
}

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
