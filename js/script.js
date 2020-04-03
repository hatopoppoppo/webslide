window.onload = function(){
  move()
}

var textValue
function maketext() {
  var p = document.createElement('p')
  p.className = "text";
  p.style.color = "#333333"
  p.textContent = "あああああ";
  document.getElementById("nowslide").appendChild(p)
  p.style.fontSize = "16%"
  p.style.fontFamily = "MPlus1p"
  p.setAttribute("onclick","textselect()")
  p.dataset.color = "aa0aa0a20"
  move()
}
function makeshape() {
  var shape = document.createElement('div')
  shape.className = "shape";
  document.getElementById("nowslide").appendChild(shape)
  shape.style.width = "9%"
  shape.style.height = "16%"
  shape.style.backgroundColor = "#333333"
  shape.style.borderColor = "#333333"
  shape.setAttribute("onclick","shapeselect()")
  shape.dataset.color = "aa0aa0a20"
  shape.dataset.bcolor = "aa0aa0a20"
  move()
}
function makeimg(){
  var imgdiv = document.createElement('div')
  document.getElementById("nowslide").appendChild(imgdiv)
  imgdiv.className = "image";
  imgdiv.style.width = "20%"
  imgdiv.setAttribute("onclick","imageselect()")
  imgdiv.dataset.color = "aa0aa0a20"
  move()
}
function makeiframe(){
  if (document.getElementById("movie-input").value == "" )  {
}
else{
  var moviediv = document.createElement("div")
  moviediv.className = "movie"
  document.getElementById("nowslide").appendChild(moviediv)
  moviediv.style.width = "50%"
  moviediv.style.height = "50%"
  moviediv.setAttribute("onclick","movieselect()")
  var url = document.getElementById("movie-input").value
  url = url.replace("watch?v=","embed/")
  document.getElementById("movie-input").value = ""

var movie = document.createElement('iframe')
  document.getElementById("nowslide").lastElementChild.appendChild(movie)
  movie.src = url
  move()
}
}

function move() {
  $(".text,.shape,.image,.movie").draggable({
    containment: '#nowslide',
    scroll: false,
  })
}