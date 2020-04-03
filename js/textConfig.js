function changetext() {
  var textValue = document.getElementById("input-text").value
  document.getElementById("select").textContent = textValue
}
function changeTsize() {
  var textValue = document.getElementById("input-fontsize").value
  document.getElementById("select").style.fontSize = textValue + "%"
}
function boldtext() {
  if (document.getElementById("select").classList.contains("bold")) {
    document.getElementById("select").style.fontWeight = "normal"
    document.getElementById("select").classList.remove("bold")
  }
  else {
    document.getElementById("select").style.fontWeight = "bold"
    document.getElementById("select").classList.add("bold")
  }
}
function removetext() {
  document.getElementById("text-config").style.display = "none"
  var remove = document.getElementById("select")
  remove.parentNode.removeChild(remove);
}
function aligntext() {
  if (document.getElementById("select").classList.contains("align")) {
    document.getElementById("select").style.width = "auto"
    document.getElementById("select").style.textAlign = "normal"
    document.getElementById("select").style.left = "0"
    document.getElementById("select").classList.remove("align")
  }
  else {
    document.getElementById("select").style.width = "70vw"
    document.getElementById("select").style.textAlign = "center"
    document.getElementById("select").style.left = "0"
    document.getElementById("select").classList.add("align")
  }
}

var Menu = document.getElementById("FontSelect")
var MenuOpen = 0
var SelectFont = 0
var FontArray  = ["MPlus1p","トガリテ","廻想体","装甲明朝","ほのか明朝","ロンドB","せのびゴシック","JFドット東雲ゴシック","コーポレート・ロゴ"]
window.onload = function(){
  for(i = 0; i < Menu.children.length; i++){
    Menu.children[i].style.fontFamily = FontArray[i]
  }
}
function pullDown(){
  if(MenuOpen == 0){
    MenuOpen++
    Menu.style.height = "20vh"
    Menu.style.transition = "height .2s , margin-top .2s"
    Menu.style.overflowY = "scroll"
    Menu.scrollTop = (window.innerHeight / 20) * (SelectFont - 1)
  }
  else{
    MenuOpen = 0
    Menu.style.height = "4vh"
    Menu.style.overflowY = "hidden"
  }
}

function FontSelect(FontNum){
  if(! MenuOpen == 0){
    SelectFont = FontNum
    for(i = 0; i < FontNum; i++){
      Menu.children[i].style.display = "none"
    }
    document.getElementById("select").style.fontFamily = FontArray[FontNum]
  }
  else{
    for(i = 0; i < Menu.children.length; i++){
      Menu.children[i].style.display = "block"
    }
  }
}