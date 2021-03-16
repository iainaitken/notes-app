# Group project - Notes

A single page front end vanilla javascript app for note taking.

### Project challenges

* To create a web app that only uses a single page.
* To do so without using any external libraries, such as jQuery or Jasmine.
* To develop the app in a TDD way.

### User stories

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```
```
As a programmer
I can create a new note
So I can record something I need to remember
```
```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```
```
As a programmer
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
So I can record notes with fun little pictures
```

## How to use

* We can put how to use the app when we've finished it here!

## Tests

* The javascript folder is divided into src and spec folders. 
* To run the tests, open tests.html from the javascript folder in your browser. This loads and runs both the src and spec files.
* Open the console to view pass and fail messages for the tests.

## Diagrams

![Sequence diagram for creating a note.](/images/diagrams/create_note_seq_diagram "Sequence diagram.")

#### diagrams.codes code for this diagram:


```
alias u="User"
alias i="Interface/browser"
alias nb="Notebook"
alias n="Note"

u->i:"Navigate to page"
i->nb:"create new instance of notebook"
nb-->i:"return new instance of notebook"
i-->u:"Render index.html"
u->i:"enter note details + click submit"
i->n:"create new note instance"
n-->i:"return new note instance"
i->nb:"store new note in notebook"
nb->nb:"add note to array/hash"
nb->nb:"function to generate 20char descriptions"
nb-->i:"return 20char descriptions"
i->i:"update html file with descriptions"
i-->u:"render index.html"
```
