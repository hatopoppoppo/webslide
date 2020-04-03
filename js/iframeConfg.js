function modalmov(){
  document.getElementById("modalmov").style.display = "block"
}
function closemov(){
  document.getElementById("modalmov").style.display = "none"
  makeiframe()
}
function moviewidth(){
  var textValue = document.getElementById("mov-width").value
  document.getElementById("select").style.width = textValue + "%"
  document.getElementById("select").style.height = textValue + "%"
}
function removemov(){
  document.getElementById("movie-config").style.display = "none"
  var remove = document.getElementById("select")
  remove.parentNode.removeChild(remove);
}
