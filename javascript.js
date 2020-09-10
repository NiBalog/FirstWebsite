

function setup() {
  document.getElementById("home-page").style.display = 'none';
  document.getElementById("setup-page").style.display = 'block';
  document.getElementById("buy-page").style.display = 'none';
  document.getElementById("specs-page").style.display = 'none';
}
function home() {
  document.getElementById("home-page").style.display = 'block';
  document.getElementById("setup-page").style.display = 'none';
  document.getElementById("buy-page").style.display = 'none';
  document.getElementById("specs-page").style.display = 'none';
}
function buy() {
  document.getElementById("home-page").style.display = 'none';
  document.getElementById("setup-page").style.display = 'none';
  document.getElementById("buy-page").style.display = 'block';
  document.getElementById("specs-page").style.display = 'none';
}
function specs() {
  document.getElementById("home-page").style.display = 'none';
  document.getElementById("setup-page").style.display = 'none';
  document.getElementById("buy-page").style.display = 'none';
  document.getElementById("specs-page").style.display = 'block';
}

function changeColor() {
  document.getElementById("color-button").style.background = "white";
  document.getElementById("page-selection").style.background = "white";
  document.getElementById("page-button1").style.background = "#D3D3D3";
  document.getElementById("page-button2").style.background = "#D3D3D3";
  document.getElementById("page-button3").style.background = "#D3D3D3";
  document.getElementById("projectorList1").style.background = "white";
  document.getElementById("projectorList2").style.background = "white";
  document.getElementById("projectorList3").style.background = "white";
  document.body.style.background = "#D3D3D3";
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "black";

}



}
