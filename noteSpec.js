let note = new Note("random string")

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


let note = new Note("this string is much longer than 20 characters, I hope")

if (note.get20Chars() === "this string is much ") {
    console.log("yay")
}  else {
    console.log(note.get20Chars())
}