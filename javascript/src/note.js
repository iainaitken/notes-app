class Note {
  constructor(text){
    this._text = text;
    this.DISPLAY_CHARS = 20
  };

  getText(){
    return this._text;
  };

  get20Chars(){
    let l
    if (this._text.length > this.DISPLAY_CHARS) {
      l = this.DISPLAY_CHARS;
      return this._text.slice(0, l)
    } else {
      return this._text;
    }
  };
}
