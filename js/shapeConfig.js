function widthshape() {
var textValue = document.getElementById("input-width").value
document.getElementById("select").style.width = textValue + "%"
}
function heightshape() {
  var textValue = document.getElementById("input-height").value
  document.getElementById("select").style.height = textValue + "%"
}
function borderwidthshape() {
  var textValue = document.getElementById("input-border-width").value
  document.getElementById("select").style.borderWidth = textValue + "px"
}
function bordershape() {

}
function bordercolor() {
  document.getElementById("select").setAttribute("id", "border")
  color()
}
function radiusshape() {
  var textValue = document.getElementById("input-border-radius").value
  document.getElementById("select").style.borderRadius = textValue + "%"
}
function removeshape() {
  document.getElementById("shape-config").style.display = "none"
  var remove = document.getElementById("select")
  remove.parentNode.removeChild(remove);
}