"use strict";

var colorArr = [ '#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E', '#F1C40F', '#E67E22', '#E74C3C', '#BDC3C7', '#7F8C8D'];

var grid = document.querySelector("#myGrid");
var colors = document.querySelector("#colorWrapper");
var spans = document.querySelectorAll('span');
var brushColor = 'black';

function applyColors(colArr){
    for (var i = 0; i < spans.length; i++) {
      spans[i].setAttribute("style", "background-color: " + colArr[i]);
  }
}

var getColor = function() {
  if (event.target !== event.currentTarget) {
    brushColor = event.target.getAttribute("style");
    console.log(brushColor);
}};

var changeColor = function() {
    if (event.target !== event.currentTarget) {
       event.target.setAttribute("style", brushColor);
}};

applyColors(colorArr);
grid.addEventListener("mousedown", changeColor, false);
colors.addEventListener("mousedown", getColor, false);
