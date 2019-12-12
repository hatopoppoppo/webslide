function maketext() {
  var p = document.createElement('p');
  p.className = "text";
  p.textContent = "あああああ";
  document.getElementById("slide").appendChild(p);
  p.style.fontSize = "16%"
  p.onclick = selecttext
  movetext()
}
function makeshape() {
  var shape = document.createElement('div');
  shape.className = "shape";
  document.getElementById("slide").appendChild(shape);
}

function movetext() {
  $('.text').draggable({
    containment: '#slide',
    scroll: false,
  })
}