function maketext() {
  var p = document.createElement('p');
  p.className = "text";
  p.textContent = "あああああ";
  document.getElementById("slide").appendChild(p);
  p.style.fontSize = "16%"
  p.onclick = textselect
  move()
}
function makeshape() {
  var shape = document.createElement('div');
  shape.className = "shape";
  document.getElementById("slide").appendChild(shape);
  shape.style.width = "9%"
  shape.style.height = "16%"
  shape.style.backgroundColor = "#ffffff"
  shape.style.borderColor = "#333333"
  shape.onclick = shapeselect
  move()
}

function move() {
  $(".text,.shape").draggable({
    containment: '#slide',
    scroll: false,
  })
}