// Alerta de bienvenida al cargar la página

document.getElementById('body').onload = function () {
    window.alert("Bienvenido a mi Currículum Vitae!!");
}

// Agrandar imágen en desktop

document.getElementById("foto").addEventListener("mouseover", mouseOverEnFoto);
document.getElementById("foto").addEventListener("mouseout", mouseOutEnFoto);

function mouseOverEnFoto() {
  document.getElementById("foto").style.width = "150px";
  document.getElementById("foto").style.transition = "400ms all ease";
}

function mouseOutEnFoto() {
  document.getElementById("foto").style.width = "120px";
}

// Resaltar subtítulos

document.getElementsByTagName('h3')[0].addEventListener("mouseover", mouseOverEnInfo);
document.getElementsByTagName('h3')[0].addEventListener("mouseout", mouseOutEnInfo);

function mouseOverEnInfo() {
  document.getElementsByTagName('h3')[0].style.color = "blue";
}

function mouseOutEnInfo() {
  document.getElementsByTagName('h3')[0].style.color = "deepskyblue";
}

document.getElementsByTagName('h3')[1].addEventListener("mouseover", mouseOverEnHabYExp);
document.getElementsByTagName('h3')[2].addEventListener("mouseover", mouseOverEnHabYExp);
document.getElementsByTagName('h3')[1].addEventListener("mouseout", mouseOutEnHabYExp);
document.getElementsByTagName('h3')[2].addEventListener("mouseout", mouseOutEnHabYExp);

function mouseOverEnHabYExp() {
  document.getElementsByTagName('h3')[1].style.color = "red";
  document.getElementsByTagName('h3')[2].style.color = "red";
}

function mouseOutEnHabYExp() {
  document.getElementsByTagName('h3')[1].style.color = "deepskyblue";
  document.getElementsByTagName('h3')[2].style.color = "deepskyblue";
}

document.getElementsByTagName('h3')[3].addEventListener("mouseover", mouseOverEnEdu);
document.getElementsByTagName('h3')[4].addEventListener("mouseover", mouseOverEnEdu);
document.getElementsByTagName('h3')[3].addEventListener("mouseout", mouseOutEnEdu);
document.getElementsByTagName('h3')[4].addEventListener("mouseout", mouseOutEnEdu);

function mouseOverEnEdu() {
  document.getElementsByTagName('h3')[3].style.color = "orange";
  document.getElementsByTagName('h3')[4].style.color = "orange";
}

function mouseOutEnEdu() {
  document.getElementsByTagName('h3')[3].style.color = "deepskyblue";
  document.getElementsByTagName('h3')[4].style.color = "deepskyblue";
}

document.getElementsByTagName('h3')[5].addEventListener("mouseover", mouseOverEnContacto);
document.getElementsByTagName('h3')[5].addEventListener("mouseout", mouseOutEnContacto);

function mouseOverEnContacto() {
  document.getElementsByTagName('h3')[5].style.color = "springgreen";
}

function mouseOutEnContacto() {
  document.getElementsByTagName('h3')[5].style.color = "aquamarine";
}