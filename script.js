// "use strict";
//
// var brushColor = 'black';
// var colorArr = [ '#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E',
// '#F1C40F', '#E67E22', '#E74C3C', '#BDC3C7', '#7F8C8D'];
//
// var grid = document.querySelector("#myGrid");
// var colors = document.querySelector("#colorWrapper");
// var spans = document.querySelectorAll('span');
//
// console.log(brushColor);
//
// /**************
// Create functions that check if the mouse is up or down
// If
// **************/
// var body = document.querySelector('body');
// body.addEventListener("mousedown", mouseDown, true);
// body.addEventListener("mouseup", mouseUp, true);
// body.addEventListener("mouseenter", mouseMoving, true);
// var mouseIsDown;
// var mouseIsMoving;
//
// console.log(mouseIsDown);
//
// function mouseDown(){
//   mouseIsDown = true;
//   console.log('Mouse is down? ' + mouseIsDown);
// }
//
// function mouseUp(){
//   mouseIsDown = false;
//   console.log('Mouse is down? ' + mouseIsDown);
// }
//
// function mouseMoving(){
//   if(mouseIsDown === true){
//     mouseIsMoving = true;
//     console.log('Mouse is moving? ' + mouseIsMoving);
//   }
// }
//
// function applyColors(colArr){
//     for (var i = 0; i < spans.length; i++) {
//       spans[i].setAttribute("style", "background-color: " + colArr[i]);
// }}
//
// var getColor = function() {
//   if (event.target !== event.currentTarget) {
//     brushColor = event.target.getAttribute("style");
// }};
//
// var changeColor = function() {
//     if (event.target !== event.currentTarget) {
//        event.target.setAttribute("style", brushColor);
//        if(mouseIsMoving === true){
//          console.log('Painting!');
//          event.target.setAttribute("style", brushColor);
// }}};
//
// applyColors(colorArr);
// grid.addEventListener("mousedown", changeColor, false);
// colors.addEventListener("mousedown", getColor, false);
//
// ////////////////////////////////////////////////////////////////////////////////
