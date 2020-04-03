var page = 1
var maxpage = 1
var nowslide = document.getElementById("nowpage")
var maxslide = document.getElementById("maxpage")
function pageup(){
if(maxpage == page){
  maxpage++
}
  page++
nowslide.textContent = page
maxslide.textContent = maxpage

if(document.getElementsByClassName("page" + page)[0] == null){
  var div = document.createElement('div');
  div.classList.add("page" + page);
  document.getElementById("slide").appendChild(div);
}
document.getElementById("nowslide").removeAttribute("id", "nowslide")
"page" + page
document.getElementsByClassName("page" + page)[0].setAttribute("id", "nowslide")
}
function pagedown(){
  if(page > 1){
    page--
    nowslide.textContent = page
  }
  document.getElementById("nowslide").removeAttribute("id", "nowslide")
  "page" + page
  document.getElementsByClassName("page" + page)[0].setAttribute("id", "nowslide")

  if(!document.getElementsByClassName("page" + (maxslide.textContent))[0].hasChildNodes()){
    document.getElementById("slide").removeChild(document.getElementsByClassName("page" + (maxslide.textContent))[0])
    maxpage--
    maxslide.textContent = page
  }
}