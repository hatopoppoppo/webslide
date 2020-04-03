document.onkeydown = keydown
document.onkeyup = keyup

var keyBind = {}
var clone

function keydown(event) {
    if (event.which == 32) {  //Space
      spacekey()
    }
    if (event.which == 13) {  //Enter
      moveSlide()
    }
    if (event.which == 16) {  //Shift
      backSlide()
    }
    if (document.activeElement.tagName !== "INPUT") {
    if (event.which == 8) {  //BackSpace
      console.log("backslash")
    }
    keyBind[event.which] = true
    if (((keyBind[91]) || (keyBind[93])) && keyBind[67]) {
      clone = document.getElementById("select").cloneNode(true)
    }
    if (((keyBind[91]) || (keyBind[93])) && keyBind[86]) {
      document.getElementById("nowslide").appendChild(clone)
      move()
    }
  }
}

function keyup() {
  keyBind = {}
}
