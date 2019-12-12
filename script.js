var textValue
function maketext() {
  console.log("あああああああああああああああああああああああああああ")
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
function selecttext() {
  event.stopPropagation();
  document.getElementById("text-config").style.display = "flex"
  if (document.getElementById("Tselect")) {
    document.getElementById("Tselect").removeAttribute("id", "Tselect")
  }
  console.log("select追加")
  Target = event.target
  Target.setAttribute("id", "Tselect")
  document.getElementById("input-fontsize").value = document.getElementById("Tselect").style.fontSize.replace("%", "")
  document.getElementById("input-text").value = Target.textContent
}
function removeselect() {
  document.getElementById("text-config").style.display = "none"
  document.getElementById("Tselect").removeAttribute("id", "select")
  document.getElementById("input-fontsize").value = ""
  document.getElementById("input-text").value = ""
}

function changetext() {
  var textValue = document.getElementById("input-text").value
  document.getElementById("Tselect").textContent = textValue
}
function changeTsize() {
  var textValue = document.getElementById("input-fontsize").value
  document.getElementById("Tselect").style.fontSize = textValue + "%"
}
function boldtext() {
  console.log("発火")
  if (document.getElementById("Tselect").classList.contains("bold")) {
    document.getElementById("Tselect").style.fontWeight = "normal"
    document.getElementById("Tselect").classList.remove("bold")
  }
  else {
    document.getElementById("Tselect").style.fontWeight = "bold"
    document.getElementById("Tselect").classList.add("bold")
  }
}
function removetext() {
  document.getElementById("text-config").style.display = "none"
  var remove = document.getElementById("Tselect")
  remove.parentNode.removeChild(remove);
}
function aligntext() {
  if (document.getElementById("Tselect").classList.contains("align")) {
    document.getElementById("Tselect").style.width = "auto"
    document.getElementById("Tselect").style.textAlign = "normal"
    document.getElementById("Tselect").style.left = "auto"
    document.getElementById("Tselect").classList.remove("align")
  }
  else {
    document.getElementById("Tselect").style.width = "calc(70vw - 5px)"
    document.getElementById("Tselect").style.textAlign = "center"
    document.getElementById("Tselect").style.left = ".5vw"
    document.getElementById("Tselect").classList.add("align")
  }
}