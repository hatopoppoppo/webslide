var fullSc = 0

function fullScreen() {
  fullSc++

  removeselect()

  document.getElementById("slide").style.width = "100vw"
  document.getElementById("slide").style.height = "100vh"
  document.getElementById("slide").style.borderWidth = 0
  document.getElementById("slide").style.fontSize = "100vh"

  var text = document.getElementsByClassName("text")
  for (var i = 0; i < text.length; i++) {
    text[i].style.top = (text[i].style.top.slice(0, -2)) * 1.4285 + "px"
    text[i].style.left = (text[i].style.left.slice(0, -2)) * 1.4285 + "px"
    text[i].style.width = "auto"
  }
  var align = document.getElementsByClassName("align")
  for (var i = 0; i < align.length; i++) {
    align[i].style.left = "0"
    align[i].style.width = "100%"
  }

  var shape = document.getElementsByClassName("shape")
  for (var i = 0; i < shape.length; i++) {
    shape[i].style.top = (shape[i].style.top.slice(0, -2)) * 1.4285 + "px"
    shape[i].style.left = (shape[i].style.left.slice(0, -2)) * 1.4285 + "px"
    shape[i].style.width = (shape[i].style.width.slice(0, -1)) * 1.4285 + "%"
    shape[i].style.height = (shape[i].style.height.slice(0, -1)) * 1.4285 + "%"
  }

  var image = document.getElementsByClassName("image")
  for (var i = 0; i < image.length; i++) {
    image[i].style.top = (image[i].style.top.slice(0, -2)) * 1.4285 + "px"
    image[i].style.left = (image[i].style.left.slice(0, -2)) * 1.4285 + "px"
    image[i].style.width = (image[i].style.width.slice(0, -1)) * 1.4285 + "%"
  }
  var movie = document.getElementsByClassName("movie")
  for (var i = 0; i < movie.length; i++) {
    movie[i].style.top = (movie[i].style.top.slice(0, -2)) * 1.4285 + "px"
    movie[i].style.left = (movie[i].style.left.slice(0, -2)) * 1.4285 + "px"
    movie[i].style.width = (movie[i].style.width.slice(0, -1)) * 1.4285 + "%"
    movie[i].style.height = (movie[i].style.height.slice(0, -1)) * 1.4285 + "%"
    movie[i].lastChild.style.pointerEvents = "auto"
  }
  $(".text,.shape,.image,.movie").draggable({
    disabled: true
  })

  var fullScreenModal = document.getElementById("fullsc-guide")
  fullScreenModal.style.display = "block"
  fullScreenModal.classList.add("fullsc-animation")
  setTimeout(function(){
    fullScreenModal.classList.remove("fullsc-animation")
    fullScreenModal.style.display = "none"
}, 3500)
}

function spacekey() {
  console.log("成功")
  if (fullSc >= 1) {
    fullSc = 0

    document.getElementById("slide").style.width = "70vw"
    document.getElementById("slide").style.height = "70vh"
    document.getElementById("slide").style.borderWidth = ".5vw"
    document.getElementById("slide").style.fontSize = "70vh"

    var text = document.getElementsByClassName("text")
    for (var i = 0; i < text.length; i++) {
      text[i].style.top = Math.round((text[i].style.top.slice(0, -2)) * .7) + "px"
      text[i].style.left = Math.round((text[i].style.left.slice(0, -2)) * .7) + "px"
      text[i].style.width = "auto"
    }
    var align = document.getElementsByClassName("align")
    for (var i = 0; i < align.length; i++) {
      align[i].style.left = "0"
      align[i].style.width = "70vw"
    }

    var shape = document.getElementsByClassName("shape")
    for (var i = 0; i < shape.length; i++) {
      shape[i].style.top = Math.round((shape[i].style.top.slice(0, -2)) * .7) + "px"
      shape[i].style.left = Math.round((shape[i].style.left.slice(0, -2)) * .7) + "px"
      shape[i].style.width = Math.round((shape[i].style.width.slice(0, -1)) * .7) + "%"
      shape[i].style.height = Math.round((shape[i].style.height.slice(0, -1)) * .7) + "%"
    }

    var image = document.getElementsByClassName("image")
    for (var i = 0; i < image.length; i++) {
      image[i].style.top = Math.round((image[i].style.top.slice(0, -2)) * .7) + "px"
      image[i].style.left = Math.round((image[i].style.left.slice(0, -2)) * .7) + "px"
      image[i].style.width = Math.round((image[i].style.width.slice(0, -1)) * .7) + "%"
    }
    var movie = document.getElementsByClassName("movie")
    for (var i = 0; i < movie.length; i++) {
      movie[i].style.top = Math.round((movie[i].style.top.slice(0, -2)) * .7) + "px"
      movie[i].style.left = Math.round((movie[i].style.left.slice(0, -2)) * .7) + "px"
      movie[i].style.width = Math.round((movie[i].style.width.slice(0, -1)) * .7) + "%"
      movie[i].style.height = Math.round((movie[i].style.height.slice(0, -1)) * .7) + "%"
      movie[i].lastChild.style.pointerEvents = "none"
    }
    $(".text,.shape,.image,.movie").draggable({
      disabled: false
    })

  }
}

