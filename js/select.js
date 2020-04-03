function textselect() {
  removeselect()
  event.stopPropagation();
  document.getElementById("text-config").style.display = "flex"
  Target = event.target
  Target.setAttribute("id", "select")
  document.getElementById("input-fontsize").value = document.getElementById("select").style.fontSize.replace("%", "")
  document.getElementById("input-text").value = Target.textContent
  document.getElementsByClassName("color")[0].style.backgroundColor = document.getElementById("select").style.color
  
}
function shapeselect() {
  console.log("成功")
  removeselect()
  event.stopPropagation();
  document.getElementById("shape-config").style.display = "flex"
  Target = event.target
  Target.setAttribute("id", "select")
  document.getElementById("input-width").value = document.getElementById("select").style.width.replace("%", "")
  document.getElementById("input-height").value = document.getElementById("select").style.height.replace("%", "")
  document.getElementsByClassName("color")[1].style.backgroundColor = document.getElementById("select").style.backgroundColor
  document.getElementsByClassName("color")[2].style.backgroundColor = document.getElementById("select").style.borderColor
}
function imageselect(){
  removeselect()
  event.stopPropagation();
  document.getElementById("img-config").style.display = "flex"
  Target = event.target
  Target.parentNode.setAttribute("id", "select")
  Target.parentNode.style.boxShadow = "none"
  document.getElementById("img-width").value = document.getElementById("select").style.width.replace("%", "")
}
function movieselect(){
  removeselect()
  event.stopPropagation();
  document.getElementById("movie-config").style.display = "flex"
  Target = event.target
  Target.setAttribute("id", "select")
  document.getElementById("mov-width").value = document.getElementById("select").style.width.replace("%", "")
}

function removeselect() {
  if(document.getElementById("select") != null){
    document.getElementById("select").removeAttribute("id", "select")
  configs = document.getElementsByClassName("config")[0].children
  for (var i = 0; i < configs.length; i++){
    configs[i].style.display = "none"
  }
  }
}