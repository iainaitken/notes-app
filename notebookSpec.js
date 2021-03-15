let notebook = new Notebook()

if (notebook._notes.length === 0) {
    console.log("pass")
} else {
    console.log("fail")
}

notebook.addNote("here is my note")

if (notebook._notes.length === 1) {
    console.log("pass")  
} else {
    console.log("fail")
}

if (Array.isArray(notebook.getNotes())) {
    console.log("pass")
} else {
    console.log("fail")
}

if (notebook.getNotes()[0] === "here is my note") {
    console.log("pass")
} else {
    console.log("fail")
}
