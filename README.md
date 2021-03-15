
<h1 align="center">Notes</h1>

<details align='center'><h2>Table of Contents</h2>
<p>
<a href="#general-info">• General Info</a><br>
<a href="#technologies">• Technologies</a><br>
<a href="#specifications">• Specifications</a><br>
<a href="#user-stories">• User Stories</a><br>
<a href="#planning">• Planning</a><br>
<a href="#screenshots">• Screenshots</a><br>
<a href="#setup">• Setup</a><br>
<a href="#setup">• Contributors</a><br>
</p>
</details>


<h2 align='center'>General Info</h2>
<h2 align='center'>Technologies</h2>
<h2 align='center'>Specifications</h2>
<h2 align='center'>User Stories</h2>
<h2 align='center'>Planning</h2>


<h4>User Story 1 & 2</h4>
<img width="648" alt="Screenshot 2021-03-15 at 15 47 03" src="https://user-images.githubusercontent.com/21693444/111181355-ccfa8400-85a5-11eb-8017-8bab875289fb.png" align='center'>

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


<h2 align='center'>Screenshots<h2>
<h2 align='center'>Setup</h2>
<h2 align='center'>Contributors</h2>

