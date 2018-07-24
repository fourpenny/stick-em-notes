let canvas = document.getElementById('wall');
canvas.addEventListener('click', addNote)
let noteCount = 1;
let pageNumber = 1;

function init() {
  let pageSelector = [
    document.querySelector('.page'),
    document.getElementById('right'),
    document.getElementById('left'),
    document.querySelector('.jump'),
  ];

  let i = 0;
  for (pageSelector[i]; i < 3; i++) {
    pageSelector[i].addEventListener('click', pageChange);
  }

}

function pageChange(event) {
  console.log(event.target);
}

function addNote(event) {
  console.log(event.target.className);
  if (!(noteCount / 6 == pageNumber) ) {
    if (event.target.className == 'noteText' || event.target.className == 'delete' || event.target.className == 'sticky') {
      console.log('test');
    } else {
      noteCount++
      console.log(noteCount);
      let note = document.createElement('div');
      note.className = 'sticky';
      note.setAttribute('id', noteCount)
      let deleteNote = document.createElement('p');
      let x = document.createTextNode('X');
      deleteNote.appendChild(x);
      deleteNote.className = 'delete';
      let noteText = document.createElement('textarea');
      noteText.className = 'noteText'
      note.appendChild(deleteNote);
      deleteNote.addEventListener('click', deleteNote)
      note.appendChild(noteText);
      canvas.appendChild(note);
    }
  }
}

init();
