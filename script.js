"use strict";

var grid = document.querySelector("#myGrid");


var changeColor = function() {
    if (event.target !== event.currentTarget) {
      console.log(event.target);
     event.target.setAttribute("style", "background-color: black");

  }
};

  grid.addEventListener("mousedown", changeColor, false);
