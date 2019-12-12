var textValue
function changetext() {
  var textValue = document.getElementById("input-text").value
  document.getElementById("Tselect").textContent = textValue
}
function changeTsize() {
  var textValue = document.getElementById("input-fontsize").value
  document.getElementById("Tselect").style.fontSize = textValue + "%"
}
function boldtext() {
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