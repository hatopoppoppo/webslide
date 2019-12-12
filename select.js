function selecttext() {
  event.stopPropagation();
  document.getElementById("text-config").style.display = "flex"
  if (document.getElementById("Tselect")) {
    document.getElementById("Tselect").removeAttribute("id", "Tselect")
  }
  Target = event.target
  Target.setAttribute("id", "Tselect")
  document.getElementById("input-fontsize").value = document.getElementById("Tselect").style.fontSize.replace("%", "")
  document.getElementById("input-text").value = Target.textContent
}
function removeselect() {
  document.getElementById("text-config").style.display = "none"
  document.getElementById("Tselect").removeAttribute("id", "select")
  document.getElementById("input-fontsize").value = ""
  document.getElementById("input-text").value = ""
}