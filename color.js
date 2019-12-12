var h , s , l , r ,g ,b ,hr , hg ,hb , colorcode
h = 0
s = 100
l = 50
movetext()
colordiv()
colorcalc()

function colortext() {
  console.log("呼んだ？")
  document.getElementById("colorpallet").style.display = "block"
}
function closepallet() {
  document.getElementById("colorpallet").style.display = "none"
  document.getElementById("Tselect").style.color = document.getElementById("colorcode").textContent
}
function getRange(){
  h = document.getElementById("RangeH").value
  s = document.getElementById("RangeS").value
  l = document.getElementById("RangeL").value
  h = Math.round(h)
  s = Math.round(s)
  l = Math.round(l)
  colordiv()
  colorcalc()
}
function colordiv(){
  document.getElementById("color-demo").style.backgroundColor = "hsl("+ h + "," + s + "%," + l + "%)"
  document.getElementById("color").style.backgroundColor = "hsl("+ h + "," + s + "%," + l + "%)"
}

function colorcalc(){
  if (l <= 49) {
    max = 2.55 * (l + l * (s / 100))
    min = 2.55 * (l - l * (s / 100))

  }
  else {
    max = 2.55 * (l + (100 - l) * (s / 100))
    min = 2.55 * (l - (100 - l) * (s / 100))
  }

  if (h <= 60) {
    r = max
    g = (h / 60) * (max - min) + min
    b = min
  }
  else if (h <= 120) {
    r = ((120 - h) / 60) * (max - min) + min
    g = max
    b = min
  }
  else if (h <= 180) {
    r = min
    g = max
    b = ((h - 120) / 60) * (max - min) + min
  }
  else if (h <= 240) {
    r = min
    g = ((240 - h) / 60) * (max - min) + min
    b = max
  }
  else if (h <= 300) {
    r = ((h - 240) / 60) * (max - min) + min
    g = min
    b = max
  }
  else if (h <= 360) {
    r = max
    g = min
    b = ((360 - h) / 60) * (max - min) + min
  }
  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)
  var hr = r.toString(16);
  var hg = g.toString(16);
  var hb = b.toString(16);

  var colorcode = hr + hg + hb
  if (colorcode.length === 3) {
    colorcode = hr + hg + hb + hr + hg + hb
  } else if (colorcode.length <= 5) {
    if (hr.length === 1) { hr = "0" + hr }
    if (hg.length === 1) { hg = "0" + hg }
    if (hb.length === 1) { hb = "0" + hb }
    colorcode = hr + hg + hb
  }
  colorcode = "#" + colorcode
  document.getElementById("colorcode").textContent = colorcode
}