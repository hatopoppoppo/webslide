var h, s, l, r, g, b, hr, hg, hb, colorcode, obj
h = 0
s = 0
l = 20

function color() {
  event.stopPropagation();
  document.getElementById("colorpallet").style.display = "block"
  obj = event.target
  if (document.getElementById("border") != null) {
    document.getElementById("RangeH").value = document.getElementById("border").dataset.bcolor.slice(0, 3).replace(/a/g, "")
    document.getElementById("RangeS").value = document.getElementById("border").dataset.bcolor.slice(3, 6).replace(/a/g, "")
    document.getElementById("RangeL").value = document.getElementById("border").dataset.bcolor.slice(6, 9).replace(/a/g, "")
  }
  else {
    document.getElementById("RangeH").value = document.getElementById("select").dataset.color.slice(0, 3).replace(/a/g, "")
    document.getElementById("RangeS").value = document.getElementById("select").dataset.color.slice(3, 6).replace(/a/g, "")
    document.getElementById("RangeL").value = document.getElementById("select").dataset.color.slice(6, 9).replace(/a/g, "")
  }
  getRange()
}
function closepallet() {
  document.getElementById("colorpallet").style.display = "none"
  if (document.getElementById("select") != null) {
    if(document.getElementById("select").tagName == "P"){
      document.getElementById("select").style.color = document.getElementById("colorcode").textContent
    }
    else{
      document.getElementById("select").style.backgroundColor = document.getElementById("colorcode").textContent
    }
  }
  else{
    document.getElementById("border").setAttribute("id", "select")
    document.getElementById("select").style.borderColor = document.getElementById("colorcode").textContent

  }
}
function getRange() {
  h = document.getElementById("RangeH").value
  s = document.getElementById("RangeS").value
  l = document.getElementById("RangeL").value
  h = Math.round(h)
  s = Math.round(s)
  l = Math.round(l)
  colordiv()
  colorcalc()
  console.log("clear")
}
function colordiv() {
  document.getElementById("color-demo").style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%)"
  obj.style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%)"
}

function colorcalc() {
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
  colorSave()
}
function colorSave() {
  h = ('aaa' + h).slice(-3)
  s = ('aaa' + s).slice(-3)
  l = ('aaa' + l).slice(-3)
  if (document.getElementById("border") != null) {
    document.getElementById("border").dataset.bcolor = h + s + l
  }
  else {
    document.getElementById("select").dataset.color = h + s + l
  }
}


function pallet(palletNum){
  if(document.getElementById("pallet" + palletNum).dataset.palletColor == undefined){
    console.log("あああ")
    document.getElementById("pallet" + palletNum).dataset.palletColor = ('aaa' + h).slice(-3) + ('aaa' + s).slice(-3) + ('aaa' + l).slice(-3)
    document.getElementById("pallet" + palletNum).style.backgroundColor = document.getElementById("colorcode").textContent
  }
  else{
    console.log("いいい")
    document.getElementById("RangeH").value = document.getElementById("pallet" + palletNum).dataset.palletColor.slice(0, 3).replace(/a/g, "")
    document.getElementById("RangeS").value = document.getElementById("pallet" + palletNum).dataset.palletColor.slice(3, 6).replace(/a/g, "")
    document.getElementById("RangeL").value = document.getElementById("pallet" + palletNum).dataset.palletColor.slice(6, 9).replace(/a/g, "")
    getRange()
  }
}