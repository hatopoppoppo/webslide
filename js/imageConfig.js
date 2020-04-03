function imgview(event){
  makeimg()
    var file = event.target.files[0]
    var reader = new FileReader()
    var view = document.getElementsByClassName("image")
    var viewImage = document.getElementById("viewImage")
    
    if(viewImage != null)
      view.removeChild(viewImage)
  
    reader.onload = function(event) {
       var img = document.createElement("img")
       img.setAttribute("src", reader.result)
       view[view.length - 1].appendChild(img)
        document.getElementsByClassName("image")[length].style.height = document.getElementsByClassName("image")[length].lastElementChild.style.height
      
    }

    reader.readAsDataURL(file)
    document.getElementById("img-label").removeChild(document.getElementById("img-input"))
    var imginput = document.createElement("input")
    imginput.setAttribute("type","file")
    imginput.setAttribute("id","img-input")
    imginput.addEventListener('change', imgview, false)
    document.getElementById("img-label").appendChild(imginput)
  }

function imagewidth(){
  var textValue = document.getElementById("img-width").value.replace("%","")
document.getElementById("select").style.width = textValue + "%"
}
function removeimg(){
  document.getElementById("img-config").style.display = "none"
  var remove = document.getElementById("select")
  remove.parentNode.removeChild(remove);
}